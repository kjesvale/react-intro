import { useState, useEffect } from 'react';
import { getFeed } from './server';

const useFeed = () => {
    const [images, setImages] = useState(null);

    useEffect(() => {
        getFeed().then((data) => setImages(data));
    }, []);

    return images;
};

export default useFeed;
