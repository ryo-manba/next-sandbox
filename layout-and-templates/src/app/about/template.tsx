"use client";

import React, { useState, useEffect } from "react";
import { FeedbackForm } from "../feedback-form";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setIsLoaded(true);
  //   }, 3000); // 3秒後にコンテンツを表示する

  //   return () => clearTimeout(timer);
  // }, []);

  useEffect(() => {
    // ページビューのロギング
    console.log("Page view logged!");
  }, []);

  const [count, setCount] = useState(0);

  // if (!isLoaded) {
  //   return <div>Loading...</div>; // ローディング中の表示
  // }

  return (
    <div>
      <h2>Template Header</h2>
      <div className="flex gap-2">
        <h3>Template {count}</h3>
      </div>
      {children}
      <h2>Template Footer</h2>
      <FeedbackForm />
    </div>
  );
}
