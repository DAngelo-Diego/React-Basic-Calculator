import "../stylesheets/clear.css";

const Clear = (props) => (
  <div className="b-clear" onClick={props.clear}>
    {props.children}
  </div>
);

export default Clear;
