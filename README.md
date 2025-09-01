# use-debounce-hook

A simple and lightweight React hook for **debouncing values**.  
Useful when you need to delay state updates (e.g., while typing in an input field) to avoid unnecessary operations (API requests, filtering, etc.).

## Installation

```bash
npm install use-debounce-hook
# or
yarn add use-debounce-hook
```

## Usage

```typescript
       import React, { useState } from "react";
       import { useDebounce } from "use-debounce-hook";

       export default function MyComponent() {
              const [value, setValue] = useState("");
              const debouncedValue = useDebounce(value, 500); // 500ms delay

              return (
                     <div>
                            <input
                                   value={value}
                                   onChange={({ target }) => setValue(target.value)}
                                   placeholder="Type something..."
                            />
                            <p>Normal value: {value}</p>
                            <p>Debounced value: {debouncedValue}</p>
                     </div>
              );
       }
```

## API

### Parameters

- **`value: T`** — the value you want to debounce.  
- **`delay?: number`** *(default `500`)* — the delay in milliseconds before the returned value updates if no new changes occur.  

### Returns

- **`T`** — the debounced (stabilized) value.