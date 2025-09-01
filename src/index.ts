import { useState, useEffect } from "react";

export function useDebounce<T>(value: T, delay: number = 500): T {
       const [debounce, setDebounce] = useState(value);
       
       useEffect(() => {
              const handler = setTimeout(() => setDebounce(value), delay)
              return () => clearTimeout(handler)
       }, [value, delay])

       return debounce
}