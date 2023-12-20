"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mssql_1 = __importDefault(require("mssql"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userController_1 = require("./userController");
describe("User registration", () => {
    let res;
    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
    });
    it("successfully registeres a user", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            body: {
                username: "Test Test",
                email: "test@gmail.com",
                password: "@Hashedpass123"
            }
        };
        jest.spyOn(bcrypt_1.default, 'hash').mockResolvedValueOnce("@Hashedpass123");
        const mockedInput = jest.fn().mockReturnThis();
        const mockedExecute = jest.fn().mockResolvedValue({ rowsAffected: [1] });
        const mockedRequest = {
            input: mockedInput,
            execute: mockedExecute
        };
        const mockedPool = {
            request: jest.fn().mockReturnValue(mockedRequest)
        };
        jest.spyOn(mssql_1.default, 'connect').mockResolvedValue(mockedPool);
        yield (0, userController_1.registerUser)(req, res);
        expect(res.json).toHaveBeenCalledWith({ message: 'User Registered Successfully!' });
        expect(res.status).toHaveBeenCalledWith(200);
        expect(mockedInput).toHaveBeenCalledWith('password', mssql_1.default.VarChar, '@Hashedpass123');
        expect(mockedInput).toHaveBeenCalledWith('username', mssql_1.default.VarChar, 'Test Test');
        expect(mockedInput).toHaveBeenCalledWith('email', mssql_1.default.VarChar, 'test@gmail.com');
    }));
});
describe("Testing Login Functionality", () => {
    let res;
    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
    });
    it('Returns an error if email or password is empty', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            body: {
                email: '',
                password: ''
            }
        };
        yield (0, userController_1.loginUser)(req, res);
        expect(res.json).toHaveBeenCalledWith({ "error": "\"email\" is not allowed to be empty" });
    }));
    it('returns an error if email or password is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            body: {}
        };
        yield (0, userController_1.loginUser)(req, res);
        expect(res.json).toHaveBeenCalledWith({ "error": "\"email\" is required" });
    }));
    it("Returns an error if email is not in the database", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            body: {
                email: "incorrect@email.com",
                password: "12152454"
            }
        };
        jest.spyOn(mssql_1.default, 'connect').mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({ recordset: [] })
        });
        yield (0, userController_1.loginUser)(req, res);
        expect(res.json).toHaveBeenCalledWith({ error: "User not found" });
    }));
    it("successfully logs in user and returns a token", () => __awaiter(void 0, void 0, void 0, function* () {
        let expectedUser = {
            username: "Emmanuel Kipsang",
            email: "emmqnuelkipsqng@gmail.com",
            password: "@Emmanuel123"
        };
        const req = {
            body: {
                email: expectedUser.email,
                password: "@Correctpass123"
            }
        };
        jest.spyOn(mssql_1.default, 'connect').mockResolvedValueOnce({
            request: jest.fn().mockReturnThis(),
            input: jest.fn().mockReturnThis(),
            execute: jest.fn().mockResolvedValueOnce({ recordset: [expectedUser] })
        });
        jest.spyOn(bcrypt_1.default, 'compare').mockResolvedValueOnce(true);
        jest.spyOn(jsonwebtoken_1.default, 'sign').mockReturnValueOnce("generate-token-snmdsjdfnnlkjljfdg");
        yield (0, userController_1.loginUser)(req, res);
        expect(res.json).toHaveBeenCalledWith({
            message: "Logged in Successfully",
            token: "generate-token-snmdsjdfnnlkjljfdg"
        });
    }));
});
