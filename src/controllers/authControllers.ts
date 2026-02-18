import type { Request, Response } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User";

//register new User
export async function register(req: Request, res: Response){
    try {
        const { name, email, password } = req.body as {
            name: string;
            email: string;
            password: string;
        };

        if (!name || !email || !password) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const existing = await User.findOne({ email });

        if (existing) {
            return res.status(400).json({ message: "Email already in use" });
        }

        const passwordHash = await bcrypt.hash(password, 10);
    } catch (error) {

    }
}