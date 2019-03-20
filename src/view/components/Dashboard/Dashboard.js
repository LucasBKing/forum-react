import React, { Component } from 'react';
import { Container, Header, Tab } from 'semantic-ui-react'
import MainSection from '../Header/MainSection';
import CreatePost from '../Posts/CreatePost';
import PostSection from '../Dashboard/PostSection';

const panes = [
    {
        menuItem: 'Index',
        pane: (
            <Tab.Pane key='index'>
                <MainSection />
                <PostSection />
            </Tab.Pane>
        ),
    },
    {
        menuItem: 'Create Post',
        pane: (
            <Tab.Pane key='createpost'>
                <CreatePost />
            </Tab.Pane>
        ),
    },
]

class Dashboard extends Component {
    
    render() {
        return (
            <Container style={{ marginTop: '3em' }}>
                <Header as='h1'>Blog</Header>
                <Tab panes={panes} renderActiveOnly={false} menu={{ secondary: true, pointing: true }} />                
            </Container>
        )
    }
};

export default Dashboard;

