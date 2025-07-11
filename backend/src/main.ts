import {NestModule} from "@nestjs/common";
import {AppModule} from "./infra/http/nestjs/app.module";
import {Nest} from "./infra/http/nestjs/nestjs";

const Bootstrap = () => {
  Nest(AppModule as unknown as NestModule);
};

Bootstrap();
