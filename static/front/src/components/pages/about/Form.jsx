import React from "react";
import CsrfCookieSetter from "../../../utils/csrfcookie";

export function FormUs() {

    return (
        <>
            <form  method="post">
                <CsrfCookieSetter />
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}