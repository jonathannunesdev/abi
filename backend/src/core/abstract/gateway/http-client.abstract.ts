export interface IHttpClient {
  get: <T = any>(input: Input, headers: object) => Promise<T>;
  post: <T = any>(input: Input, headers: object) => Promise<T>;
}

export type Input = {
  url: string;
  params: object;
};
