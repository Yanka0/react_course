import {FunctionComponent, useEffect, useState} from 'react';
import styles from './reviewItem.module.scss'
import {useDispatch, useSelector} from "react-redux";
import {selectReviewsWithIds} from "../../../store/entities/review/selector.tsx";
import {RootState} from "../../../store";
import {selectIsLoading} from "../../../store/ui/request";
import {ThunkDispatch, UnknownAction} from "@reduxjs/toolkit";
import {getReviews, Review} from "../../../store/entities/review/thunks/get-reviews.ts";

type Props = {
  reviewIds: string[];
};

const ReviewItem: FunctionComponent<Props> = ({reviewIds}) => {
  const reviewWithIds = useSelector(selectReviewsWithIds);
  const isReviewWithIdsNotExist : boolean = !Object.keys(reviewWithIds).length;

  const [requestId, setRequestId] = useState<string | null>(null);
  const isLoading = useSelector(
    (state: RootState) => isReviewWithIdsNotExist && requestId && selectIsLoading(state, requestId)
  ) ?? true;
  const dispatch: ThunkDispatch<Review, void, UnknownAction> = useDispatch();

  console.log(reviewWithIds);

  useEffect(() => {
    if (isReviewWithIdsNotExist) {
      setRequestId(dispatch(getReviews()).requestId)
    }
  }, [dispatch])

  return (
    <div>
      {
        isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <ul className={styles.reviewList}>
              {reviewIds.map((id) => (
                <li key={id} className={styles.reviewItem}>{reviewWithIds[id].text}</li>
              ))}
            </ul>
          </>)}
    </div>);
};

export default ReviewItem;
