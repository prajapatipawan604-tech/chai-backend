import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
  api_key: 'process.env.CLOUDINARY_API_KEY', 
  api_secret: 'process.env.CLOUDINARY_API_SECRET'
});



const uploadOnCloudinary = async (localfilePath) => {
    try{
        if (!localfilePath) return null
        //upload the file on cloudinary
       const response = await clousinary.uploader.uplpad(localfilePath, {
            resource_type: "auto"
        } )
        // file has been uploaded successfull
        console.log("file is uploaded on cloudinary", response.url);
        return response;
    }catch (error){
         fs.unlinkSync(localFilePath) // remove the locally saves temporary file as the upload operation got failed
         return null;

    }
}


export { uploadOnCloudinary}




cloudinary.v2.uploader
.upload("dog.mp4", {
  resource_type: "video", 
  public_id: "my_dog",
  overwrite: true, 
  notification_url: "https://mysite.example.com/notify_endpoint"})
.then(result=>console.log(result));