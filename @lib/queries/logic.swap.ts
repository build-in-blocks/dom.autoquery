import { instructionAttribute, refElemAttribute } from '@_helpers/var.root';
import { domState } from '@_helpers/state/dom.state';
//-
import { ActiveDevice } from '@_types/modified.types';

export const performRefSwap = ({ on, activeDevice, deviceSizeAttributeType }: { on: 'pageLoad' | 'pageResize'; activeDevice: ActiveDevice; deviceSizeAttributeType: string }) => {
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
    const isValidReplaceRefSwapAttributeAndID = ({ attr }: { attr: Attr }) => attr.value === _refAttribute && (attr.name === refElemAttribute || attr.name === instructionAttribute.replaceRef);
    //-
    const activeReplacerPairSwapItemAttrValue = Array.from(activeReplacerPairSwapItem.attributes).find((attr) => isValidReplaceRefSwapAttributeAndID({ attr }));
    const activeRefPairSwapItemAttrValue = Array.from(activeRefPairSwapItem.attributes).find((attr) => isValidReplaceRefSwapAttributeAndID({ attr }));
    //-
    const activeReplacerPairAnchorDetails = `${activeReplacerPairSwapItemAttrValue?.name}="${activeReplacerPairSwapItemAttrValue?.value}"`;
    const activeRefPairAnchorDetails = `${activeRefPairSwapItemAttrValue?.name}="${activeRefPairSwapItemAttrValue?.value}"`;
    //-
    const activeRefPairAnchor = `<autoq ${activeRefPairAnchorDetails}><b>ANCHOR</b> i.e. <b>${activeRefPairSwapItemAttrValue?.name}</b> is ACTIVE</autoq>`;

    //--------------------------------
    // Actual swapping of DOM elements
    //--------------------------------
    const isValidReplaceRefSwapAttrValue = activeReplacerPairSwapItemAttrValue && activeRefPairSwapItemAttrValue;
    //-
    if (isValidReplaceRefSwapAttrValue) {
      const anchorElem = ({ _anchor }: { _anchor: string }) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(_anchor, 'text/html');
        const _anchorElem = doc.body.firstElementChild as Element;
        return _anchorElem;
      };
      //-
      const _initActiveRefPairAnchorElem = anchorElem({ _anchor: activeRefPairAnchor });
      //-
      if (on === 'pageLoad') {
        activeRefPairSwapItem.replaceWith(_initActiveRefPairAnchorElem);
      }
      //-
      if (on === 'pageResize') {
        const _activeReplacerPairAnchorElem = document.querySelector(`autoq[${activeReplacerPairAnchorDetails}]`);
        const _activeRefPairAnchorElem = document.querySelector(`autoq[${activeRefPairAnchorDetails}]`);
        //-
        if (!_activeRefPairAnchorElem) activeRefPairSwapItem.replaceWith(_initActiveRefPairAnchorElem);
        if (_activeReplacerPairAnchorElem) _activeReplacerPairAnchorElem.replaceWith(activeReplacerPairSwapItem);
      }
    }
  });
};
