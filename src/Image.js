import React from 'react';

function Image({ src, alt }) {
    return <img className="image" src={src} alt={alt} />;
}

export default Image;
