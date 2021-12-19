import { useRef, useState } from "react";

const useStateWithInitialMemory = (initialValue) => {
  const initialState = useRef(initialValue);
  const [state, setState] = useState([]);

  return [state, setState, initialState.current];
};

export default useStateWithInitialMemory;
