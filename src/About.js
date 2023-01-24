import React from "react";
import { Card } from "react-bootstrap";
import './About.css';

class Profile extends React.Component {

  render() {
    /* TODO: render information about the developers */
    return (
      <>
        <Card>
          <Card.Img className="profile-pic" src={"https://thumb.ac-illust.com/c7/c7451b519c84650c09058605676949a2_t.jpeg"}></Card.Img>
          <Card.Body>
            <Card.Title>Steve Gant</Card.Title>
            <Card.Text>My name is Steve Gant. Before deciding to attend Code Fellows and make a career change to Software
            Development,
            I worked for a HVAC wholesaler as a counter sales rep and an assistant manager.
            I decided to make the career change because I felt I was at a bit of a dead end with my previous employer.
            There
            were few opportunities for growth.
            I chose Software Development primarily because most jobs in the field offer flexibility, which would allow
            me
            to
            spend more time with my family.</Card.Text>
          </Card.Body>
        </Card>

        <Card>
          <Card.Img className="profile-pic" src={"https://thumb.ac-illust.com/c7/c7451b519c84650c09058605676949a2_t.jpeg"}></Card.Img>
          <Card.Body>
            <Card.Title>Marco Villafana</Card.Title>
            <Card.Text>Hi, my name is Marco Villafana (he/him). I am an army veteran and live in Washington state. I was an
            information technology specialist. Where I did desktop support and network support. Since then, I have
            recently
            completed a computer science degree at Central Washington University. I am still undecided on what to
            specialize
            in and web design wasn't covered very much in my degree, so I'm interested in finding out if this is
            something I
            want to pursue.</Card.Text>
          </Card.Body>
        </Card>
      </>
    )

  }
};

export default Profile;
