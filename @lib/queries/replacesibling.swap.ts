import { refElemAttribute } from '@_helpers/var.root';
import { domState } from '@_helpers/state/dom.state';
//-
import { ActiveDevice } from '@_types/modified.types';

export const performSiblingSwap = ({ on, _instructionAttribute, activeDevice, deviceSizeAttributeType }: { on: 'pageLoad' | 'pageResize'; _instructionAttribute: '_replaceref' | '_replacesibling'; activeDevice: ActiveDevice; deviceSizeAttributeType: string }) => {
  Object.values(domState.result).forEach((item) => {
    // ----------------------------------------------------------------
    // Filter to only items that have specified deviceSizeAttributeType
    // ----------------------------------------------------------------
    if (item._sizeAttributeType !== deviceSizeAttributeType) return;

    const { refelem, _replacerElem, _refAttribute, atsize, uptosize, fromsize, withinsizerange, range } = item;

    // ------------------------------------------------------------------------------
    // Media Query anchor, in preparation for the "pair swaping" state tracking logic
    // Determine the points to make & keep the "replacer" element visible (or not)
    // Show replacer ONLY when we're at the specified device size
    // ------------------------------------------------------------------------------
    let shouldShowReplacerElem = false;
    if (atsize) shouldShowReplacerElem = activeDevice.id === atsize;
    if (uptosize) shouldShowReplacerElem = activeDevice.id <= uptosize;
    if (fromsize) shouldShowReplacerElem = activeDevice.id >= fromsize;
    if (withinsizerange) shouldShowReplacerElem = activeDevice.id >= (range?.minSize as number) && activeDevice.id <= (range?.maxSize as number);

    // ---------------------------------------
    // The "pair swaping" state tracking logic
    // ---------------------------------------
    const activeReplacerPairSwapItem = shouldShowReplacerElem ? _replacerElem : refelem;
    const activeRefPairSwapItem = shouldShowReplacerElem ? refelem : _replacerElem;
    //-
    const isValidReplaceRefSwapAttributeAndID = ({ attr }: { attr: Attr }) => attr.value === _refAttribute && (attr.name === refElemAttribute || attr.name === _instructionAttribute);
    //-
    const activeReplacerPairSwapItemAttrValue = Array.from(activeReplacerPairSwapItem.attributes).find((attr) => isValidReplaceRefSwapAttributeAndID({ attr }));
    const activeRefPairSwapItemAttrValue = Array.from(activeRefPairSwapItem.attributes).find((attr) => isValidReplaceRefSwapAttributeAndID({ attr }));

    //--------------------------------
    // Actual swapping of DOM elements
    //--------------------------------
    const isValidReplaceRefSwapAttrValue = activeReplacerPairSwapItemAttrValue && activeRefPairSwapItemAttrValue;
    //-
    if (isValidReplaceRefSwapAttrValue) {
      if (on === 'pageLoad' || on === 'pageResize') {
        activeRefPairSwapItem.replaceWith(activeReplacerPairSwapItem);
      }
    }
  });
};
