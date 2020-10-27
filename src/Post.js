import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';
import { Comments } from './Comments';

function Post(props) {
    return (
        <div className="post">
            <Author>{props.author}</Author>
            {props.children}
            <div className="post-details">
                <Timestamp timestamp={props.timestamp} />
                <Likes />
            </div>
            <Comments imageId={props.imageId} comments={props.comments} />
        </div>
    );
}

function Likes(props) {
    const [likes, setLikes] = React.useState(0);
    function incrementLikes() {
        setLikes(likes + 1);
    }

    return (
        <div className="likes">
            Likes: {likes}{' '}
            <button className="like-button" onClick={incrementLikes}>
                <span role="img" aria-label="Lik bildet">
                    👍
                </span>
            </button>
        </div>
    );
}

function Author(props) {
    return <div className="author">{props.children}</div>;
}

export function Timestamp(props) {
    return <div className="timestamp">{formatDistanceToNow(props.timestamp)} ago</div>;
}

export default Post;
