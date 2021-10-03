import React from 'react';

type GreetProps = {
    name: String;
    messageCount: number;
    isLoogedIn: boolean;
};

const Greet = (props: GreetProps) => {
    return (
        <div>
            {props.isLoogedIn ? (
                <h2>
                    Welcome {props.name}! to wonderland. You have
                    {props.messageCount} hosts assigned to you.
                </h2>
            ) : (
                <h2>Welcome! Guest</h2>
            )}
        </div>
    );
};

export default Greet;
