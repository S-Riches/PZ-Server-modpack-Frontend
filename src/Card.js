const Card = (props) => {
    // TODO when you click on the cards button, open up to larger card that allows you to click multiple options to select a mod id to use
    let cardData = props.cardData;
    // if there are more than two mod ids, then we create a card.
    if (cardData[0].length > 1) {
        return (
            <div className="Card" name="modOptionCard">
                <div className="cardGrid">
                    <div className="image">
                        <img src={cardData[3]} />
                    </div>
                    <div className="content">
                        <h3>Multiple Mod Ids Present in:</h3>
                        <h1>{cardData[2]}</h1>
                        <button>&#8594;</button>
                    </div>
                </div>
            </div>
        );
    }
};
export default Card;
