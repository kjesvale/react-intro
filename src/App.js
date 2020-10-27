import React from 'react';
import images from './data/images';

function App() {
    return (
        <>
            <Header />
            {images.map((image) => (
                <Image key={image.id} src={image.url} alt={image.description} />
            ))}
        </>
    );
}

function Header() {
    return <h1>Bekkstagram</h1>;
}

function Image({ src, alt }) {
    return <img className="image" src={src} alt={alt} />;
}

export default App;
