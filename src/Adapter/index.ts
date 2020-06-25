/**
 * transfor any datasource to new type data.
 * A = data source type
 * B = Return value
 * C = options to reqquest a new data
 */
export interface Adapter<A, B, C> {
  /**
   * @param data original data to be transformed
   */
  source(data: A): void;
  /**
   *
   * @param {C} options options to transform data
   * @return {B} get new data transformed
   */
  transform(options?: C): B;
}
