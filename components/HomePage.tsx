import React, { useState } from "react";
import { BiSearchAlt } from "react-icons/bi";
export default function HomePage() {
  const [value, setValue] = useState("");
  let inputValue: string;

  const clickHandler = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (inputValue === undefined) return;
    setValue(inputValue);
    console.log(inputValue);
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value) setValue("");
  };

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    inputValue = e.target.value;
  };
  return (
    <div className="container max-w-[90%] lg:max-w-[50%] broder-black mx-auto lg:flex justify-center">
      <form action="" className="lg:w-[50%] w-[100%] relative">
        <input
          onChange={changeHandler}
          type="text"
          placeholder="looking for a caracter ?"
          className="w-full h-10 lg:h-12 px-3 lg:px-5 outline-none bg-gray-200 rounded-md"
        />
        <button type="submit" onClick={clickHandler}>
          <BiSearchAlt className="absolute right-2 top-2 lg:top-3 w-6 h-6" />
        </button>
      </form>
    </div>
  );
}
