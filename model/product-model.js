import mongoose from 'mongoose'
let Schema = mongoose.Schema

let productSchema = Schema({
    productId: Schema.Types.ObjectId,
    name: {
        type: String,
        required: [true, "Product name is required"]
    },
    brand: {
        type: String,
        required: [true, "Brand is required"]
    },
    model: {
        type: String,
        required: [true, "Model Name is required"]
    },
    price: {
        type: Number,
        required: [true, 'Price is required']
    },
    quantity: {
        type: Number, 
        required: [true, 'Quantity is required']
    },
    colors: [String]
})

let productModel = mongoose.model('products', productSchema)

module.exports = productModel