import styles from './listArray.module.scss'
import React from "react";

type Props<T> = {
    data: Array<T>
    mapFunction?: (data: T) => any;
    additionalListItemClassName?: string
} & React.ComponentPropsWithoutRef<"ul">;

function ListArray<T>({data, mapFunction, additionalListItemClassName, className, ...rest}: Props<T>) {
    return (
        <ul className={styles.listArray__ul + " " + className} {...rest}>
            {data.map((item, index) =>
                <li key={index} className={styles.listArray__li + " " + additionalListItemClassName}>{
                    mapFunction ? mapFunction(item) : item
                }</li>
            )}
        </ul>
    );
}
export default ListArray;

// const a : number = 2;
// const a : FunctionComponent<> = ;

//const ListArray: FunctionComponent<Props<T>> = ({data, mapFunction}) => {
//
//     return (
//         <ul>
//             {data.map(item =>
//                 <li>{
//                     mapFunction ? mapFunction(item) : item
//                 }</li>
//             )}
//         </ul>
//     );
// };