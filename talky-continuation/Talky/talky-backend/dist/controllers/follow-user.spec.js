"use strict";
// follow-user.spec.ts
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
// import { followUser } from './user.service';
describe("Testing Follow User Functionality", () => {
    let res;
    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        };
    });
    it('Returns an error if follower or following user ID is missing', () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            body: {
            // Either followerUserId or followingUserId is missing
            }
        };
        yield followUser(req, res);
        expect(res.json).toHaveBeenCalledWith({ "error": "\"followerUserId\" and \"followingUserId\" are required" });
    }));
    it("Successfully follows the user", () => __awaiter(void 0, void 0, void 0, function* () {
        const req = {
            body: {
                followerUserId: 1,
                followingUserId: 2
            }
        };
        const mockedExecute = jest.fn().mockResolvedValueOnce({ rowsAffected: [1] });
        const mockedRequest = {
            input: jest.fn().mockReturnThis(),
            execute: mockedExecute
        };
        const mockedPool = {
            request: jest.fn().mockReturnValue(mockedRequest)
        };
        jest.spyOn(mssql_1.default, 'connect').mockResolvedValueOnce(mockedPool);
        yield followUser(req, res);
        expect(res.json).toHaveBeenCalledWith({ message: 'User followed successfully' });
        expect(res.status).toHaveBeenCalledWith(200);
    }));
});
