import {FunctionComponent, useEffect, useState} from 'react';
import styles from './reviewItem.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {selectReviewsByRestaurantId} from "../../../store/entities/review/selector.tsx";
import {RootState} from "../../../store";
import {selectIsLoading} from "../../../store/ui/request";
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {getReviewsByRestaurantId, Review} from "../../../store/entities/review/thunks/get-reviews-by-restaurant-id.ts";

type Props = {
  restaurantId: string;
};

const ReviewItem: FunctionComponent<Props> = ({restaurantId}) => {
  const reviews = useSelector(selectReviewsByRestaurantId(restaurantId));

  const [requestId, setRequestId] = useState<string | null>(null);
  const isLoading = useSelector(
    (state: RootState) => requestId && selectIsLoading(state, requestId)
  ) ?? true;
  const dispatch: ThunkDispatch<Review, void, UnknownAction> = useDispatch();

  useEffect(() => {
    setRequestId(dispatch(getReviewsByRestaurantId(restaurantId)).requestId)
  }, [restaurantId, dispatch])

  return (
    <div>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <ul className={styles.reviewList}>
              {reviews.map((review) => (
                <li key={review.id} className={styles.reviewItem}>{review.text}</li>
              ))}
            </ul>
          </>)}
    </div>);
};

export default ReviewItem;
