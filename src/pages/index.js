import React from "react"
import { Link } from "gatsby"
import Container from "../components/container"
import CardGrid from "../components/card-grid.js";

const cardItems = [
    {
        key: 1,
        title: "Week 1",
        content: "This is some content for Week 1",
        actionTitle: "VIEW",
        onClick: (e) => {console.log(e)}
    },
    {
        key: 2,
        title: "Week 2",
        content: "This is some content for Week 2",
        actionTitle: "VIEW",
        onClick: (e) => { console.log(e) }
    },
    {
        key: 3,
        title: "Week 3",
        content: "This is some content for Week 3",
        actionTitle: "VIEW",
        onClick: (e) => { console.log(e) }
    },
    {
        key: 4,
        title: "Week 4",
        content: "This is some content for Week 4",
        actionTitle: "VIEW",
        onClick: (e) => { console.log(e) }
    },
    {
        key: 5,
        title: "Week 5",
        content: "This is some content for Week 5",
        actionTitle: "VIEW",
        onClick: (e) => { console.log(e) }
    },
    {
        key: 6,
        title: "Week 6",
        content: "This is some content for Week 6",
        actionTitle: "VIEW",
        onClick: (e) => { console.log(e) }
    },
]

export default () => (
  <Container>
    <h1>This is just a test to see how quickly this wants to reload?</h1>
    <h2>Sessions</h2>
    <CardGrid cardItems={cardItems} />
  </Container>
);

