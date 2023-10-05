import { useState } from "react";

const Input = ({ callBackFunction }) => {
    const [linkToCollection, setLinkToCollection] = useState("");
    const handleChange = (event) => {
        setLinkToCollection(event.target.value);
    };
    const handleClick = () => {
        callBackFunction(linkToCollection);
    };
    return (
        <div className="Input">
            <h2>Enter Mod Collection link here</h2>
            <input
                name="modCollectionInputBox"
                type="text"
                value={linkToCollection}
                onChange={handleChange}
            />
            <button name="modCollectionSendButton" onClick={handleClick}>
                Send
            </button>
        </div>
    );
};
export default Input;
