import * as jwt from "jsonwebtoken";  // ✅ Works for both ESM & CommonJS

import { Response } from "express";

export const generateToken = (userId: string, res: Response): string => {
    const payload = { id: userId };

    const token = jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn: "7d" });

    const options = {
        expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days expiry
        httpOnly: true,
        sameSite: "strict" as const,
        secure: process.env.NODE_ENV === "production" // Secure in production
    };

    res.cookie("jwt", token, options);
    return token;
};
