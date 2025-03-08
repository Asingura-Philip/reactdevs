import React, { useState } from 'react';

function HideContent() {
    
    const [isVisible, setIsVisible] = useState(true);

    
    const changeVisibility = () => {
        setIsVisible(!isVisible);
    };

    return (
        <div>
            {isVisible && <h1>Now you see me</h1>}
            <button onClick={changeVisibility}>
                {isVisible ? 'Hide Content' : 'Show Content'}
            </button>
        </div>
    );
}

export default HideContent;
