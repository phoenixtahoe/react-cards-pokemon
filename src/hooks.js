import { useState } from "react";
import axios from "axios";
import uuid from "uuid";

function useFlip(initialFlipState = true) {
    const [isFlipped, setFlipped] = useState(initialFlipState);

    const flip = () => {
        setFlipped(isUp => !isUp);
    };

    return [isFlipped, flip];
}


function useAxios(url) {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (formatter = data => data, restOfUrl = "") => {
        const response = await axios.get(`${url}${restOfUrl}`);
        setResponses(data => [...data, formatter(response.data)]);
    };

    return [responses, addResponseData];
}

export { useFlip, useAxios }