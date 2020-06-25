import { Adapter } from '.';

interface ArrayObject {
  [id: string]: any;
}

export default class ObjectToArrayAdapter
  implements Adapter<Object, ArrayObject, any> {
  private _object: Object | null = null;

  /**
   * @inherit
   */
  source(data: Object): void {
    this._object = data;
  }
  /**
   * @inherit
   */
  transform(): ArrayObject {
    let self = this._object;
    let values = Object.entries(self as object);
    let valueReturn: ArrayObject = [];

    values.forEach((element) => {
      valueReturn[element[0]] = element[1];
    });

    return valueReturn;
  }
}
