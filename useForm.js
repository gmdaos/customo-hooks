/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { newUuid } from '../helpers/generateUuid';

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);
  const [validateInput, setValidateInput] = useState(true);

  const onInputChange = ({ target }) => {
    const { name, value, checked, type } = target;

    if (type === 'checkbox') {
      setFormState({ ...formState, [name]: checked });
    } else if (type === 'radio') {
      setFormState({ ...formState, [name]: value });
    } else if (type === 'text') {
      setFormState({ ...formState, [name]: value, id: newUuid()});
    }
    if (formState.name !== '' && formState.description !== '') {
      setValidateInput(true);
    }
  };

  const onResetForm = () => {
    setFormState(initialForm);
  };
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
    validateInput,
    setValidateInput,
  };
};
