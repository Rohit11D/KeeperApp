import React from "react";
let year = new Date().getFullYear();
function footer(){
    return(
        <footer>
    <p>Copyright © {year}</p>
    </footer>
    );
}
export default footer;