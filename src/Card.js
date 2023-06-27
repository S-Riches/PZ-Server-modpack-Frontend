import { useState } from "react";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

const Card = ({ cardData, addDataToObject }) => {
    let modIdChoice = [];
    let [cardState, setCardState] = useState(false);
    const handleClick = () => {
        setCardState(!cardState);
    };

    // create an object, append choice of the checkbox to the object, send a set to the parent component to then collude into the choices.
    const handleModIdChoice = (e) => {
        // TODO if true add, if false, remove from the array
        modIdChoice.push(e.target.value);
        console.log(modIdChoice);
        let uniqueChoices = [...new Set(modIdChoice)];
        console.log("set : ", uniqueChoices);
        addDataToObject(uniqueChoices);
    };
    // if there are more than two mod ids, then we create a card.
    if (cardData[0].length > 1) {
        let modIds = cardData[0];
        return (
            <div className="Card" data-testid="modOptionCard">
                <div className="cardGrid">
                    <div className="image">
                        <img src={cardData[3]} alt="mod pack" />
                    </div>
                    <div className="content">
                        <h3>Multiple Mod Ids Present In:</h3>
                        <h1>{cardData[2]}</h1>
                        <button
                            name="modIdSelectorPanelButton"
                            onClick={handleClick}
                        >
                            &#11015;
                        </button>
                        <FormGroup>
                            {cardState &&
                                modIds.map((modId) => (
                                    <FormControlLabel
                                        control={<Checkbox value={modId} />}
                                        key={modId}
                                        label={modId}
                                        onClick={handleModIdChoice}
                                    />
                                ))}
                        </FormGroup>
                    </div>
                </div>
            </div>
        );
    }
};
export default Card;
