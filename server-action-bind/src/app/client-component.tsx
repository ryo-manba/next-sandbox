"use client";
import { myActionWithState, myAction } from "./actions";
import { useState } from "react";
import { MyInput } from "./my-input";

export function MyForm() {
  return (
    <form action={myAction}>
      {/* 画面には表示されない隠しフィールドを設定する */}
      <input type="hidden" name="user-id" value="userId-1" />
      <button type="submit">Update User</button>
    </form>
  );
}

export function ClientComponent() {
  const [value, setValue] = useState("");
  // bind を使用して state を渡す
  const actionWithState = myActionWithState.bind(null, value);

  return (
    <form action={actionWithState}>
      <MyInput value={value} onChange={(e) => setValue(e.target.value)} />
      <button type="submit">Submit</button>
    </form>
  );
}
