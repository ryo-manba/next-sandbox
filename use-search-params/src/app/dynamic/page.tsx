import SearchBar from "../search-bar";

export const dynamic = "force-dynamic";

// devの場合だと、サーバー/クライアントそれぞれでログが出力される
// 本番環境でも、サーバー/クライアントそれぞれでログが出力される
// そもそも丸ごと作り直されるため、devtool のコンソールがリセットされる
export default function Page() {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <h1>Dashboard</h1>
    </>
  );
}
