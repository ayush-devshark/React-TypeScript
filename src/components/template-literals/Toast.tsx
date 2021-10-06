import React from 'react';

type HorizontalPostion = 'left' | 'center' | 'right';
type VerticalPostion = 'top' | 'center' | 'bottom';

type ToastProps = {
    position:
        | Exclude<`${HorizontalPostion}-${VerticalPostion}`, 'center-center'>
        | 'center';
};

const Toast = ({ position }: ToastProps) => {
    return <div>Toast Notification Position - {position}</div>;
};

export default Toast;
