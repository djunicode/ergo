import React from 'react';
import { Link } from 'react-router-dom';
import "./StyledLink.css";

const StyledLink = (props)=>{
    return <Link className="link" {...props}>{props.children}</Link>
}

export default StyledLink;