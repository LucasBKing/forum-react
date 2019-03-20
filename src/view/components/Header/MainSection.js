import React from 'react';
import { Header, Grid } from 'semantic-ui-react';

const MainSection = () => {
    return (
        <Grid>
            <Grid.Row>
                <Grid.Column width={10}>
                    <Header as='h2' dividing>
                        Posts
                    </Header>  
                </Grid.Column>
                <Grid.Column width={6}>
                    <Header as='h2' dividing>
                        Lasts
                    </Header>   
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default MainSection;
