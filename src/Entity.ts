import { Adapter } from "./Adapter";
import ObjectToArrayAdapter from "./Adapter/ObjectToArrayAdapter";

interface ArrayObject {
  [id: string]: any;
}

export abstract class Entity {
  private objectToArrayAdapter: Adapter<
    Object,
    ArrayObject,
    any
  > = new ObjectToArrayAdapter();

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
