// hooks/use-outside-click.ts
import { useEffect, RefObject } from 'react';

// Update the type to accept a potentially null ref
export function useOutsideClick(
  ref: RefObject<HTMLElement | null>,
  handler: () => void
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      // Check if ref.current exists before using it
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, handler]);
}