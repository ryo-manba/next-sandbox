"use client";
import { format } from "date-fns";

export const ClientComponent = () => {
  const date = format(new Date(), "yyyy-MM-dd");

  return (
    <>
      <div>Client Component: {date}</div>
      <button onClick={() => alert("Hello!")}>Click me!</button>
    </>
  );
};
