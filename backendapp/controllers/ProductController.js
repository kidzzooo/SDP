const Product = require('../models/Product');
const multer = require('multer');
const path = require('path');
const uploadImage = require('../upload');
const fs = require('fs').promises;

// Set up Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/'); // Save uploaded files to the 'uploads' directory
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname)); // Use original filename with a timestamp
  }
});

// Initialize Multer upload
const upload = multer({ storage: storage }).single('image'); // Use single file upload

const listItems = async (req, res) => {
    try {
        upload(req, res, async (err) => {
            if (err) {
                console.error('Error uploading image:', err);
                return res.status(400).json({ message: 'Error uploading image' });
            }
            
            // Check if req.file exists and contains the uploaded file
            if (!req.file) {
                console.error('No file uploaded');
                return res.status(400).json({ message: 'No file uploaded' });
            }

            const { name, price, description, category } = req.body;
            const imageUrlInCloud = await uploadImage(req.file.path,'Artify',req.file.name); // Path of the uploaded image

            const product = await new Product({
                name: name,
                price: price,
                image: imageUrlInCloud,
                description: description,
                category: category,
            }).save();
            await fs.unlink(req.file.path);
            
            res.status(201).json({ message: 'Product created successfully' });
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Failed to create product' });
    }
}

module.exports = { listItems };
