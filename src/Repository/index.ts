import { RepositoryUpdate } from './RepositoryUpdate';
import { RepositoryRead } from './RepositoryRead';
import { RepositoryModify } from './RepositoryModify';

/**
 * Store information and deside what data source will take.
 */
export interface Repository<T, V>
  extends RepositoryUpdate<T, V>,
    RepositoryRead<T, V>,
    RepositoryModify<T, V> {}
