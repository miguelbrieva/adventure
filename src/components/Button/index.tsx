import React from "react";

type Props = {
  children: string,
  handleOption: (arg0: any) => void 
}

const Button: React.FC<Props>  = (props) => {
    function handleOnClick(event: any) {
        props.handleOption(event)
    }
    return (
        <button className="button" onClick={handleOnClick}>
            {props.children}
        </button>
    );
}

export default Button;
