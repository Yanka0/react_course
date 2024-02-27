import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {RestaurantData} from "../entities/restaurant/thunks/get-restaurants.ts";
import {Review} from "../entities/review/thunks/get-reviews-by-restaurant-id.ts";
import {DishMenu} from "../entities/dish/thunks/get-dish-by-id.ts";


type TagType = "Review" | "Restaurant";
const tagTypes: TagType[] = ["Review", "Restaurant"];
export const api = createApi({
  reducerPath:'api',
  tagTypes,
  baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/api/'}),
  endpoints: builder => ({
    getRestaurants : builder.query<RestaurantData[],void>({
      query: () => ({
        url:'restaurants'
      }),
    }),
    getDishesByRestaurantId : builder.query<DishMenu[],string>({
      query: (restaurantId) => ({
        url:`dishes`,
        params:{ restaurantId }
      }),
    }),
    getDishById : builder.query<DishMenu,string>({
      query: (dishId) => ({
        url:`dish/${dishId}`,
      }),
    }),
    getReviewsByRestaurantId : builder.query<Review[], string>({
      query: (restaurantId) => ({
        url:`reviews`,
        params:{ restaurantId }
      }),
      providesTags:(result, _, restaurantId) =>
        result?
          result
          .map(({ id }) => ({ type: "Review" as TagType, id }))
          .concat(
            { type: "Review", id: "All" },
            { type: "Restaurant", id: restaurantId }
          ):['Review'],
    }),
    createReview: builder.mutation({
      query:({restaurantId, newReview}) => ({
        url:`review/${restaurantId}`,
        method:'POST',
        body: newReview
      }),
      invalidatesTags:(result, _, {restaurantId})=> [{
        type:'Restaurant',
        id: restaurantId
      }]
    }),
    updateReview: builder.mutation({
      query:({reviewId, editReview}) => ({
        url:`review/${reviewId}`,
        method:'PATCH',
        body: editReview
      }),
      invalidatesTags:(result, _, {reviewId})=> [{
        type:'Review',
        id: reviewId
      }]
    }),

  }),
})
 export const { useGetDishesByRestaurantIdQuery, useGetReviewsByRestaurantIdQuery, useGetRestaurantsQuery,useCreateReviewMutation,useUpdateReviewMutation,useGetDishByIdQuery} = api