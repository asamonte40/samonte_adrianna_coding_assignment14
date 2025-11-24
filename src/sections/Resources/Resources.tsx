import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Img from "../../components/Img";

const Section = styled.section`
  padding: 6rem 2rem 4rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const Resources = () => {
  const RESOURCES = [
    {
      title: "YouTube",
      icon: "/youtube_icon.png",
      summary:
        "A great platform for learning web development, tutorials, and coding walkthroughs.",
      link: "https://www.youtube.com/",
    },
    {
      title: "Git & GitHub",
      icon: "/github_logo.png",
      summary:
        "Version control system and platform for collaborating on projects.",
      link: "https://github.com/",
    },
    {
      title: "W3Schools",
      icon: "/w3schools_logo.png",
      summary:
        "Beginner-friendly tutorials for HTML, CSS, JavaScript, and more.",
      link: "https://www.w3schools.com/",
    },
    {
      title: "Stack Overflow",
      icon: "/stackoverflow.png",
      summary: "Community Q&A for coding problems and solutions.",
      link: "https://stackoverflow.com/",
    },
    {
      title: "Canva",
      icon: "/canva_logo.png",
      summary:
        "A simple and intuitive tool for creating graphics, layouts, and designs quickly.",
      link: "https://www.canva.com/",
    },
    {
      title: "RRC Polytech LEARN",
      icon: "/learn_logo.png",
      summary:
        "The official RRC Polytech learning platform for course materials and updates.",
      link: "https://learn.rrc.ca/",
    },
  ];

  return (
    <Section id="resources">
      <Text
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#3d2f24",
          textAlign: "center",
        }}
      >
        Resources
      </Text>

      <Grid>
        {RESOURCES.map((res) => (
          <Card
            key={res.title}
            style={{
              width: "350px",
              padding: "1.5rem",
              backgroundColor: "white",
              border: "2px solid #6d5c4a",
            }}
          >
            <Img
              src={res.icon}
              alt={res.title}
              style={{ width: "auto", height: "50px" }}
            />
            <Text
              size="small"
              color="#3d2f24"
              style={{ marginBottom: "0.5rem" }}
            >
              {res.title}
            </Text>
            <Text
              size="small"
              color="#4a3f35"
              style={{
                marginBottom: "1rem",
                fontWeight: 400,
                color: "#6d5c4a",
              }}
            >
              {res.summary}
            </Text>
            <Button
              label="Visit"
              onClick={() => window.open(res.link, "_blank")}
              style={{
                display: "inline-block",
                marginTop: "1rem",
                background: "#a0826d",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
                fontSize: "0.9rem",
                padding: "10px 18px",
              }}
            />
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Resources;
