"use server";

export const myAction = (value: string, formData: FormData) => {
  console.log("data", formData);
  console.log("value", value);
  return "hello";
};
