import {signal} from '@preact/signals-react';
import {useSignals} from '@preact/signals-react/runtime';

class Lol {
  _field1Obj = signal<{field1?: string; fieldLol?: string}>({
    field1: undefined,
    fieldLol: undefined,
  });

  _field2Obj = signal<{field2?: string}>({
    field2: undefined,
  });

  _field3Obj = signal<{field3?: string}>({
    field3: undefined,
  });

  _field4Obj = signal<{field4?: string}>({
    field4: undefined,
  });

  setField1 = () => {
    this._field1Obj.value = {
      ...this._field1Obj.value,
      field1: this._field1Obj.value.field1
        ? this._field1Obj.value.field1 + 1
        : '1',
    };
  };

  setField2 = () => {
    this._field2Obj.value = {
      ...this._field2Obj.value,
      field2: this._field2Obj.value.field2
        ? this._field2Obj.value.field2 + 2
        : '2',
    };
  };

  setField3 = () => {
    this._field3Obj.value = {
      ...this._field3Obj.value,
      field3: this._field3Obj.value.field3
        ? this._field3Obj.value.field3 + 3
        : '3',
    };
  };

  setField4 = () => {
    this._field4Obj.value = {
      ...this._field4Obj.value,
      field4: this._field4Obj.value.field4
        ? this._field4Obj.value.field4 + 4
        : '4',
    };
  };

  get field1Obj() {
    return this._field1Obj.value;
  }

  get field2Obj() {
    return this._field2Obj.value;
  }

  get field3Obj() {
    return this._field3Obj.value;
  }

  get field4Obj() {
    return this._field4Obj.value;
  }
}

const lol = new Lol();

export const useLeftStore = () => {
  useSignals();

  return lol;
};
