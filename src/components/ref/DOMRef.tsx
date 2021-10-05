import React, { useRef, useEffect } from 'react';

const DOMRef = () => {
    const inputRef = useRef<HTMLInputElement>(null!);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    return (
        <div>
            <input type='text' ref={inputRef} />
        </div>
    );
};

export default DOMRef;
