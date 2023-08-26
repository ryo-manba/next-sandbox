"use client";

import React, { useState, useEffect } from "react";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 3000); // 3秒後にコンテンツを表示する

    return () => clearTimeout(timer);
  }, []);

  if (!isLoaded) {
    return <div>Loading...</div>; // ローディング中の表示
  }

  return (
    <div>
      <h2>Layout Header</h2>
      {children}
      <h2>Layout Footer</h2>
    </div>
  );
}
