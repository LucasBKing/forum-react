import React from 'react';
import PostForm from './PostForm';
import { Card } from 'semantic-ui-react';

const PostList = ({posts}) => {
    return (
        <div className="post-list">
            <Card.Group>
                { posts && posts.map( post => {
                    return (
                        <PostForm post={post} key={post.post_id}/>
                    )
                })}
            </Card.Group>
        </div>
    )
}

export default PostList;