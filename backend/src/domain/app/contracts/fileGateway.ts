export interface IFileGateway {
  save: (file: File) => Promise<string>;
}
