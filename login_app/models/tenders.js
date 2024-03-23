import mongoose, {Schema} from "mongoose";
const tenders = new Schema(
 
{
    id: String,
    title: String,
    publishdate:String,
    closingdate: String,
    tenderstatus:String,
    category:String,
    documents:String
  },

    


);

const TenderModal = mongoose.models.TenderModal || mongoose.model("TenderModal",tenders) ;  //creating a model of the user with the UserSchema
 export default TenderModal;