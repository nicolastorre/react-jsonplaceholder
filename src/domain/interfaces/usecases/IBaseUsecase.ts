export interface IBaseUsecase<T, U> {
  execute(...args: T[]): U;
}
