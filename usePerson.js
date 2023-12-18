import { useEffect, useReducer } from 'react';
import { personReducer } from '../08-useReduce/personReducer';
const init = () => {
  return JSON.parse(localStorage.getItem('persons')) || [];
};

export const usePerson = () => {
  const [persons, dispatchPerson] = useReducer(personReducer, [], init);

  useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons));
  }, [persons]);

  const handlerChangeState = (id) => {
    dispatchPerson({
      type: 'Update person',
      payload: id,
    });
  };

  const handlerNewPerson = (person) => {
    const action = {
      type: 'Add person',
      payload: person,
    };
    dispatchPerson(action);
  };

  const handlerOnDelete = (id) => {
    dispatchPerson({
      type: 'Remove person',
      payload: id,
    });
  };

  return {
    persons,
    personCount: persons.length,
    observedCount: persons.filter((persona) => persona.observed).length,
    handlerChangeState,
    handlerNewPerson,
    handlerOnDelete,
  };
};
