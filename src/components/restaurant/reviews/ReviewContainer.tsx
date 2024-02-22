import {FunctionComponent, useEffect, useState} from 'react';
import styles from './reviewItem.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../store";
import {selectIsLoading} from "../../../store/ui/request";
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {getReviewsByRestaurantId, Review} from "../../../store/entities/review/thunks/get-reviews-by-restaurant-id.ts";
import {selectRestaurantReviewIds} from "../../../store/entities/restaurant/selector.tsx";
import ReviewItem from "./ReviewItem.tsx";

type Props = {
  restaurantId: string;
};

const ReviewContainer: FunctionComponent<Props> = ({restaurantId}) => {
  const reviewIds = useSelector(selectRestaurantReviewIds(restaurantId));

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
              {reviewIds.map((reviewId) => (
                <ReviewItem reviewId={reviewId}/>
              ))}
            </ul>
          </>)}
    </div>);
};

export default ReviewContainer;
