import { _Default, InstructionAttr, RefElemAttribute, SwapSize } from '@_types/var.types';

export const _default: _Default = {
  deviceUnit: 'px',
};

export const refElemAttribute: RefElemAttribute = '_refelem';

export const instructionAttribute: InstructionAttr = {
  replaceRef: '_replaceref',
  replaceSibling: '_replacesibling',
};

export const swapsize: SwapSize = {
  AT: '_atsize',
  UPTO: '_uptosize',
  FROM: '_fromsize',
  WITHINRANGE: '_withinsizerange',
};
