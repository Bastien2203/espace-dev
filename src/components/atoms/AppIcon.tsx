import Image from "next/image";

export const AppIcon = () => {
  return (
    <Image src="/favicon.ico" className="w-10 h-10 invert" alt="app icon" />
  );
};
