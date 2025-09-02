import { useState, useEffect } from "react";

/**
 * useDebounce hook
 * 
 * Delays updating a value until after a specified delay has passed since the last change.
 * Commonly used for search inputs or other frequent updates to prevent excessive function calls.
 *
 * @template T - type of the value to debounce
 * @param {T} value - the value to debounce
 * @param {number} [delay=500] - delay in milliseconds before updating the debounced value
 * @returns {T} - the current debounced value
*/
export function useDebounce<T>(value: T, delay: number = 500): T {
       const [debounce, setDebounce] = useState(value);
       
       useEffect(() => {
              const handler = setTimeout(() => setDebounce(value), delay)
              return () => clearTimeout(handler)
       }, [value, delay])

       return debounce
}