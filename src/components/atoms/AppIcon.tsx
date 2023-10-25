import Image from "next/image";

export const AppIcon = () => {
  return (
    <Image
      src="/favicon.ico"
      className="invert"
      alt="app icon"
      width={35}
      height={35}
    />
  );
};
