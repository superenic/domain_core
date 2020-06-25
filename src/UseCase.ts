export interface UseCase<T, V> {
  execute(value: T): Promise<V>;
}
