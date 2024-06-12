import { ChangeEvent } from 'react';

interface InputFieldProps {
  type?: string;
  id?: string;
  label: string;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  isValid?: boolean;
  errorMessage?: string;
  successMessage?: string;
}

function InputField({
  type = 'text',
  id,
  label,
  value,
  setValue,
  isValid,
  errorMessage,
  successMessage,
}: InputFieldProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
  };

  return (
    <div className="mb-4">
      <label className="block mb-1">{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={handleChange}
        className="w-full border border-bg-border-light dark:border-bg-dark rounded-md p-2 text-content-light"
      />
      {!isValid && <small className="text-error">{errorMessage}</small>}
      {isValid && value && <small className="text-success">{successMessage}</small>}
    </div>
  );
}

export default InputField;
