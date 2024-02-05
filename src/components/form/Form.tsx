import {FunctionComponent} from 'react';
import Input from "../../utils/input/Input.tsx";
import styles from './form.module.scss'
import useReviewForm from "./useReviewForm.tsx";
import {useAuth} from "../../contexts/Auth.tsx";


type Props = {};


const Form: FunctionComponent<Props> = () => {
const {form, setText,setName,setRating} = useReviewForm()
const {user} = useAuth()
  return (<div>
    <h4>Add review</h4>
    <div className={styles.inputList}>
    <Input className={styles.inputItem} htmlFor={'name'} id={'name'} type={'text'} label={'Name'} value={user ? user.name : ''} onChange={setName}/>
    <Input className={styles.inputItem} htmlFor={'text'} id={'text'} type={'text'} label={'Text'} value={form.text} onChange={setText}/>
    <Input className={styles.inputItem} htmlFor={'rating'} id={'rating'} type={'number'} label={'Rating'} value={form.rating} onChange={setRating}/>
  </div>
    </div>);
};

export default Form;
