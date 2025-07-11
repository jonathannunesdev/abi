import {IRepository} from "@abstract/contracts/repository.contract";
import {UserEntity} from "domain/entity/user.entity";

export class AppRepository implements IRepository<UserEntity> {
  create: (item: UserEntity) => Promise<UserEntity>;
  update: (
    filter: Partial<UserEntity>,
    item: Partial<UserEntity>,
  ) => UserEntity;
  get: (filter: Partial<UserEntity>) => Array<UserEntity>;
  getAll: () => Array<UserEntity>;
  delete: (filter: Partial<UserEntity>) => boolean;
}
