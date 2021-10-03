import React from 'react';

type GreetProps = {
    name: String;
};

const Greet = (props: GreetProps) => {
    return (
        <div>
            <h2>Welcome {props.name}! to wonderland</h2>
        </div>
    );
};

export default Greet;
