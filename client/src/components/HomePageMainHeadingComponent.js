
import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import { Grid } from '@material-ui/core';

export default function HomePageMainHeadingComponent() {
    const [checked, setChecked] = React.useState(true);

    return (
        <Zoom in={checked} timeout={2000}>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}
            >
                <Grid item xs={12}>
                    <div className="title-main-homepage" >
                        FocusKingPhotography
                        <div className="sub-title-main-homepage" >
                            Feel Like Celebrity
                        </div>
                    </div>
                </Grid>

            </Grid>
        </Zoom>
    );
}
