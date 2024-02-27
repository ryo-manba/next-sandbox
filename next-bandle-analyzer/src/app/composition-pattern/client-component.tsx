"use client";

export const ClientComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      {children}
      <div>Client Component</div>
      <button onClick={() => alert("Hello!")}>Click me!</button>
    </>
  );
};
