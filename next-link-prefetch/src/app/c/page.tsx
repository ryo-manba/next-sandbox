import { MyLink } from "../my-link";

const PageC = () => {
  console.log("======= Page A =======");
  return (
    <div>
      <h1>Page C</h1>
      <MyLink href="/a">Go to Page A</MyLink>
    </div>
  );
};

export default PageC;
