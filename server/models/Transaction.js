import mongoose from "mongoose";

const TransactionSchemna = new mongoose.Schema(
  {
    userId:String,
    cost:String,
    products:{
        type:[mongoose.Types.ObjectId],
        of:Number
    },
  },
  {timestamps:true}
);

const Transaction = mongoose.model("Transaction",TransactionSchemna );
export default Transaction;