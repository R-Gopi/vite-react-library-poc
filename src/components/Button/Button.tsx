import { useState } from "react";

export const Button = (): JSX.Element => {

  const [num, setNum] = useState(0);

  const handleOnClick = (): void => {
    setNum(num+1);
  };

  return (
    <button onClick={handleOnClick}>
      Vite button {num}
    </button>
  )
}