import React from 'react';
import { useParams } from 'react-router-dom';
import Image from './Image';
import Post from './Post';
import useTitle from './useTitle';
import useImage from './useImage';

function DetailPage() {
    const { id } = useParams();
    const image = useImage(id);

    useTitle(`📷 av ${image ? image.username : ''}`);

    if (!image) {
        return null;
    }

    return (
        <div className="detail">
            <Post author={image.username} timestamp={image.createdDate}>
                <Image key={image.id} src={image.url} alt={image.description} />
            </Post>
        </div>
    );
}

export default DetailPage;
