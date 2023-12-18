import { useEffect } from 'react';

export const useLocalStorage = (persons) => {
  useEffect(() => {
    localStorage.setItem('persons', JSON.stringify(persons));
   
  }, [persons]);
};
