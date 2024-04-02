import mongoose, {Schema} from "mongoose";
const tenders = new Schema(
 
{
    title: String,
    description: String,
    publishdate:String,
    closingdate: String,
    tenderstatus:String,
    category:String,
    documents:String
  },

    


);

const TenderModel = mongoose.models.TenderModel || mongoose.model("TenderModel",tenders) ;  //creating a model of the user with the UserSchema
 export default TenderModel;