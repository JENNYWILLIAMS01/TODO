import React from 'react';
import styled from "styled-components";
import "./Button.css";

const Button = styled.button`
    background-color: ${props => props.bg || '#55f'};
    color: ${props => props.color || 'white'};
    font-size: 1.2rem;
    padding: 5px;
    margin: 2px;


    @media (max-width: 600px){
      
    }

&:hover {
    background-color: rgb(199, 34, 144);
}  

`;

// const Button = ({displayName, onClick, bg, color}) => {
//   return (
//     <button 
//     className="btn__button"
//     onClick={onClick}
//     style={{ backgroundColor: bg, color: color}}
//     >
//      {displayName}
//   </button>
//   );
// };
export default Button;
