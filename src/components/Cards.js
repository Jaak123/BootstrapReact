import React from "react";
import { Card } from "react-bootstrap";

const Cards = () => {
  const footbal = [
    {
      image:
        "https://www.mancity.com/meta/media/0jgj0i3f/09_joao-cancelo_half-body.png?width=494",
      title: "Cancelo",
      text: "Portuguese right-back Joao Cancelo joined City from Juventus in August 2019.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvC1dnw0TzrWVkkrBJ4Kp4va9noEE_GjU8cQ&usqp=CAU",
      title: "Lukaku",
      text: "Lukaku completes return to Chelsea",
      image:
        "https://backend.liverpoolfc.com/sites/default/files/styles/xs/public/acquiadam/2021-11/mohamed-salah-442.jpg?itok=hzKiui_a&width=1680",
      title: "Salah",
      text: "Mohamed Salah is one of the most prolific forwards in European football",
    },
  ];

  const renderCard = (card, index) => {
    return (
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
        </Card.Body>
      </Card>
    );
  };
  return <div className="App">{footbal.map(renderCard)}</div>;
};
export default Cards;
