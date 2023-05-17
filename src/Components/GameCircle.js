import React from 'react';
import '../Game.css';


const GameCircle = ({id,children,className, circleonclick}) => {
  return (
    <div className={`gameCircle ${className}`}  onClick = {() => circleonclick(id)}>
        {children}
    </div> 
  );
  
};

export default GameCircle;