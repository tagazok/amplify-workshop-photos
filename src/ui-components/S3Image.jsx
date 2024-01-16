import React, { useState } from 'react';
import { getUrl } from "aws-amplify";

export default function S3Image(props) {

    const style = {
        width: "491px",
        height: "auto",
        display: "block",
        gap: "unset",
        alignIitems: "unset",
        justifyCcontent: "unset",
        flexShrink: 0,
        position: "relative",
        padding: "0px",
        objectFit: "cover",
        boxSizing: "content-box",
        maxWidth: "100%",
        width: "100%"
    }
    const [url, setUrl] = useState("");

    getUrl({key: props.id}).then(res => {
        console.log(`props.id: ${props.id}`);
        setUrl(res.url.toString());
    }).catch(error => {
        console.log(error);
    });

    return ((() => {
                if (props.id) {
                    return <img
                        style={style}
                        src={url}
                        alt="Image attached to post"
                    />;
                }
            })()
    );
};
