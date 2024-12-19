/* This JavaScript code snippet is defining a Mongoose schema for a user in a MongoDB database. Here's
a breakdown of what each part is doing: */
import mongoose from "mongoose";
//import User from './models/User.js'; // Adjust based on your file structure



const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, enum: ["admin", "employee"], required: true },
    profileImage: { type: String },
    createAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const User = mongoose.model("User", userSchema);
export default User; // Default export
