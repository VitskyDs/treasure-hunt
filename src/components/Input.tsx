import React, { useState } from "react";

type InputProps = {
  onSubmit: (value: string) => void;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ onSubmit, placeholder }) => {
  const [value, setValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    onSubmit(value);
    setValue("");
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Input;
