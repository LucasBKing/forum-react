import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import axios from 'axios';
import PostList from '../Posts/PostList';

class MainSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4200/api/post/')
        .then( response => {
            response.data.results.map(post => {
                this.setState({
                    posts: [...this.state.posts, post]
                })
            })
        })
        .catch(function (error) {
            // handle error
            console.log(error);
            
        })
    }

    render() {
        return (
            <Grid>
                <Grid.Row>
                    <Grid.Column width={10}>
                        <PostList posts={this.state.posts} />  
                    </Grid.Column>
                    <Grid.Column width={6}>
                        <PostList posts={this.state.posts} />    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        )
    }    
}

export default MainSection;