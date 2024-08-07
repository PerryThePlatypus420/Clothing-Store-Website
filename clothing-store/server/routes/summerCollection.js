const express = require('express');
const router = express.Router();
const SummerCollection = require('../models/SummerCollection');

// Get all products in the summer collection
router.get('/', async (req, res) => {
  try {
    const summerCollection = await SummerCollection.find().populate('productID');
    res.send(summerCollection);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// // Add a new product to the summer collection
// router.post('/', async (req, res) => {
//   const { productID } = req.body;

//   if (!productID) {
//     return res.status(400).json({ message: 'Product ID is required' });
//   }

//   try {
//     const newSummerCollection = new SummerCollection({ productID });
//     const savedCollection = await newSummerCollection.save();
//     res.status(201).json(savedCollection);
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Get a single item by its ID
// router.get('/:id', async (req, res) => {
//   try {
//     const summerCollection = await SummerCollection.findById(req.params.id).populate('productID');
//     if (summerCollection) {
//       res.json(summerCollection);
//     } else {
//       res.status(404).json({ message: 'Item not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

// // Remove a product from the summer collection
// router.delete('/:id', async (req, res) => {
//   try {
//     const result = await SummerCollection.findByIdAndDelete(req.params.id);
//     if (result) {
//       res.json({ message: 'Item removed successfully' });
//     } else {
//       res.status(404).json({ message: 'Item not found' });
//     }
//   } catch (error) {
//     res.status(500).json({ message: error.message });
//   }
// });

module.exports = router;
