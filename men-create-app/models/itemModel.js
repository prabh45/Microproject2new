//itemModel class
import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
  name: { type: String, required: true, minlength: 2 },
   description: { type: String, required: true },
    quantity: { type: Number, required: true, min: 1 },
     price: { type: Number, required: true },
  category: {
    type: String,
    enum: ['Food', 'Electronics', 'Clothing', 'Other'],
    default: 'Other'
  }
}, { timestamps: true });

 const Item = mongoose.model('Item', itemSchema);
export default Item;
