import React from 'react';
import { Timestamp } from './Post';
import { mockedPutComment } from './server';

export const Comments = (props) => {
    const [comments, setComments] = React.useState(props.comments);

    const addComment = (comment) => {
        setComments((prevState) => [...prevState, comment]);
    };

    if (comments) {
        return (
            <div className="comments">
                {comments.map((comment, key) => (
                    <Comment key={key} comment={comment} />
                ))}
                <CommentForm
                    addComment={(comment) => addComment(comment)}
                    imageId={props.imageId}
                />
            </div>
        );
    }

    return <CommentForm addComment={(comment) => addComment(comment)} imageId={props.imageId} />;
};

const Comment = ({ comment }) => {
    return (
        <div className="comment">
            <span className="comment-user">{comment.username}</span>
            <span className="comment-text">{comment.text}</span>
            <Timestamp timestamp={comment.createdDate} />
        </div>
    );
};

const CommentForm = (props) => {
    const [comment, setComment] = React.useState('');

    async function onCommentSubmit() {
        if (comment.length === 0) {
            return;
        }

        const commentsResponse = await mockedPutComment(props.imageId, comment);
        props.addComment(commentsResponse);
        setComment('');
    }

    return (
        <div className="comment-form">
            <input
                value={comment}
                onChange={(event) => setComment(event.target.value)}
                placeholder="Add a comment..."
            />
            <button className="comment-form-button" onClick={onCommentSubmit}>
                Post
            </button>
        </div>
    );
};
