import React from "react";
import { graphql, navigate } from "gatsby";
import Layout from "../components/layout";
import CardList from "../components/card-list.js";

const cardItems = [
  {
    key: 1,
    title: "Week 1",
    content: "This is some content for Week 1",
    actionTitle: "VIEW",
    onClick: e => {
      navigate("/session-content", {
        state: {
          title: "Week 1",
          content: [
            "This is the first paragraph of content that I'd like here",
            "And this is the 2nd paragraph of content that I'd like to show about week 1.  You can see that it's a little bit longer.",
            "This is the thrid paragraph of content that I'm going to include for Week 1.  It is comparably long to the second paragraph of content and even might be just a bit longer still."
          ]
        }
      });
    }
  },
  {
    key: 2,
    title: "Week 2",
    content: "This is some content for Week 2",
    actionTitle: "VIEW",
    onClick: e => {
        navigate("/session-content", {
        state: {
          title: "Week 2",
          content: [
            "This is the first paragraph of content that I'd like here",
            "And this is the 2nd paragraph of content that I'd like to show about week 2.  You can see that it's a little bit longer.",
            "This is the thrid paragraph of content that I'm going to include for Week 2.  It is comparably long to the second paragraph of content and even might be just a bit longer still."
          ]
        }
      });
    }
  },
  {
    key: 3,
    title: "Week 3",
    content: "This is some content for Week 3",
    actionTitle: "VIEW",
    onClick: e => {
        navigate("/session-content", {
        state: {
          title: "Week 3",
          content: [
            "This is the first paragraph of content that I'd like here",
            "And this is the 2nd paragraph of content that I'd like to show about week 3.  You can see that it's a little bit longer.",
            "This is the thrid paragraph of content that I'm going to include for Week 3.  It is comparably long to the second paragraph of content and even might be just a bit longer still."
          ]
        }
      });
    }
  },
  {
    key: 4,
    title: "Week 4",
    content: "This is some content for Week 4",
    actionTitle: "VIEW",
    onClick: e => {
        navigate("/session-content", {
        state: {
          title: "Week 4",
          content: [
            "This is the first paragraph of content that I'd like here",
            "And this is the 2nd paragraph of content that I'd like to show about week 4.  You can see that it's a little bit longer.",
            "This is the thrid paragraph of content that I'm going to include for Week 4.  It is comparably long to the second paragraph of content and even might be just a bit longer still."
          ]
        }
      });
    }
  },
  {
    key: 5,
    title: "Week 5",
    content: "This is some content for Week 5",
    actionTitle: "VIEW",
    onClick: e => {
        navigate("/session-content", {
        state: {
          title: "Week 5",
          content: [
            "This is the first paragraph of content that I'd like here",
            "And this is the 2nd paragraph of content that I'd like to show about week 5.  You can see that it's a little bit longer.",
            "This is the thrid paragraph of content that I'm going to include for Week 5.  It is comparably long to the second paragraph of content and even might be just a bit longer still."
          ]
        }
      });
    }
  },
  {
    key: 6,
    title: "Week 6",
    content: "This is some content for Week 6",
    actionTitle: "VIEW",
    onClick: e => {
        navigate("/session-content", {
        state: {
          title: "Week 6",
          content: [
            "This is the first paragraph of content that I'd like here",
            "And this is the 2nd paragraph of content that I'd like to show about week 6.  You can see that it's a little bit longer.",
            "This is the thrid paragraph of content that I'm going to include for Week 6.  It is comparably long to the second paragraph of content and even might be just a bit longer still."
          ]
        }
      });
    }
  }
];

export default ({ data }) => (
  <Layout>
    <h1>{data.site.siteMetadata.title}</h1>
    <p>
      A 13-week study where we'll examine and crack open the foundational
      components that make a man a man. Each week, we'll address a different
      foundational component of manhood, covering components from money, to
      work, to God, to a spouse, to children, just to name a few.
    </p>
    <p>
      This study is designed to challenge you and give you an opportunity to
      formulate your own convictions about the kind of man you want to be. We'll
      leverage your own opinions, the opinions of the other guys in the group,
      and the Scriptures in helping us examine each foundational component.
    </p>
    <h2>Sessions</h2>
    <CardList cardItems={cardItems} />
  </Layout>
);

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
