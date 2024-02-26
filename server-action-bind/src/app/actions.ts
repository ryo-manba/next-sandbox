"use server";

// export const myAction = async (value: string, formData: FormData) => {
export const myAction = async (formData: FormData) => {
  console.log("data", formData);
  const id = formData.get("user-id");
  console.log({ id });
  return { message: "Hello, World!" };
};

export const updateUser = async (userId: string, formData: FormData) => {
  console.log("userId", userId);
  console.log("data", formData);
  return { message: "Hello, World!" };
};

export const myActionWithState = async (value: string, formData: FormData) => {
  console.log("data", formData);
  console.log("value", value);
  return { message: "Hello, World!" };
};
