import { faker } from "@faker-js/faker";
import React, { useState } from "react";
import CardList from "../components/Card/CardList";
import NewCard from "./NewCard";
// import Counter from '../components/Counter/Counter';

const tittle = "Hello there";

// function greet(){
//     return "Hello from greet"
// }

const App = () => {
  const style = { color: "purple" };
  const obj = { name: "Omotola", quality: "Is Semicolon's Princess" };

  const cardData = [
    {
      id: faker.datatype.uuid(),
      image: faker.image.city(),
      tittle: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
    },
    {
      id: faker.datatype.uuid(),
      image: faker.image.animals(),
      tittle: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
    },
    {
      id: faker.datatype.uuid(),
      image: faker.image.avatar(),
      tittle: faker.random.word(),
      description: faker.random.words(faker.random.numeric()),
    },
  ];
  const [data, setData] = useState(cardData);

  return (
    <div>
      {/* <h1>{title}</h1>
      <br /> */}
      {/* <h1>{greet()}</h1> */}
      <br />
      <h1 style={style}>
        {obj.name} is just {obj.quality} no lies. "Says Mr. Anjola "
      </h1>
      <h2>Welcome!!!!</h2>
      <NewCard setData ={setData} />
      <CardList data={data} />
      {/* <Counter/> */}
    </div>
  );
};

export default App;
