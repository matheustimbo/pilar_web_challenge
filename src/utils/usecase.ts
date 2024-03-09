import { Failure } from "../failures/failure";
import { Either } from "./either";

export interface UseCase<Params, Response> {
  execute(params?: Params): Promise<Either<Failure, Response>>;
}
