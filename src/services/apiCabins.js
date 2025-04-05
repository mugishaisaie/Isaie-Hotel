import supabase,{supabaseUrl} from "./supabase";
 

export async function getCabins() {
    
const { data, error } = await supabase
.from('cabins')
.select('*')

if(error){
    console.error(error)
    throw new Error("Cabin could not fetched ");
    
}
  return data;  
}
export async function deleteCabins(id) {
  const { error } = await supabase
  .from('cabins')
  .delete()
  .eq('id', id)


if(error){
    console.error(error)
    throw new Error("cabin could not Deleted");
    
}
  
}
// 
export async function createEditCabin(newCabin,id) {

  const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl);
  // console.log("isSupabaseUrl String",supabaseUrl)
  const imageName= `${Math.random()}-${newCabin.image.name}`.replaceAll("/","")
  const imagePath = hasImagePath ? newCabin.image :`${supabaseUrl}/storage/v1/object/public/cabins-image/${imageName}`
  // https://rehjaqtmrlgbkagerhyv.supabase.co/storage/v1/object/public/cabins-image//cabin-001.jpg
  // 1. create/edit cabin
  let query =  supabase.from("cabins");
  // A) Create
  if(!id)query =query.insert([{...newCabin,image:imagePath}])

// B)edit
if(id)query =query.update({...newCabin,image:imagePath}).eq("id",id)

const {data,error} = await query.select().single();

if(error){
    console.error(error)
    throw new Error("cabin could not created");
    
}
// 2 upload Image
if(hasImagePath) return data; 

const { error:storageError } = await supabase
  .storage.from("cabins-image").upload(imageName,newCabin.image)

  // 3. Delete a cabin if there was an error in Image Uploading
  if(storageError){
    await supabase
  .from('cabins')
  .delete()
  .eq('id', data.id)

  console.log(storageError);
  throw new Error("cabin image could not be uploaded and the cabin was not created")
  }
  return data
}

