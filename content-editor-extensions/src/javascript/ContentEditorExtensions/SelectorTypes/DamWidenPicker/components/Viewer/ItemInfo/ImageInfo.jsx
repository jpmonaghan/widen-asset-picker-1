import React from "react";
import PropTypes from "prop-types";
import {Typography} from "@jahia/moonstone";

const ImageInfo = ({properties,locale}) => {
    // console.log("[ImageStats] properties : ",properties);

    //reduce is used to manage case {width = null} for svg image for example
    //default value works only for undefined
    const {
        width,
        height,
        aspectRatio
    } = ['width','height','aspectRatio'].reduce((reducer,key) => {
        switch(true){
            case key === 'aspectRatio':
                reducer[key]= `${Number(properties[key]).toLocaleString(locale,{maximumFractionDigits:2})}` || 'n/a';
                break;
            default:
                reducer[key]= `${Number(properties[key]).toLocaleString(locale)}` || 'n/a';
                break;
        }

        return reducer;
    },{});

    return(
        <Typography
            data-sel-field-picker-info
            variant="omega"
            color="gamma"
        >
            {width} x {height} px (r:{aspectRatio} )
        </Typography>
    )
}

ImageInfo.propTypes={
    properties:PropTypes.object.isRequired,
    locale:PropTypes.string.isRequired,
    // classes:PropTypes.object.isRequired
}

export default ImageInfo;