import { ReactNode } from "react";

export const AppBar = (props: { title: string; icon: ReactNode }) => {
  return (
    <div className="bg-gray-900 py-4">
      <div className="container mx-auto">
        <a className="flex items-center gap-2" href="/">
          <h1 className="text-white text-xl font-medium">{props.title}</h1>
          {props.icon}
        </a>
      </div>
    </div>
  );
};
