import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function Post(props) {
    return (
        <div className="post">
            <Author>{props.author}</Author>
            {props.children}
            <div className="post-details">
                <Timestamp timestamp={props.timestamp} />
                <Likes />
            </div>
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
                👍
            </button>
        </div>
    );
}

function Author(props) {
    return <div className="author">{props.children}</div>;
}

function Timestamp(props) {
    return <div className="timestamp">{formatDistanceToNow(props.timestamp)} ago</div>;
}

export default Post;
