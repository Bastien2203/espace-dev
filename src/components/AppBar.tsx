"use client";

import { ReactNode } from "react";
import { AuthButton } from "@/components/AuthButton";
import { signIn, signOut } from "next-auth/react";

export const AppBar = (props: { title: string; icon: ReactNode }) => {
  return (
    <div className="bg-gray-900 py-2 px-16 flex items-center justify-between">
      <div className="">
        <a className="flex items-center gap-2" href="/">
          <h1 className="text-white text-xl font-medium">{props.title}</h1>
          {props.icon}
        </a>
      </div>

      <div className="flex gap-4">
        <AuthButton label={"Sign In"} action={signIn} />
        <AuthButton label={"Sign Out"} action={signOut} />
      </div>
    </div>
  );
};
