import React, { useState } from "react";
import styled from "styled-components";

type InputProps = {
  onSubmit: (value: string) => void;
  placeholder?: string;
};

const Container = styled.div`
  display: flex;
  gap: 8px;
  background-color: #121212;
  padding: 12px;
  border-radius: 8px;
  align-items: center;
`;

const StyledInput = styled.input`
  flex: 1;
  background-color: #1e1e1e;
  color: #e0e0e0;
  border: 1px solid #333;
  border-radius: 6px;
  padding: 12px 12px;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #555;
  }
`;

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
    <Container>
      <StyledInput
        type="text"
        value={value}
        onChange={handleChange}
        placeholder={placeholder}
      />
      <button onClick={handleSubmit}>Submit</button>
    </Container>
  );
};

export default Input;
