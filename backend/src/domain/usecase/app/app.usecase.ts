import {IUseCase} from "@abstract/usecase/use-case.abstract";
import {AppDto} from "@usecases";

export class AppUseCase implements IUseCase<AppDto> {
  async execute(): Promise<AppDto> {
    return {
      status: "200",
    };
  }
}
