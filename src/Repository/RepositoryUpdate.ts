/**
 * Store information and deside what data source will take.
 */
export interface RepositoryUpdate<T, V> {
  update(value: V): Promise<T>;
}
