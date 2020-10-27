import React from 'react';
import { useParams } from 'react-router-dom';
import Image from './Image';
import Post from './Post';
import images from './data/images';

function DetailPage() {
    const { id } = useParams();
    const image = images.find((image) => image.id === id);

    return (
        <div className="detail">
            <Post author={image.username} timestamp={image.createdDate}>
                <Image key={image.id} src={image.url} alt={image.description} />
            </Post>
        </div>
    );
}

export default DetailPage;
