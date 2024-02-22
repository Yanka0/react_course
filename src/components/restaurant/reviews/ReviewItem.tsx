import {FunctionComponent} from 'react';
import styles from "./reviewItem.module.scss";
import {useSelector} from "react-redux";
import {selectReviewById} from "../../../store/entities/review/selector.tsx";


type Props = {
  reviewId: string
};

const ReviewItem: FunctionComponent<Props> = ({reviewId}) => {
  const review = useSelector(selectReviewById(reviewId));

  return (
    <li key={reviewId} className={styles.reviewItem}>{review.text}</li>
  );
};

export default ReviewItem;
