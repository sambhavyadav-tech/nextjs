import mongoose, {Schema} from "mongoose";
const tenderSchema = new Schema(
 {
    tenderId: String,
    tenderTitle: String,
    tenderDescription: String,
    publishDate: String,
    closingDate: String,
    tenderStatus: String,
    category: String,
    tenderDocuments: String

    },

   

);

const tender = mongoose.models.tender || mongoose.model("tender",tenderSchema) ;  //creating a model of the user with the UserSchema
 export default tender;

