import * as dotenv from "dotenv";
import {join} from "path";

dotenv.config({
  path: join(__dirname, "../", ".env"),
});

export class IConfig {
  NODE_ENV: string;
  PORT: number;
  PORT_GRAPHQL: number;
}

export const Config: IConfig = {
  NODE_ENV: process.env.NODE_ENV || `PROD`,
  PORT: Number(process.env.PORT),
};
