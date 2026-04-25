import { performSiblingSwap } from '@_queries/replacesibling.swap';
//-
import { domState } from '@_helpers/state/dom.state';
import { refElemAttribute, swapsize } from '@_helpers/var.root';
//-
import { SwapObject } from '@_types/queries.types';
import { ActiveDevice } from '@_types/modified.types';

// ------------------------------------------------------------------------
// INITIALIZATION: Build swap state in clientState BEFORE starting watchers
// ------------------------------------------------------------------------
export const initializeSiblingSwap = ({ _instructionAttribute, activeDevice, deviceSizeAttributeType }: { _instructionAttribute: '_replaceref' | '_replacesibling'; activeDevice: ActiveDevice; deviceSizeAttributeType: string }) => {
  const replacerElems = document.querySelectorAll(`[${_instructionAttribute}][${deviceSizeAttributeType}]`);
  //-
  replacerElems.forEach((replacerElem) => {
    const refAttribute = replacerElem.getAttribute(_instructionAttribute);
    const refelem = document.querySelector(`[${refElemAttribute}="${refAttribute}"]`);
    //-
    if (refelem) {
      //---------------------------------------------------------
      // Store swap data in clientState with insertion point info
      //---------------------------------------------------------
      let swapObj: SwapObject = {
        refelem,
        _replacerElem: replacerElem,
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
      //---------------------------------
      // Initial swapping of DOM elements
      //---------------------------------
      performSiblingSwap({ on: 'pageLoad', _instructionAttribute, activeDevice, deviceSizeAttributeType });
    }
  });
};
