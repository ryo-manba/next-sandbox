"use client";
import UsernameForm from "./form";
import { useState } from "react";
import { myAction } from "./actions";
import { MyInput } from "./test";

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//       <Form />
//     </main>
//   );
// }

export default function App() {
  const [value, setValue] = useState("");
  const actionWithState = myAction.bind(null, value);

  return (
    <form action={actionWithState}>
      <label>
        Request a Username:
        <br />
        <input type="text" name="username" />
        <MyInput value={value} onChange={(e) => setValue(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
