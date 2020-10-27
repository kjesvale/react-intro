import React from 'react';
import { useParams } from 'react-router-dom';
import Image from './Image';
import Post from './Post';
import images from './data/images';
import { useEffect } from 'react';
import useTitle from './useTitle';

function DetailPage() {
    const { id } = useParams();
    const image = images.find((image) => image.id === id);

    useTitle(`📷 av ${image.username}`);

    return (
        <div className="detail">
            <Post author={image.username} timestamp={image.createdDate}>
                <Image key={image.id} src={image.url} alt={image.description} />
            </Post>
        </div>
    );
}

export default DetailPage;
