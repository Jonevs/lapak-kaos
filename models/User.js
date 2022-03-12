<<<<<<< HEAD
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.models.User || mongoose.model("User", userSchema);
export default User;
=======
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        name: {type: String, required: true},
        email: {type: String, required: true, unique: true},
        password: {type: String, required: true},
        isAdmin: {type: Boolean, required: true, default: false},
    },{
        timestamps: true,
    }
);

const User = mongoose.models.User || mongoose.model('User', userSchema);
export default User;
>>>>>>> a8d9ba8b585b1f17f2e1079516a9187cabd34311
