import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Img from "../../components/Img";
import Text from "../../components/Text";

const Section = styled.section`
  padding: 6rem 2rem 4rem;
  margin-bottom: 6rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const Work = () => {
  const WORK_DATA = [
    {
      title: "Heaven Scent",
      description:
        "A flower shop project website I created having fully functional featuring dynamic pages, product listings, and a working checkout system for testing purchases.",
      image: "/heaven_scent.png",
      link: "/Project4_Adrianna_Samonte",
      tech: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "DigiLight Studios",
      description:
        "A CMS project I create for a photography studio with user roles, photo galleries, blog management, comment moderation, CAPTCHA, and category-based navigation.",
      image: "/cmsphotography.png",
      link: "https://github.com/asamonte40/WebDev2Project.git",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
    },
    {
      title: "HAYDEN PLANETARIUM Mockup",
      description:
        "A practice assignment where I recreated a provided website design using only HTML and CSS, focusing on accurately replicating the layout and visual structure.",
      image: "/mockup.png",
      link: "/Project1_Adrianna_Samonte/project1.html",
      tech: ["HTML", "CSS"],
    },
  ];

  return (
    <Section id="work">
      <Text
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#3d2f24",
          textAlign: "center",
        }}
      >
        My Projects
      </Text>

      <Grid>
        {WORK_DATA.map((item, i) => (
          <Card
            key={i}
            style={{
              width: "350px",
              padding: "1.5rem",
              backgroundColor: "white",
              border: "2px solid #6d5c4a",
            }}
          >
            <Img
              src={item.image}
              alt={item.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />

            <Text
              style={{
                marginTop: "1rem",
                fontSize: "1.4rem",
                color: "#3d2f24",
              }}
            >
              {item.title}
            </Text>

            <Text
              style={{
                marginTop: "0.5rem",
                color: "#6d5c4a",
                fontWeight: 400,
                marginBottom: "1rem",
              }}
            >
              {item.description}
            </Text>

            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "1rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {item.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    background: "#f7ede2",
                    padding: "6px 12px",
                    borderRadius: "8px",
                    fontSize: "0.8rem",
                    color: "#3d2f24",
                    marginTop: "1rem",
                    display: "flex",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {item.link && (
              <Button
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
                onClick={() => (window.location.href = item.link)}
                label="View Project"
              />
            )}
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Work;
