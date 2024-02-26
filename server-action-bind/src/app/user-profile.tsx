"use client";

import { updateUser } from "./actions";

export function UserProfile({ userId }: { userId: string }) {
  // bind で userId を渡す
  const updateUserWithId = updateUser.bind(null, userId);

  return (
    // フォームの action 属性に bind した関数を渡す
    <form action={updateUserWithId}>
      <input type="text" name="name" />
      <button type="submit">Update User Name</button>
    </form>
  );
}
