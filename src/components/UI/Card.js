import "./Card.css";

const Card = (props) => {
  //Wrapper
  const classes = "card " + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
