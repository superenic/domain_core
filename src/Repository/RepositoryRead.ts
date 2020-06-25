/**
 * Store information and deside what data source will take.
 */
export interface RepositoryRead<T, V> {
  read(filter?: (value: T) => Boolean): Promise<T>;
}
