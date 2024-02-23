import {FunctionComponent} from "react";
import {
  useGetDishesByRestaurantIdQuery,
} from "../../../store/services/api.ts";
import DishMenuItem from "./DishMenuItem.tsx";

type Props = {
  restaurantId: string,
}
const DishMenuList: FunctionComponent<Props> = ({restaurantId}) => {

  const {data: dishes, isLoading} = useGetDishesByRestaurantIdQuery(restaurantId)
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (!dishes) {
    return null;
  }

  return (
    <div>
      {dishes.map(({id, name}) => (
        <DishMenuItem key={id} id={id} name={name}/>
        ))}
    </div>
  );

};
export default DishMenuList