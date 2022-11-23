import React from "react";
import CardDetails from "./CardDetails";
import styles from "./CardList.module.css"


const CardList = ({ data }) => {
  return (
    <div className={`${styles.cardList} ${styles.cardagain}`}>
      {data.map((card) => (
        <CardDetails
          key={card.id}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  )
}

export default CardList;

//   < className='card-list'>
//      <CardDetails
//              image = { faker.image.city() }
//              tittle = "hello"
//              description={faker.lorem.paragraphs()}

//              />
//          <CardDetails image = { faker.image.animals() } />
//          <CardDetails tittle="Another card"image = { faker.image.food() }/>
//          <CardDetails image = { faker.image.fashion() } />
