import {ChangeEvent, useReducer} from "react";


export type FormState = {
  name: string,
  email: string
}
type FormAction = {
  type: string,
  payload: string
}
const reducer = (state: FormState, {type, payload}: FormAction): FormState => {
  switch (type) {
    case 'setName':
      return {
        ...initialValue,
        name: payload
      }
    case 'setEmail':
      return {
        ...state,
        email: payload
      }
    default:
      return state
  }
}

const initialValue: FormState = {
  name: '',
  email: '',
}
const useLogInForm = () => {
  const [form, dispatch] = useReducer(reducer, initialValue)
  return {
    form,
    setName: (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'setName', payload: e.target.value}),
    setEmail: (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'setEmail', payload: e.target.value}),
  };
}

export default useLogInForm;
