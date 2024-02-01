import {FunctionComponent, useReducer} from 'react';
import Input from "../../utils/input/Input.tsx";
import styles from './form.module.scss'
type FormState = {
  name:string,
  text:string,
  rating:string
}
type FormAction ={
  type:string,
  payload:string
}

type Props = {};

const reducer = (state:FormState, {type, payload}:FormAction):FormState => {
 switch (type) {
   case 'setName':
     return {
       ...initialValue,
       name:payload
     }
   case 'setText':
     return {
       ...state,
       text:payload
     }
   case 'setRating':
     return {
       ...state,
       rating:payload
     }
   default:
     return state
 }
}

const initialValue : FormState = {
  name:'',
  text:'',
  rating:''
}
const Form: FunctionComponent<Props> = () => {
const [form,dispatch] = useReducer(reducer,initialValue)
  return (<div>
    <h4>Add review</h4>
    <div className={styles.inputList}>
    <Input className={styles.inputItem} htmlFor={'name'} id={'name'} type={'text'} label={'Name'} value={form.name} onChange={(e) =>
      dispatch({type:'setName',payload:e.target.value})}/>
    <Input className={styles.inputItem} htmlFor={'text'} id={'text'} type={'text'} label={'Text'} value={form.text} onChange={(e) =>
      dispatch({type:'setText',payload:e.target.value})}/>
    <Input className={styles.inputItem} htmlFor={'rating'} id={'rating'} type={'text'} label={'Rating'} value={form.rating} onChange={(e) =>
      dispatch({type:'setRating',payload:e.target.value})}/>
  </div>
    </div>);
};

export default Form;
