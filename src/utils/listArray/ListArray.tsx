import styles from './listArray.module.scss'

type Props<T> = {
    data: Array<T>
    mapFunction?: (data : T) => any;
};

function ListArray<T>({data, mapFunction, ...rest} : Props<T>) {
    return (
        <ul  className={styles['list-array__ul']} {...rest}>
            {data.map((item,index) =>
                <li key={index} className={styles.listArray__li}>{
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