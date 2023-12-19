"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoginUser = exports.validateRegisterUser = void 0;
const joi_1 = __importDefault(require("joi"));
exports.validateRegisterUser = joi_1.default.object().keys({
    username: joi_1.default.string().required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().pattern(new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$")),
});
exports.validateLoginUser = joi_1.default.object().keys({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
// export const validateUserEmail = Joi.object().keys({
//     email: Joi.string().email().min(8).required(),
// });
// export const validateUserId = Joi.object().keys({
//     id: Joi.string().min(8).required(),
// });
