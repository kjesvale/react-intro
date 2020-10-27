import React from 'react';
import { Link } from 'react-router-dom';
import Image from './Image';
import Post from './Post';
import useTitle from './useTitle';
import useFeed from './useFeed';

function FeedPage(props) {
    useTitle(`Bekkstagram`);
    const images = useFeed();

    if (!images) {
        return null;
    }

    return (
        <div className="posts">
            {images.map((image) => (
                <Post
                    key={image.id}
                    author={image.username}
                    timestamp={image.createdDate}
                    comments={image.comments}
                >
                    <Link to={`/post/${image.id}`}>
                        <Image src={image.url} alt={image.description} />
                    </Link>
                </Post>
            ))}
        </div>
    );
}

export default FeedPage;
