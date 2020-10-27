import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import Post from './Post';
import images from './data/images';
import useTitle from './useTitle';

function FeedPage(props) {
    useTitle(`Bekkstagram`);

    return (
        <div className="posts">
            {images.map((image) => (
                <Post key={image.id} author={image.username} timestamp={image.createdDate}>
                    <Link to={`/post/${image.id}`}>
                        <Image src={image.url} alt={image.description} />
                    </Link>
                </Post>
            ))}
        </div>
    );
}

export default FeedPage;
