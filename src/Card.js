const Card = (props) => {
  // TODO when you click on the cards button, open up to larger card that allows you to click multiple options to select a mod id to use
	return(
	<div className="Card"> 
		<div className="cardGrid">
      <div className="image"> 
        <img src="https://picsum.photos/200"/> 
      </div>
      <div className="content">
        <h3>card Number</h3>
        <h1>mod Name</h1>
        <button>&#8594;</button>
      </div>
		</div>
	</div>
	)
}
export default Card;
