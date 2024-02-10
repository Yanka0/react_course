import  {FunctionComponent} from 'react';
import styles from './reviewItem.module.scss'
import {useSelector} from "react-redux";
import {selectReviewsWithIds} from "../../../store/entities/review/selector.tsx";
type Props = {
    reviewIds:string[];
};

const ReviewItem: FunctionComponent<Props> = ({reviewIds}) => {
  const reviewWithIds = useSelector(selectReviewsWithIds);

  return (
      <div>
        <ul className={styles.reviewList}>
          {reviewIds.map((id) => (
              <li key={id} className={styles.reviewItem}>{reviewWithIds[id].text}</li>
          ))}
        </ul>
      </div>);
};

export default ReviewItem;
