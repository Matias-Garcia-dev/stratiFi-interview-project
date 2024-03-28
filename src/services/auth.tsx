import jwt from "jsonwebtoken";
import { User } from './api'; 

const JWT_SECRET = 'secret_key';

export const generateAccessToken = (user: User): string => {
    const payload = {
        userId: user.id,
        email: user.email
    };

    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
    return token;
};
