"use client";

import { useSearchParams } from "next/navigation";

export default function SearchBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get("search");

  // devの場合だと、サーバー/クライアントそれぞれでログが出力される
  // 本番環境だと、クライアントのみでログが出力される
  console.log(search);

  // URL -> `/dashboard?search=my-project`
  // `search` -> 'my-project'
  return <>Search: {search}</>;
}
