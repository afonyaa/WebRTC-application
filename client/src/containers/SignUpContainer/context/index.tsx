import { createContext, ReactElement, useReducer } from 'react';

const initialState = {
  step: 0,
  mainFormFields: {
    firstName: null,
    lastName: null,
    age: null,
    country: null,
  },
  credentialsFormFields: {
    nickname: null,
    email: null,
    password: null,
    passwordConfirm: null,
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, step: state.step + 1 };
    case 'DECREMENT':
      return { ...state, step: state.step - 1 };
    case 'UPDATE_MAIN_FORM_FIELDS':
      return { ...state, mainFormFields: { ...action.payload } };
    case 'UPDATE_CREDENTIAL_FORM_FIELDS':
      return { ...state, credentialsFormFields: { ...action.payload } };
  }
  return state;
};

export const SignUpContext = createContext(initialState);

export const SignUpProvider = ({ children }: { children: ReactElement }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const step = state.step;
  const mainFormFields = state.mainFormFields;
  const credentialsFormFields = state.credentialsFormFields;
  const incrementStep = () => {
    dispatch({ type: 'INCREMENT' });
  };
  const decrementStep = () => dispatch({ type: 'DECREMENT' });
  const updateMainFormFields = (payload) => {
    dispatch({ type: 'UPDATE_MAIN_FORM_FIELDS', payload });
  };
  const updateCredentialFields = (payload) =>
    dispatch({ type: 'UPDATE_CREDENTIAL_FORM_FIELDS', payload });

  const contextValue = {
    step,
    mainFormFields,
    credentialsFormFields,
    incrementStep,
    decrementStep,
    updateMainFormFields,
    updateCredentialFields,
  };

  return (
    <SignUpContext.Provider value={contextValue}>
      {children}
    </SignUpContext.Provider>
  );
};
