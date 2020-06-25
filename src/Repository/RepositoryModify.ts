/**
 * Store information and deside what data source will take.
 */
export interface RepositoryModify<T, V> {
  create(value: V): Promise<T>;
  delete(value: V): Promise<T>;
}
