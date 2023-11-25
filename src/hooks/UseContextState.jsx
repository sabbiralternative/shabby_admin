import { useContext } from "react";
import { StateContext } from "../provider/StateProvider";

const UseContextState = () => {
  const UseContextState = useContext(StateContext);
  return UseContextState;
};

export default UseContextState;
