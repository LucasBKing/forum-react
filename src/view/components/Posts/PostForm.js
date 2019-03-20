import React from 'react';
import { Card } from 'semantic-ui-react'

const PostForm = ({post}) => {
    return (
        <Card fluid>
            <Card.Content>
                <Card.Header>{post.title}</Card.Header>
                <Card.Meta>{post.author}</Card.Meta>
                <Card.Description>{post.content}</Card.Description>
            </Card.Content>
        </Card>
    )    
}

export default PostForm;