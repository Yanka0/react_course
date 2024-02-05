import  {FunctionComponent} from 'react';
import {Review} from "../../../constants/mock.ts";
import styles from './reviewItem.module.scss'
type Props = {
    reviews: Review[];
};

const ReviewItem: FunctionComponent<Props> = ({reviews}) => {

  return (
      <div>
        <ul className={styles.reviewList}>
          {reviews.map((item: Review) => (
              <li key={item.id} className={styles.reviewItem}>{item.text}</li>
          ))}
        </ul>
      </div>);
};

export default ReviewItem;
