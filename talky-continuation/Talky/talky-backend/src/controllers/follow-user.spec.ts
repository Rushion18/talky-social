// follow-user.spec.ts

import { Request } from 'express';
import mssql from 'mssql';
// import { followUser } from './user.service';


describe("Testing Follow User Functionality", () => {
    let res: any;

    beforeEach(() => {
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn().mockReturnThis()
        }
    })

    it('Returns an error if follower or following user ID is missing', async () => {
        const req = {
            body: {
                // Either followerUserId or followingUserId is missing
            }
        }

        await followUser(req as Request, res);

        expect(res.json).toHaveBeenCalledWith({ "error": "\"followerUserId\" and \"followingUserId\" are required" });
    });

    it("Successfully follows the user", async () => {
        const req = {
            body: {
                followerUserId: 1,
                followingUserId: 2
            }
        }

        const mockedExecute = jest.fn().mockResolvedValueOnce({ rowsAffected: [1] });

        const mockedRequest = {
            input: jest.fn().mockReturnThis(),
            execute: mockedExecute
        }

        const mockedPool = {
            request: jest.fn().mockReturnValue(mockedRequest as never)
        }

        jest.spyOn(mssql, 'connect').mockResolvedValueOnce(mockedPool as never);

        await followUser(req as Request, res);

        expect(res.json).toHaveBeenCalledWith({ message: 'User followed successfully' });
        expect(res.status).toHaveBeenCalledWith(200);
    });
});
