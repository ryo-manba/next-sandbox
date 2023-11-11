import { MyLink } from "./my-link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyLink href="/a">Go to Page A</MyLink>
    </main>
  );
}
