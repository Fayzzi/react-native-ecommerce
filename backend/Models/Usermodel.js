const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    verified: {
      type: String,
      default: false,
    },
    verificationToken: String,
    adresses: [
      {
        name: String,
        mobileNo: String,
        houseNo: String,
        street: String,
        landmark: String,
        city: String,
        country: String,
        postalCode: String,
      },
    ],
    orders: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Order-native",
      },
    ],
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("User-native", UserSchema);
