"use client";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(`/about/${Number(params.slug) + 1}`);
  };
  return (
    <>
      <div className="flex gap-4">
        <div>About: {params.slug}</div>
        {/* <button onClick={handleClick} className="outline">
          Next Button
        </button> */}
      </div>
    </>
  );
}
