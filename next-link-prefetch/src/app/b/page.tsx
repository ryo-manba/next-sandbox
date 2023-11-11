import { MyLink } from "../my-link";

const PageB = () => {
  console.log("======= Page B =======");
  return (
    <div>
      <h1>Page B</h1>
      <MyLink href="/c">Go to Page C</MyLink>
    </div>
  );
};

export default PageB;
