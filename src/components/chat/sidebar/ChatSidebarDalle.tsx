import Link from "next/link";
import React from "react";
import { MdAdd, MdDeleteOutline, MdBuild, MdImageSearch } from "react-icons/md";
import { useOpenAI } from "@/context/OpenAIProvider";
import Github from "../../misc/Github";
import ThemeButton from "./buttons/ThemeButton";
import ButtonContainer from "./buttons/ButtonContainer";
import Conversations from "./conversation/Conversations";
import ApiKey from "./buttons/ApiKey";
import CurrentModel from './buttons/CurrentModel';

type Props = {};

export default function ChatSidebarDalle({ }: Props) {

  return (
    <div className="dark left-0 top-0 h-full max-h-screen flex-col bg-gray-900 text-primary md:fixed md:flex md:w-[260px]">
      <div className="flex h-full flex-col items-stretch p-2">
        <span className="text-center text-primary/80" style={{ fontSize: 'xxx-large', fontWeight: 'bold' }}>
          Dalle-E 2
        </span>
        <div className="flex flex-col gap-y-2 border-y border-white/10 py-2">
          <Link
            className="flex items-center gap-3 rounded p-3 transition-colors hover:bg-gray-500/10"
            href="/"
          >
            <MdImageSearch />
            ChatGPT
          </Link>
          <Link
            className="flex items-center gap-3 rounded p-3 transition-colors hover:bg-gray-500/10"
            href="/playground"
          >
            <MdBuild />
            ChatGPT Playground
          </Link>
          <ThemeButton />
        </div>

        <Github />
        <span className="text-center text-primary/80">
          Made with ❤️ by Houssam ILLAOUI
        </span>
      </div>
    </div>
  );
}