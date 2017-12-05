import T from 'prop-types';
import React from 'react';
import Field from 'App/components/Field';
import { Container, ButtonSubmit, Form } from './component.styled';

const FormUpdate = ({ setForm, form, submit }) => (
  <Container>
    <Form onSubmit={submit}>
      <Field
        title="Old password" type="password" required
        value={form.oldPassword} onChange={setForm.oldPassword}
      />
      <Field
        title="New password" type="password" required
        value={form.newPassword} onChange={setForm.newPassword}
      />
      <Field
        title="Confirm password" type="password" required
        value={form.cofPassword} onChange={setForm.cofPassword}
      />
      <ButtonSubmit type="submit">Submit</ButtonSubmit>
    </Form>
  </Container>
);

FormUpdate.propTypes = {
  form: T.object.isRequired,
  setForm: T.object.isRequired,
  submit: T.func.isRequired,
};

export default FormUpdate;