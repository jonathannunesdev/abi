import {HttpStatus} from "@nestjs/common";

export class ResponseData<T> {
  data: T;
  status: number;

  constructor(data: T, status = HttpStatus.OK) {
    this.data = data;
    this.status = status;
  }
}
