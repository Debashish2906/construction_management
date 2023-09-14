const cloudinary=require('cloudinary');
cloudinary.config({
    cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_SECRET_KEY
})
exports.upload=async(req,res)=>{
    console.log(process.env.CLOUDINARY_CLOUD_NAME,"  ",
       process.env.CLOUDINARY_API_KEY,"  ",
       process.env.CLOUDINARY_SECRET_KEY)
    //  let result =await cloudinary.Uploader.upload(req.body.image,{
        console.log(req.body)
        let result =await cloudinary.v2.uploader.upload(req.body.image,{
        public_id:`${Date.now()}`,
        resource_type:"auto"
     });
     res.json({
        public_id:result.public_id,
        url:result.secure_url
     })
}
exports.remove=async(req,res)=>{

    let image_id=req.body.public_id;
   await cloudinary.v2.uploader.destroy(image_id,(err,result)=>{
        if(err) return res.json({sucess:false,err})
        res.send("ok");
    });}