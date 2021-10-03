import React from 'react';

type StatusProps = {
    status: 'loading' | 'success' | 'error';
};

const Status = (props: StatusProps) => {
    let message =
        props.status === 'loading'
            ? 'Loading...'
            : props.status === 'success'
            ? 'Data fetched successfully.'
            : 'Error fetching data.';

    return (
        <div>
            <h2>{message}</h2>
        </div>
    );
};

export default Status;
