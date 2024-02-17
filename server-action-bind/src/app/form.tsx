"use client";
import { useState, useMemo, useRef } from "react";
import { useFormStatus } from "react-dom";

export default function UsernameForm() {
  const { pending, data } = useFormStatus();

  const [showSubmitted, setShowSubmitted] = useState(false);
  const submittedUsername = useRef(null);
  // const timeoutId = useRef(null);

  const name = useMemo(() => {
    if (pending) {
      return data?.get("username");
    }
    return "hoge";
  }, [pending, data]);

  // useMemo(() => {
  //   if (pending) {
  //     submittedUsername.current = data?.get("username");
  //     if (timeoutId.current != null) {
  //       clearTimeout(timeoutId.current);
  //     }

  //     timeoutId.current = setTimeout(() => {
  //       timeoutId.current = null;
  //       setShowSubmitted(false);
  //     }, 2000);
  //     setShowSubmitted(true);
  //   }
  // }, [pending, data]);

  return (
    <>
      <label>Request a Username: </label>
      <br />
      <input type="text" name="username" />
      <button type="submit" disabled={pending}>
        {pending ? "Submitting..." : "Submit"}
      </button>
      {pending ? <p>Submitted request for username: {name}</p> : null}
    </>
  );
}
