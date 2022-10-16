import React from "react";
import { VscTwitter } from "react-icons/vsc";
import { BsGithub } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="flex flex-col gap-2 bg-zinc-900 text-gray-50 justify-center h-32 items-center">
      <div className="">
        <h3 className="font-light">
          Made by <span className="font-semibold">Shonjmoj</span>
        </h3>
      </div>
      <div className="flex gap-2">
        <a href="https://github.com/shonjmoj">
          <BsGithub
            size={24}
            className="hover:rotate-3 transition-all duration-150"
          />
        </a>
        <a href="https://twitter.com/shonjmoj">
          <VscTwitter
            size={25}
            className="hover:-rotate-3 transition-all duration-150"
          />
        </a>
      </div>
    </div>
  );
}
