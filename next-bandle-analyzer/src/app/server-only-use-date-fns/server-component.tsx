import { format } from "date-fns";

export const ServerComponent = () => {
  const date = format(new Date(), "yyyy-MM-dd");
  return <div>Server Component: {date}</div>;
};
