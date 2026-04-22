export interface SwapObject {
  refelem: Element;
  _replacerElem: Element;
  _parentElem: ParentNode | null;
  _nextSiblingElem: ChildNode | null;
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
