import Link from "next/link";
export default function Home() {
  return (
    <div style={{ display: "flex", flexFlow: "column" }}>
      <Link href="/both-use-date-fns">both-use-date-fns</Link>
      <Link href="/server-only-use-date-fns">server-only-use-date-fns</Link>
      <Link href="/composition-pattern">composition-pattern</Link>
    </div>
  );
}
