/**
 * Custom hook example
 */

import { useEffect } from 'react';

const useDocumentTitle = message => {
  useEffect(() => {
    document.title = message;
  });
};

export default useDocumentTitle;