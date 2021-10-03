import React from 'react';

type PersonListProps = {
    names: {
        first: String;
        last: String;
    }[];
};

const PersonList = (props: PersonListProps) => {
    return (
        <div>
            {props.names.map((name, i) => (
                <h2 key={i}>
                    {name.first} {name.last}
                </h2>
            ))}
        </div>
    );
};

export default PersonList;
