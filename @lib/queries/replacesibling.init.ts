import { domState } from '@_helpers/state/dom.state';
import { instructionAttribute, refElemAttribute, swapsize } from '@_helpers/var.root';
//-
import { SwapObject } from '@_types/queries.types';

// ------------------------------------------------------------------------
// INITIALIZATION: Build swap state in clientState BEFORE starting watchers
// ------------------------------------------------------------------------
export const initializeSiblingSwap = ({ deviceSizeAttributeType }: { deviceSizeAttributeType: string }) => {
  const replacerElems = document.querySelectorAll(`[${instructionAttribute.replaceSibling}][${deviceSizeAttributeType}]`);

  replacerElems.forEach((replacerElem) => {
    const refAttribute = replacerElem.getAttribute(instructionAttribute.replaceSibling);
    const refelem = document.querySelector(`[${refElemAttribute}="${refAttribute}"]`);

    if (refelem) {
      //---------------------------------------------------------
      // Store swap data in clientState with insertion point info
      //---------------------------------------------------------
      let swapObj: SwapObject = {
        refelem,
        _replacerElem: replacerElem,
        _parentElem: refelem.parentNode,
        _nextSiblingElem: refelem.nextSibling,
        _refAttribute: refAttribute,
        _sizeAttributeType: deviceSizeAttributeType,
      };
      //-
      const attrValue = replacerElem.getAttribute(deviceSizeAttributeType);
      //-
      if (attrValue) {
        if (deviceSizeAttributeType === swapsize.AT) {
          swapObj = {
            ...swapObj,
            atsize: parseInt(attrValue),
          };
        }
        if (deviceSizeAttributeType === swapsize.UPTO) {
          swapObj = {
            ...swapObj,
            uptosize: parseInt(attrValue),
          };
        }
        if (deviceSizeAttributeType === swapsize.FROM) {
          swapObj = {
            ...swapObj,
            fromsize: parseInt(attrValue),
          };
        }
        if (deviceSizeAttributeType === swapsize.WITHINRANGE) {
          //----------------------------------------
          // Parse e.g. range "2-4" into min and max
          //----------------------------------------
          const rangeStr = replacerElem.getAttribute(swapsize.WITHINRANGE);
          if (rangeStr) {
            const [minSize, maxSize] = rangeStr.split('-').map(Number);
            //-
            swapObj = {
              ...swapObj,
              range: {
                minSize,
                maxSize,
              },
              withinsizerange: parseInt(attrValue),
            };
          }
        }
      }
      //----------------
      // Update domState
      //----------------
      domState.update(`${refAttribute}_${deviceSizeAttributeType}`, swapObj);
      //---------------------------------------------------------
      // Remove replacer from DOM - we'll add it back when needed
      //---------------------------------------------------------
      replacerElem.remove();
    }
  });
};
