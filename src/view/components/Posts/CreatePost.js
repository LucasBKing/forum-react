import React, { Component } from 'react';
import axios from 'axios';
import { Form, TextArea, Button, Input } from 'semantic-ui-react';

class CreatePost extends Component {
    state = {
        title: '',
        content: ''
    }
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:4200/api/post/', {
            title: this.state.title,
            content: this.state.content
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    render() {
        return(
            <Form onSubmit={this.handleSubmit}>
                <Form.Field control={Input} label='Title' placeholder='Title' id='title' onChange={this.handleChange}/>            
                <Form.Field control={TextArea} label='Content' placeholder='Content' id='content'onChange={this.handleChange}/>
                <Form.Field control={Button}>Submit</Form.Field>
            </Form>
        )
    }
}

export default CreatePost;

