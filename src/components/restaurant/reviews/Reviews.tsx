import {FunctionComponent, useState} from 'react';
import styles from './reviewItem.module.scss'
import {useGetReviewsByRestaurantIdQuery} from "../../../store/services/api.ts";
import Form from "../../form/Form.tsx";
import Button from "../../../utils/button/Button.tsx";
import {useAuth} from "../../../contexts/Auth.tsx";
import {useParams} from "react-router-dom";
import {isIdExist} from "../../../utils/functions.ts";

type Props = {
};

const Reviews: FunctionComponent<Props> = () => {
  const {restaurantId} = useParams()
  isIdExist(restaurantId)
  const {data: reviews, isLoading} = useGetReviewsByRestaurantIdQuery(restaurantId)
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const {user} = useAuth()
  const handleEditClick = (reviewId: string) => {
    setEditingReviewId(reviewId);
  };
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!reviews || !restaurantId) {
    return null;
  }

  return (
    <div className={styles.reviewList}>
        {reviews.map(({id, text, rating, name}) => (
          <div>
            <p key={id} className={styles.reviewItem}>{text}</p>
            {user && name === user.name &&
              <>
                <Button onClick={() => handleEditClick(id)}>Edit</Button>
                {editingReviewId === id && <Form restaurantId={restaurantId} reviewId={id} reviewRating={rating} reviewText={text}/>}
              </>
            }
          </div>
        ))}
    </div>)
};

export default Reviews;
