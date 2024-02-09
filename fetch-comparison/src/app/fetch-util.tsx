"use client";

import { useState, useEffect, use } from "react";

type ClientSideFetchProps = {
  url: string;
};

export const ClientSideFetch = ({ url }: ClientSideFetchProps) => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const startTime = performance.now();
      const response = await fetch(url);
      const result = await response.text();
      const endTime = performance.now();
      console.log("------------- ClientSideFetch --------------");
      console.log("[url]", url);
      console.log(`Fetch time: ${endTime - startTime} milliseconds`);

      setData(result);
    };

    fetchData();
  }, [url]);

  return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
};

type UseFetchProps = {
  resourcePromise: Promise<String>;
  url: string;
};

export const UseFetch = ({ resourcePromise, url }: UseFetchProps) => {
  const startTime = performance.now();
  const data = use(resourcePromise);
  const endTime = performance.now();
  // const endTime = performance.now();
  // console.log("------------- UseFetch --------------");
  // console.log("[url]", url);
  // console.log(`Fetch time with use: ${endTime - startTime} milliseconds`);

  return <div>{data ? <p>{data}</p> : <p>Loading...</p>}</div>;
};
