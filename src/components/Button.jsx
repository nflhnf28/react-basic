import React from "react";

function Button(props){
  const { children, className, id, onDelete } = props;
  return(
    <button className={className} onClick={() => onDelete(id)}>{children}</button>
  )
}

export default Button;