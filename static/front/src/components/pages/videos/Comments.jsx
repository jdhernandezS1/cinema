import React from "react";
import GetAPI from "../../../utils/callApi";


export function Comments() {
    return (
        <>
            <GetAPI apiUrl="http://127.0.0.1:8000/router/Comments/" />
        </>
    );
}