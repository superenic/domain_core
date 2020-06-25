export abstract class Rule<V> {
  private _attribute: string = '';
  private _message: string = 'Attribute :attribute should be renamed';

  constructor(attribute: string) {
    this._attribute = attribute;
  }

  /**
   * Determine if the validation rule passes.
   *
   * @param  {string} attribute
   * @param  {mixed}  value
   * @return {bool}
   */
  abstract passes(value: V): boolean;

  /**
   * Get the validation error message.
   *
   * @return {string}
   */
  get message(): string {
    return this._message.replace(/(:attribute)/gi, this._attribute);
  }

  set message(value: string) {
    this._message = value;
  }
}
