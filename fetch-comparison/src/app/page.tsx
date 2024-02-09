import { Suspense } from "react";
import { ClientSideFetch, UseFetch } from "./fetch-util";

export const dynamic = "force-dynamic";

const files = [
  "http://localhost:3002/100KB.txt",
  "http://localhost:3002/1MB.txt",
  "http://localhost:3002/10MB.txt",
];

export default function Home() {
  const startTime = performance.now();
  const resourcePromise1 = fetch(files[0])
    .then((response) => response.text())
    .finally(() => {
      const endTime = performance.now();
      console.log("------------- UseFetch --------------");
      console.log("[url]", files[0]);
      console.log(`Fetch time with use: ${endTime - startTime} milliseconds`);
    });

  const resourcePromise2 = fetch(files[1])
    .then((response) => response.text())
    .finally(() => {
      const endTime = performance.now();
      console.log("------------- UseFetch --------------");
      console.log("[url]", files[1]);
      console.log(`Fetch time with use: ${endTime - startTime} milliseconds`);
    });
  const resourcePromise3 = fetch(files[2])
    .then((response) => response.text())
    .finally(() => {
      const endTime = performance.now();
      console.log("------------- UseFetch --------------");
      console.log("[url]", files[2]);
      console.log(`Fetch time with use: ${endTime - startTime} milliseconds`);
    });
  // const endTime = performance.now();

  return (
    <div>
      <h1>Fetch Example</h1>
      <UseFetch resourcePromise={resourcePromise1} url={files[0]} />
      <UseFetch resourcePromise={resourcePromise2} url={files[1]} />
      <UseFetch resourcePromise={resourcePromise3} url={files[2]} />
      {/* <ClientSideFetch url={files[0]} />
      <ClientSideFetch url={files[1]} />
      <ClientSideFetch url={files[2]} /> */}
    </div>
  );
}
