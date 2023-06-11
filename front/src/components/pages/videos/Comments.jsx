import React from "react";
import GetAPI from "../../../utils/callApi";


export function Comments({movie}) {
    // const url = 'http://127.0.0.1:8000/router/Comments/'
    const url = "http://127.0.0.1:8000/comments/"+movie.id

    // console.log(url)
    return (
        <>
            <GetAPI apiUrl={url} movie={movie}/>
            
        </>
    );
}