import { initializeSiblingSwap } from '@_queries/replacesibling.init';
//-
import { deviceSizeAttributeTypes } from '@_helpers/var.derived';

const initAllSiblingSwaps = () => {
  deviceSizeAttributeTypes.forEach((deviceSizeAttributeType) => {
    initializeSiblingSwap({ deviceSizeAttributeType });
  });
};

// ----------------------------------
// Initialize swaps when DOM is ready
// ----------------------------------
export const initBeforeWatch = () => {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      //-----------------------
      // Initialize all systems
      //-----------------------
      initAllSiblingSwaps();
    });
  } else {
    initAllSiblingSwaps();
  }
};
