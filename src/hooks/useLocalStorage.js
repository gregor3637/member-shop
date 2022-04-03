import { useState } from "react";

// Hook
function useLocalStorage(storageKey, valueId, initialValue = false) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [key] = useState(storageKey);
  const [id] = useState(valueId);

  const [storedValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item).includes(valueId) : initialValue;
    } catch (error) {
      // If error also return initialValue
      return initialValue;
    }
  });
  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue = (value) => {
    const favorites = window.localStorage.getItem("favorites");
    var index = favorites.indexOf(id);
    const isFavorite = index > -1;

    if (isFavorite) {
      favorites.splice(index, 1);
    } else {
      favorites.push(id);
    }

    localStorage.setItem("questions", JSON.stringify(favorites));
  };
  return [storedValue, setValue];
}

export default useLocalStorage;
