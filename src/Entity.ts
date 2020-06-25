import { Adapter } from './Adapter';

interface ArrayObject {
  [id: string]: any;
}

export abstract class Entity {
  private objectToArrayAdapter: Adapter<Object, ArrayObject, any>;

  constructor(objectToArray: Adapter<Object, ArrayObject, any>) {
    this.objectToArrayAdapter = objectToArray;
  }

  /**
   * convert Entity to array
   */
  toArray(exceptParameter?: ArrayObject): { [id: string]: any } {
    this.objectToArrayAdapter.source(this);
    let data = this.objectToArrayAdapter.transform();

    if (exceptParameter) {
      data = data.filter((item: String, index: string): boolean => {
        return exceptParameter.findIndex(index) === -1 ? false : true;
      });
    }

    return data;
  }
}
