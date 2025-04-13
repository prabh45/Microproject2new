//itemController class
import Item from '../models/itemModel.js';

export const createItem = async (req, res) => {
  try {
    const newItem = new Item(req.body);
     const savedItem = await newItem.save();
      res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
