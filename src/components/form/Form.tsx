import {FunctionComponent} from 'react';
import Input from "../../utils/input/Input.tsx";
import styles from './form.module.scss'
import useReviewForm from "./useReviewForm.tsx";
import {useAuth} from "../../contexts/Auth.tsx";
import {useCreateReviewMutation, useUpdateReviewMutation} from "../../store/services/api.ts";
import Button from "../../utils/button/Button.tsx";


type Props = {
  restaurantId: string
  reviewId?: string,
  reviewRating?: number,
  reviewText?: string
};


const Form: FunctionComponent<Props> = ({restaurantId, reviewId, reviewRating, reviewText}) => {
  const {form, setText, setName, setRating} = useReviewForm(
    {name: "", text: reviewText ?? "", rating: reviewRating ?? 0}
  )
  const {user} = useAuth()
  const [createReview] = useCreateReviewMutation()
  const [updateReview] = useUpdateReviewMutation()

  return (
    <div>
      <div className={styles.inputList}>
        <Input className={styles.inputItem} htmlFor={'name'} id={'name'} type={'text'} label={'Name'}
               value={user ? user.name : ''} onChange={setName} disabled={true}/>
        <Input className={styles.inputItem} htmlFor={'text'} id={'text'} type={'text'} label={'Text'} value={ form.text}
               onChange={setText}/>
        <Input className={styles.inputItem} htmlFor={'rating'} id={'rating'} type={'number'} label={'Rating'}
               value={form.rating.toString()} onChange={setRating}/>
      </div>
      {
        reviewId ? (
        <Button onClick={() => updateReview({
          reviewId: reviewId,
          editReview: {
            name: user?.name,
            text: form.text,
            rating: form.rating
          }
        })}>
          Save
        </Button>
      ) : (
        <Button onClick={() => createReview({
          restaurantId,
          newReview: {
            name: user?.name,
            text: form.text,
            rating: form.rating
          }
        })}>
          Submit
        </Button>
      )}

    </div>);
};

export default Form;
