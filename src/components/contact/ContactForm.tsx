import React from 'react';
import { Form, FormikProvider } from 'formik';
import { useContactForm } from '@/hooks/useContactForm';
import { InputField } from '@/components/ui/InputField';
import { TextAreaField } from '@/components/ui/TextAreaField';
import { Button } from '@/components/ui/button';

export const ContactForm = () => {
  const formik = useContactForm();

  return (
    <FormikProvider value={formik}>
      <Form
        onSubmit={formik.handleSubmit}
        className="flex w-full flex-col space-y-4"
      >
        <InputField name="name" label="Name" type="text" />
        <InputField name="email" label="Email" type="email" />
        <TextAreaField name="message" label="Message" />
        <Button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full md:w-auto"
        >
          Submit
        </Button>
      </Form>
    </FormikProvider>
  );
};
