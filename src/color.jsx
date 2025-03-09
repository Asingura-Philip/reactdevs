import React, { useState } from 'react';

function ChangeColor() {
    const [color, setColor] = useState('blue');
    
    const handleColorChange = () => {
        setColor('red');
    };

    return (
        <>
            <div style={{ backgroundColor: color, width: '100px', height: '100px' }}></div>
            <button onClick={handleColorChange}>Change Color</button>
        </>
    );
}

export default ChangeColor;
