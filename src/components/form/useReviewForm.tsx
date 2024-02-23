import {ChangeEvent, useReducer} from "react";


type FormState = {
  name: string,
  text: string,
  rating: number
}
type FormAction = {
  type: string,
  payload: string
}
const reducer = (state: FormState, {type, payload}: FormAction): FormState => {
  switch (type) {
    case 'setName':
      return {
        ...defaultInitialValue,
        name: payload
      }
    case 'setText':
      return {
        ...state,
        text: payload
      }
    case 'setRating':
      return {
        ...state,
        rating: Number(payload)
      }
    default:
      return state
  }
}

const defaultInitialValue: FormState = {
  name: '',
  text: '',
  rating: 0
}
const useReviewForm = (initialValue?: FormState) => {
  const [form, dispatch] = useReducer(reducer, initialValue ?? defaultInitialValue)
  return {
    form,
    setName: (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'setName', payload: e.target.value}),
    setText: (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'setText', payload: e.target.value}),
    setRating: (e: ChangeEvent<HTMLInputElement>) => dispatch({type: 'setRating', payload: e.target.value}),
  };
}

export default useReviewForm;
