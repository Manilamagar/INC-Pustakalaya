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
            <button onClick={() => addItem('Item ' + (items.size + 1))}>
                Add Item
            </button>
            <ul>
                {[...items].map(item => (
                    <li key={item}>
                        {item}
                        <button onClick={() => removeItem(item)}>Remove</button>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default SetExample;