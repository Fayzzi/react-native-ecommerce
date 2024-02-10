const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User-native",
    },
    products: [
      {
        name: {
          type: String,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
        price: {
          type: Number,
          required: true,
        },
        image: {
          type: String,
          required: true,
        },
      },
    ],
    totalPrice: {
      type: Number,
      required: true,
    },
    shippingPrice: {
      type: Number,
    },
    shippingAddress: [],
    paymentMethod: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order-native", OrderSchema);
