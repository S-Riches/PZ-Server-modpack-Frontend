import { useState } from "react";

const Input = (props) => {
    const [linkToCollection, setLinkToCollection] = useState("");
    const handleChange = (event) => {
        setLinkToCollection(event.target.value);
    };
    const handleClick = () => {
        props.callBackFunction(linkToCollection);
    };
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
