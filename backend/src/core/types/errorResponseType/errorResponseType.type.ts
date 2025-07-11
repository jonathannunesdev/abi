export class ErrorResponse extends Error {
  status: number;
  message: string;
  technical: any;

  constructor(status: number, message: string, technical: any = "") {
    super();
    this.message = message;
    this.status = status;
    this.technical = technical;
  }
}
