import React from "react";
import AddTokenModal from "./../auth/AddTokenModal";
import Link from "next/link";
import GithubStar from "./../misc/GithubStar";

type Props = {};

export default function ChatPlaceholder({ }: Props) {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="max-w-3xl p-4 text-center text-primary">
        <h1 className="text-4xl font-medium">GPT-4 & Dalle-E 2 Playground</h1>
        <p className="mt-4 text-lg">
          A ChatGPT and Dalle-E 2.0 Playground that allows you to play with your GPT-4 or GPT-3 api key!
        </p>
        <div className="m-4 flex items-center justify-center">
          <AddTokenModal />
        </div>
        <p className="mt-4 text-lg">
          Want more freedom? Check out the{" "}
          <Link
            target="_blank"
            href="/playground"
            className="font-medium text-primary hover:underline"
          >
            Playground
          </Link>
          !
        </p>

        <div className="p-4">
          <GithubStar />
        </div>
      </div>
    </div>
  );
}
