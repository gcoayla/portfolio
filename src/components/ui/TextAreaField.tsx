import React from 'react';
import { useField } from 'formik';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

type TextAreaFieldProps = {
  name: string;
  label: string;
};

export const TextAreaField = ({ name, label }: TextAreaFieldProps) => {
  const [field, meta] = useField(name);

  return (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor={name}>{label}</Label>
      <Textarea {...field} id={name} placeholder={`Enter your ${label.toLowerCase()}`} />
      {meta.touched && meta.error ? (
        <div className="text-red-500 text-sm">{meta.error}</div>
      ) : null}
    </div>
  );
};
