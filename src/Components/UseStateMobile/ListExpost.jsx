import React from "react";
import Heading from "./Heading";
import ListItem from "./ListItem";

function List(){
    return (
        <div>
            <Heading title="Mobile Operating System"/>
            <ListItem item="Android"/>
            <ListItem item="Blackberry"/>
            <ListItem item="iPhone"/>
            <ListItem item="Windows Phone"/>
            <Heading title="Mobile Manufacturers"/>
            <ListItem item="Samsung"/>
            <ListItem item="HTC"/>
            <ListItem item="Micromax"/>
            <ListItem item="Apple"/>
        </div>
    )
}

export default List