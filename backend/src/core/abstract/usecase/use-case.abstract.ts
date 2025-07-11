export abstract class IUseCase<T> {
  abstract execute(param?: any): Promise<Array<T> | T>;
}
