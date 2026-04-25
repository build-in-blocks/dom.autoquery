export interface _Default {
  deviceUnit: 'px';
}

export type RefElemAttribute = '_refelem';

export interface InstructionAttr {
  replaceRef: '_replaceref';
  replaceSibling: '_replacesibling';
}

export interface SwapSize {
  AT: '_atsize';
  UPTO: '_uptosize';
  FROM: '_fromsize';
  WITHINRANGE: '_withinsizerange';
}
