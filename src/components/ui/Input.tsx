import React from 'react';

interface InputFieldProps {
  label: string;
  type: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

function Input (props: InputFieldProps): JSX.Element {
    const { label, type, value, onChange, required } = props;

  return (
    <div>
      <label>
        {label}:
        <input
          type={type}
          value={value}
          onChange={onChange}
          required={required}
        />
      </label>
    </div>
  );
}

export default Input;
