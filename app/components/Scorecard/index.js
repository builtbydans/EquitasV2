import Button from "../UI/Button";

const Scorecard = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.test}</p>
      <Button
        context={props.context}
        btnStyle={props.btnStyle}
        onClick={props.onClick}
      />
    </div>
  );
};

export default Scorecard;
