import {Response, Request} from "express";
import {Controller, Get, HttpStatus, Req, Res} from "@nestjs/common";

import {ResponseData} from "@core/types";
import {AppDto} from "@usecases";

@Controller()
export class AppController {
  @Get()
  async getHello(
    @Req() _req: Request<AppDto>,
    @Res() _res: Response<ResponseData<AppDto>>,
  ): Promise<Response> {
    try {
      const location = _req.headers.location;
      return _res.status(HttpStatus.OK).json({
        status: HttpStatus.OK,
        data: {
          status: location,
        },
      });
    } catch (error) {
      return _res.status(error.status).json(error);
    }
  }
}
