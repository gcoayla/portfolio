import React from 'react';
import { useField } from 'formik';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type InputFieldProps = {
  name: string;
  label: string;
  type: 'text' | 'email';
};

export const InputField = ({ name, label, type }: InputFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Input {...field} type={type} id={name} placeholder={`Enter your ${label.toLowerCase()}`} />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};
