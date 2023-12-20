"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
jest.mock('uuid', () => ({
    v4: jest.fn()
}));
describe("This mocks the uuid", () => {
    it("generates a unique id", () => {
        const id = (0, uuid_1.v4)();
        const mockedv4 = jest.requireMock('uuid').v4;
        mockedv4.mockImplementation(() => 'uniqueid_gygfsf_navsv');
    });
});
