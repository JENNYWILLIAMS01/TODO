import React, { useState } from 'react';
import Button from './Button/Button'; 
import "./Card/NewCard.css"
import {faker} from "@faker-js/faker"

const NewCard = ({ setData }) => {
  //  const [title, setTitle] = useState('');
    const [inputs, setInputs] = useState({
    title:"",
    description:"",
   });
   const [card, setCard] = useState({
    id:"",
    title:"",
    description: "",
    image:"",
   });
  //  const titleChangeHandler = (event) =>{
  //   setTitle(event.target.value)
  //   // console.log(event.target.value);
  //  };

  const inputChangeHandler = (event) => {
    setInputs((prevState) => ({ ...prevState, [event.target.name]: event.target.value}));
  console.log(inputs);
};
  
const formSubmitHandler = (event) =>{
  event.preventDefault();
  console.log(inputs);

  const cardObj = {
    id : faker.datatype.uuid(),
    image: faker.image.fashion(),
    ...inputs,
  };
  setData((prevData) => [cardObj, ...prevData]);
  setInputs({title: "", description: ""});
};
  // console.log(cardObj)

  return (
    <form className="new-card" onSubmit={formSubmitHandler}> 
    <div>
    <label htmlFor="title">Card Title</label>
        <input type="text" id="title" name="title" value={inputs.title} onChange={inputChangeHandler} />
    </div>
    <div>    
    <label htmlFor="Description">Card Description</label>
        <input type="text" id="Description" name="description" value={inputs.description} onChange={inputChangeHandler}/>
    </div>
    
    {/* <Button displayName="Add Card" /> */}
    <Button color="pink">Add Card</Button>
   </form>
  )
}

export default NewCard


  