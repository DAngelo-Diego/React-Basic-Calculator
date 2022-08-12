import "../stylesheets/button.css";

function Button(props) {
  const isOp = (value) => {
    return isNaN(value) && value !== "." && value !== "=";
  };

  //   if (isOp(props.children)) {
  //     return (
  //       <div
  //         className="button-container operator"
  //         onClick={() => props.mC(props.children)}
  //       >
  //         {props.children}
  //       </div>
  //     );
  //   } else {
  //     return (
  //       <div
  //         className="button-container"
  //         onClick={() => props.mC(props.children)}
  //       >
  //         {props.children}
  //       </div>
  //     );
  //   }
  // }

  return (
    <button
      className={`button-container ${
        isOp(props.children) ? "operator" : null
      }`.trim()}
      onClick={() => props.mC(props.children)}
    >
      {props.children}
    </button>
  );
}

export default Button;
