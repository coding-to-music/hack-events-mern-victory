import { USER_JWT_TIMEOUT } from '@Config/Passport';
import UserService from '@Services/UserService';
import { JWTUserAuthToken, JWTUserAuth } from '@Shared/api/Responses';
import { Response, Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { Get, JsonController, UseBefore, Res, Req, Post } from 'routing-controllers';

import { UserAuthorisation } from '../middleware/UserAuthorisation';
import { UserLogin } from '../middleware/UserLogin';

@JsonController('/user')
export class UserAuthController {
  constructor(
    private UserService: UserService
  ) {}

  /**
   * Signs a user with the JWT secret.
   * @param user The public user information to sign.
   * @returns The JWT token signed for that user.
   */
  generateToken(user: JWTUserAuthToken) {
    return jwt.sign(user, process.env.SESSION_SECRET, {
      expiresIn: USER_JWT_TIMEOUT,
    });
  }

  @Get('/authorised')
  @UseBefore(UserAuthorisation)
  async authorised(@Res() res: Response) {
    return res.status(200).end();
  }

  @Post('/login')
  @UseBefore(UserLogin)
  login(@Req() req: Request): JWTUserAuth {
    const jwt = this.UserService.getJwtUser(req.user);
    return {
      token: `JWT ${this.generateToken(jwt)}`,
      user: jwt,
    };
  }
}
