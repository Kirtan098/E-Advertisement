const cloudinary=require("cloudinary").v2;

const uploadFileToCloudinary=async(file)=>{
     // configuration of cloudinary
     cloudinary.config({
        cloud_name:'dh4slidr4',
        api_key:'563561474557866',
        api_secret:'IP2OrOvKXuqoD1v04WCvwn2IbYI',
      })

      const cloudinaryResponse=await cloudinary.uploader.upload(file.path);
      return cloudinaryResponse;
}

module.exports={
    uploadFileToCloudinary 
}