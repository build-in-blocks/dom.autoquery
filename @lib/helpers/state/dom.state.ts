import { SwapObject } from '@_types/queries.types';

export const domState = {
  update: function (id: string, obj: SwapObject) {
    this.result[id] = { ...this.result[id], ...obj };
  },
  result: {} as Record<string, SwapObject>,
};
