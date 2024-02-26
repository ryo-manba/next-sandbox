"use client";

type Props = {
  value: string;
  onChange: (e: any) => void;
};

export const MyInput = ({ value, onChange }: Props) => {
  return <input type="text" value={value} onChange={onChange} />;
};
