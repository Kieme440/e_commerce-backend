import mongoose from "mongoose";

export const connectDB = async ()=>{
try {
await mongoose.connect("mongodb+srv://kieme440_db_user:OidB88b66CytFnB1@ecomm.w4svbxv.mongodb.net/?appName=ecomm");
console.log("Connected");
}
catch (error){
console.log("Not Connected", error);
}
}; 



