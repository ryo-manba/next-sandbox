import { MyLink } from "../my-link";

const PageA = async () => {
  console.log("======= Page A =======");
  const res = await fetch("https://dummyjson.com/products/1", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }

  const data = await res.json();
  console.log("data", data);
  return (
    <div>
      <h1>Page A</h1>
      <ul>
        {Object.entries(data).map(([key, value]) => (
          <li key={key}>
            {key}:{" "}
            {Array.isArray(value) ? (
              <ul>
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              JSON.stringify(value)
            )}
          </li>
        ))}
      </ul>
      <MyLink href="/b">Go to Page B</MyLink>
    </div>
  );
};

export default PageA;
