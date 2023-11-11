"use client";

import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export const MyLink = ({ href, children }: Props) => {
  console.log("MyLink", href);
  const baseUrl = "/example?page=";
  const url = `${baseUrl}${href}`;
  return (
    <Link prefetch href={url}>
      {children}
    </Link>
  );
};
