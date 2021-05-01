import * as scene1 from "./scene1.js";
import * as scene2 from "./scene2.js";

function get(name) {
    if (name === "scene1")
        return scene1;

    if (name === "scene2")
        return scene2;
}

export {
    get
}