export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case 'Add todo':
      return [...initialState, action.payload];
    case 'Remove todo':
      return initialState.filter((todo) => todo.id !== action.payload);
    case 'Update todo':
      return initialState.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, observed: !todo.observed };
        }
        return todo;
      });
    default:
      return initialState;
  }
};
