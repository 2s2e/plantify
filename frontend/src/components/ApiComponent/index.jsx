import React, { useState, useEffect } from 'react';

export function ApiComponent() {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch('/api/greet')
            .then(response => response.json())
            .then(data => setData(data.message));
    }, []);

    return (
        <div>
            <p>{data}</p>
        </div>
    );
    };