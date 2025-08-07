import React, { useState } from 'react';

const SetExample = () => {
    const [items, setItems] = useState(new Set());

    const addItem = (item) => {
        setItems(prev => new Set(prev).add(item));
    };

    const removeItem = (item) => {
        setItems(prev => {
            const newSet = new Set(prev);
            newSet.delete(item);
            return newSet;
        });
    };

    return (
        <>
        </>
    );
};

export default SetExample;