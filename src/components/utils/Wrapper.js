import React from 'react'

export const Wrapper = (props) => {
  return (
   <div className="max-w-sm rounded border 2 border-red-700 overflow-hidden shadow-lg" >
   {props.children}
   Wrapper </div>
  );
};

export default Wrapper;
