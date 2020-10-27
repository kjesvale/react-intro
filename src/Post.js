import React from 'react';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

function Post(props) {
    return (
        <div className="post">
            <Author>{props.author}</Author>
            {props.children}
            <Timestamp timestamp={props.timestamp} />
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
