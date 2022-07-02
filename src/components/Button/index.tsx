import React from "react";
import { OptionsInterface } from "../Options"

type Props = {
  children: string,
  handleOption: (option: OptionsInterface) => void 
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