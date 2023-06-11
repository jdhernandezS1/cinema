import React from "react";
import CSRFToken from "../../../utils/djangoToken";

export function FormUs() {
    // const html = {% csrf_token %}
    return (
        <>
            <form method="post">
                {<CSRFToken/>}
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </>
    )
}