import { generateToken } from "../lib/utils.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
    const { fullName, email, password } = req.body;
    try {
        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters" });
        }

        // Check if user already exists
        const userExists = await User.findOne({ email });
        if (userExists) {
            return res.status(400).json({ message: "Email already exists" });
        }

        // Hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create new user
        const newUser = await User.create({
            fullName,
            email,
            password: hashedPassword,
            profilePic: "", // Set a default empty string or provide a default URL in schema
        });

        if (newUser) {
            // Generate JWT token
            await generateToken(newUser._id, res);

            // Send response
            return res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                email: newUser.email,
                profilePic: newUser.profilePic,
            });
        } else {
            return res.status(400).json({ message: "Invalid user data" });
        }
    } catch (error) {
        console.error("Error in signupController:", error.message);
        return res.status(500).json({ message: "Server error, please try again later" });
    }
};

export const login = (req, res) => {
    res.send("login route");
};

export const logout = (req, res) => {
    res.send("logout route");
};
