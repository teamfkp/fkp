import { Grid } from '@material-ui/core';
import React from 'react';
import one from "../images/1.jpg";
// import { IMAGES } from './config';

function Portfolio(props) {
    return (
        <React.Fragment>
            {/* {[0, 1, 2].map((data, index) => { */}
            <Item src={one} title={"Wedding Photography"} desc={<div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras feugiat, ipsum et condimentum imperdiet, leo diam cursus sapien, in maximus nibh purus faucibus odio. Mauris cursus odio nisl, a efficitur mi molestie id. Donec vehicula sodales est, eget consectetur mauris tincidunt dignissim. Proin convallis, felis sed dapibus gravida, dui arcu maximus mi, ac vehicula lectus odio nec odio. Fusce sem tellus, sodales non porttitor sed, condimentum a dolor. Integer sollicitudin neque sed sodales porttitor. Quisque feugiat consequat pellentesque. Integer sit amet tempus nunc, eget euismod est. Donec eget ipsum dolor. Cras mauris dolor, malesuada consectetur magna vitae, molestie tempus nunc. Mauris in nunc id erat feugiat dapibus eu vitae augue. Ut sollicitudin sapien sit amet nisl porta maximus. Vivamus egestas, felis in pharetra vehicula, tortor libero commodo justo, et feugiat metus arcu eget elit. Aliquam euismod id lorem sit amet pretium. Cras elementum vel risus vel dictum. Suspendisse volutpat euismod nisl, sollicitudin interdum lorem finibus in.
                <br />
                <br />
                Etiam nec rhoncus urna, vel rutrum sapien. In venenatis, ipsum ut dignissim fringilla, odio felis porta massa, in rhoncus mauris diam sollicitudin tellus. Donec id purus pellentesque, dictum dolor id, mollis dolor. Nulla dictum, lacus nec elementum maximus, velit tortor finibus dui, molestie pellentesque urna neque eu risus. Suspendisse quis dapibus magna. Cras egestas tellus quis lorem iaculis accumsan. Quisque sem mauris, molestie non malesuada at, vulputate et odio. Sed ultrices pellentesque nisi, vel ornare turpis mattis consequat. Donec condimentum quam quis laoreet imperdiet.
            </div>} />
            {/* })} */}
        </React.Fragment>
    );
}

export default Portfolio;

const Item = (props) => {
    return <div className="padding-top-5-percent position-relative">
        <Grid container style={{ alignItems: "center", color: "white" }}>
            <Grid item xs={12} md={4} style={{ padding: "5%" }}>
                <img src={props?.src} className="img-box-shadow" width="100%" style={{ maxWidth: "500px", border: "1px solid #fff", borderRadius: "5px" }} />
            </Grid>
            <Grid item xs={12} md={8} className=" position-relative" >
                <h1>{props?.title}</h1>
                {props?.desc}
            </Grid>
        </Grid>
    </div>
}