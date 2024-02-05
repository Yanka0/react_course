import {FunctionComponent, ReactNode} from 'react';


type Props = {
    children: ReactNode,
    className?: string,
    onClick?: () => void,
    isDisabled?: boolean
};

const Button: FunctionComponent<Props> = ({children, className, onClick, isDisabled}) => {

    return (<button className={className} onClick={onClick} disabled={isDisabled}>{children}</button>);
};

export default Button;
