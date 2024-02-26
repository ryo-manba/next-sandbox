type Props = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

// 本来はスタイルを設定するなどの処理を行う
export const MyInput = ({ value, onChange }: Props) => {
  return <input type="text" value={value} onChange={onChange} />;
};
