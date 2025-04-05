import React from "react";
import Input from "../../ui/Input";
import Form from "../../ui/Form";
import Button from "../../ui/Button";
import FileInput from "../../ui/FileInput";
import Textarea from "../../ui/Textarea";
import { useForm } from "react-hook-form";
import FormRow from '../../ui/FormRow'
import useCreateCabin from "./useCreateCabin";
import useEditCabins from "./useEditCabins";



function CreateCabinForm({cabinToEdit ={},onCloseModal}) {
  const {id:editId, ...editValues} = cabinToEdit;
  const editSession = Boolean(editId);
  // console.log(editSession)
  const {register,handleSubmit,reset,getValues,formState} = useForm({
    defaultValues: editSession ? editValues: {}
  });

  const {errors} = formState;
  console.log(errors)


   const {isLoading,createCabin} = useCreateCabin();
   const {editCabin} = useEditCabins();
  


  function OnSubmitForm(data){
   const image = typeof data.image === "string" ? data.image : data.image[0]
    if(editSession)editCabin({newCabinData:{...data,image},id:editId},{
      onSuccess:()=> {
        reset()
        onCloseModal?.()
      }
    })
   else createCabin({...data, image: image},
  {
    onSuccess:(data)=> {
      reset();
      console.log(data)
      onCloseModal?.()
    }
  })
    // console.log(data)   
  }
  function OnErrorForm(errors){
    console.log(errors)
  }
  return (
    <Form onSubmit={handleSubmit(OnSubmitForm,OnErrorForm)} type={onCloseModal?"modal":"regular"}>

<FormRow label="Cabin name" error={errors?.name?.message}>
  <Input type="text" id="name" {...register("name",{
    required:"This Field is required",
  })} />

</FormRow>
<FormRow label="Cabin maxCapacity" error={errors?.maxCapacity?.message}>
        <Input type="number" id="maxCapacity" disabled={isLoading} {...register("maxCapacity",{
          required: "this Field is Empty",
          min: {
            value: 1,
            message:"the Capacity should be at least 1"
          }
        })}/>
      </FormRow>

      <FormRow label="regular Price" error={errors?.regularPrice?.message}>

        <Input type="number" id="regularPrice" disabled={isLoading} {...register("regularPrice",{
          required: "this Field is Empty"
        })} />
      </FormRow>

      <FormRow label="discount" error={errors?.discount?.message}>
        <Input type="number" id="discount" defaultValue={0} disabled={isLoading} {...register("discount",{
          required: "this Field is Empty",
          validate: (value)=> value < getValues("regularPrice") || "Discount should be less than Regular Price"
         
          
        })} />
      </FormRow>

      <FormRow label="cabin description" error={errors?.description?.message}>
        <Textarea type="number" id="description" defaultValue="" disabled={isLoading} {...register("description",{
          required: "this Field is Empty"
        })}/>
      </FormRow>

      <FormRow label="cabin photo" error={errors?.image?.message}>
        <FileInput id="image" accept="image/*" disabled={isLoading} {...register("image",{
          required: editSession ? false: "this Field is Empty"
        })}/>
      </FormRow>

      <FormRow>
        {/* type is an HTML attribute! */}
        <Button variation="secondary" disabled={isLoading} type="reset" onClick={()=> onCloseModal?.()}>
          Cancel
        </Button>
        <Button disabled={isLoading}>{editSession? "Edit Cabin" :"Create new cabin"}</Button>
      </FormRow>
    </Form>
  );
}

export default CreateCabinForm;
