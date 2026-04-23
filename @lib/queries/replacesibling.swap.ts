import { domState } from '@_helpers/state/dom.state';
//-
import { ActiveDevice } from '@_types/modified.types';

// ----------------------------------
// SIBLING SWAP: After INITIALIZATION
// ----------------------------------
const _elemInsert = ({ _parentElem, elementToShow, _nextSiblingElem }: { _parentElem: ParentNode; elementToShow: Node; _nextSiblingElem: Node | null }) => {
  // ---------------------------------------------------------------------------
  // This check is needed for it to work in the user app's PRODUCTION build also
  // ---------------------------------------------------------------------------
  const nextSiblingElem = _nextSiblingElem && _parentElem.contains(_nextSiblingElem) ? _nextSiblingElem : null;
  //-
  _parentElem.insertBefore(elementToShow, nextSiblingElem);
};
//-
export const performSiblingSwap = ({ activeDevice, deviceSizeAttributeType }: { activeDevice: ActiveDevice; deviceSizeAttributeType: string }) => {
  Object.values(domState.result).forEach((item) => {
    // ----------------------------------------------------------------
    // Filter to only items that have specified deviceSizeAttributeType
    // ----------------------------------------------------------------
    if (item._sizeAttributeType !== deviceSizeAttributeType) return;

    const { refelem, _replacerElem, _parentElem, _nextSiblingElem, atsize, uptosize, fromsize, withinsizerange, range } = item;

    // ---------------------------------------------------------
    // Determine which element should be visible
    // Show replacer ONLY when we're at the specified breakpoint
    // ---------------------------------------------------------
    let shouldShowReplacerElem = false;
    if (atsize) shouldShowReplacerElem = activeDevice.id === atsize;
    if (uptosize) shouldShowReplacerElem = activeDevice.id <= uptosize;
    if (fromsize) shouldShowReplacerElem = activeDevice.id >= fromsize;
    if (withinsizerange) shouldShowReplacerElem = activeDevice.id >= (range?.minSize as number) && activeDevice.id <= (range?.maxSize as number);
    //-
    const elementToShow = shouldShowReplacerElem ? _replacerElem : refelem;
    const elementToHide = shouldShowReplacerElem ? refelem : _replacerElem;

    // ---------------------
    // Remove hidden element
    // ---------------------
    if (elementToHide.parentNode) {
      elementToHide.remove();
    }

    // --------------------------------------------
    // Insert visible element if not already in DOM
    // --------------------------------------------
    if (!elementToShow.parentNode) {
      if (_parentElem) _elemInsert({ _parentElem, elementToShow, _nextSiblingElem });
    }
  });
};
