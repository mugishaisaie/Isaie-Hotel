
import React from "react";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";
import { useForm } from "react-hook-form";
import useSignup from "./useSignup";

// Email regex: /\S+@\S+\.\S+/

function SignupForm() {
  const {register,formState,getValues,handleSubmit,reset} = useForm();
  const {errors} = formState;

  const {signup,isLoading}= useSignup();
  function onSubmit({fullName,email,password}) {
    signup({fullName,email,password},{
      onSettled:reset
    })
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow label="Full name" error={errors?.fullName?.message}>
        <Input type="text" id="fullName" {...register("fullName",{required: "Please this Field is Required"})}
        disabled={isLoading}/>
      </FormRow>

      <FormRow label="Email address" error={errors?.email?.message}>
        <Input type="email" id="email" {...register("email",{required: "Please this Field is Required", pattern:{
          value: /\S+@\S+\.\S+/,
          message: "Please provide a valid email address"
        }})} disabled={isLoading}/>
      </FormRow>

      <FormRow label="Password (min 8 characters)" error={errors?.password?.message}>
        <Input type="password" id="password" {...register("password",{required: "Please this Field is Required",minLength:{
          value: 8,
          message:'Please password needs a minimum of 8 characters'
        }})} disabled={isLoading}/>
      </FormRow>

      <FormRow label="Repeat password" error={errors?.passwordConfirm?.message}>
        <Input type="password" id="passwordConfirm" {...register("passwordConfirm",{required: "Please this Field is Required",
          validate: (value)=>value === getValues().password || "The passwords do not match"
        })} disabled={isLoading}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button onClick={reset} variation="secondary" type="reset" disabled={isLoading}>
          Cancel
        </Button>
        <Button>Create new user</Button>
      </FormRow>
    </Form>
  );
}

export default SignupForm;
