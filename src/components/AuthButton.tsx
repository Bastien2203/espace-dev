"use client";
export const AuthButton = (props: { action: Function; label: string }) => {
  return (
    <button
      className="text-white hover:underline"
      onClick={() => props.action()}
    >
      {props.label}
    </button>
  );
};
