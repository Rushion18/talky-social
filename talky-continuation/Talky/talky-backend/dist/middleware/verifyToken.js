"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
dotenv_1.default.config();
const verifyToken = (request, res, next) => {
    try {
        const token = request.headers["token"];
        // console.log(token);
        if (!token) {
            return res.status(401).json({
                message: "No token provided",
            });
        }
        const decoded = jsonwebtoken_1.default.verify(token, process.env.SECRET);
        console.log(decoded);
        request.info = decoded;
        console.log(request.info);
    }
    catch (error) {
        return res.json(error.message);
    }
    next();
};
exports.verifyToken = verifyToken;
