import { useEffect, useState } from "react";

const getCardDataFromApi = async (submittedLink) => {
    if (submittedLink !== "") {
        const requestOptions = {
            method: "POST",
            mode: "cors",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-Type": "application/json",
            },
            // prettier-ignore
            body: JSON.stringify({ "link": submittedLink }),
        };
        console.log(requestOptions);
        console.log(requestOptions.body);
        const response = await fetch(
            "http://localhost:9999/collection",
            requestOptions
        );
        // we get the array here, needs to be consumed in the card creator
        console.log(await response.json());
    }
};

const Input = (props) => {
    const [linkToCollection, setLinkToCollection] = useState("");
    const [submittedLink, setSubmittedLink] = useState(linkToCollection);
    const handleChange = (event) => {
        setLinkToCollection(event.target.value);
    };
    const handleClick = () => {
        setSubmittedLink(linkToCollection);
    };
    // need to stop this from auto sending a request whenever its changed -> need to stop abusing the endpoint
    useEffect(() => {
        getCardDataFromApi(submittedLink);
    });
    return (
        <div className="Input">
            <h2>Enter Mod Collection link here</h2>
            <input
                data-testid="modCollectionInputBox"
                type="text"
                value={linkToCollection}
                onChange={handleChange}
            />
            <button data-testid="modCollectionSendButton" onClick={handleClick}>
                Send
            </button>
        </div>
    );
};
export default Input;
