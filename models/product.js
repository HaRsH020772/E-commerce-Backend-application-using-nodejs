const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, 'Please provide a product name!!'],
        trim: true,
        maxlength: [120, 'Product name should not be more than 120 characters!!']
    },
    price: {
        type: Number,
        required: [true, 'Please provide a product price!!'],
        maxlength: [6, 'Product price should not be more than 6 digits!!']
    },
    description: {
        type: String,
        required: [true, 'Please provide a product description!!']
    },
    photos: [
        {
            id:{
                type:String,
                required:true
            },
            secure_url:{
                type:String,
                required:true
            }
        }
    ],
    category: {
        type: String,
        required: [true, 'Please provide a product category!!'],
        enum: {
            values: [
                'shortsleeves',
                'longsleeves',
                'sweatshirt',
                'hoodies'
            ],
            message: 'Please select categories from  short-sleeves | long-sleeves | sweat-shirt | hoodies'
        }
    },
    stock: {
        type: Number,
        required:[true, 'Please add few quantity of item!!']
    },
    brand: {
        type: String,
        required:[true, "Please add a brand for clothing"]
    },
    ratings: {
        type:Number,
        default:0
    },
    numberOfReviews: {
        type:Number,
        default:0
    },
    reviews: [
        {
            user: {
                type: mongoose.Schema.ObjectId,
                ref: 'User',
                required:true
            },
            name: {
                type:String,
                required: true
            },
            rating: {
                type: Number,
                required: true
            },
            comment: {
                type:String,
                required: true
            }
        }
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: 'User',
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Product', productSchema);
