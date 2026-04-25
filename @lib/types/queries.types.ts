export interface SwapObject {
  refelem: Element;
  _replacerElem: Element;
  _refAttribute: string | null;
  _sizeAttributeType: string;
  atsize?: number;
  uptosize?: number;
  fromsize?: number;
  range?: {
    minSize?: number;
    maxSize?: number;
  };
  withinsizerange?: number;
}
