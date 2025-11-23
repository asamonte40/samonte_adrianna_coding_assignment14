import React from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Button from "../../components/Button";
import Img from "../../components/Img"; // <-- your custom Img component

const Section = styled.section`
  padding: 4rem 2rem 6rem;
  margin-bottom: 6rem;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #3d2f24;
  text-align: center;
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
        "A fully functional flower shop website with dynamic pages, product listings, WBS documentation, and a CMS for managing categories, inventory, and content.",
      image: "/heaven_scent.png",
      link: "/Project4_Adrianna_Samonte",
      tech: ["JavaScript", "HTML", "CSS"],
    },
    {
      title: "DigiLight Studios",
      description:
        "A large-scale CMS for a photography studio featuring user roles (Admin, Photographer, Guest), photo galleries, blog management, comment moderation, CAPTCHA validation, and category-based navigation.",
      image: "/cmsphotography.png",
      link: "https://github.com/asamonte40/WebDev2Project.git",
      tech: ["PHP", "MySQL", "HTML", "CSS"],
    },
    {
      title: "HAYDEN PLANETARIUM Mockup",
      description: "A fully custom portfolio built with React & TypeScript.",
      image: "/mockup.png",
      link: "/Project1_Adrianna_Samonte/project1.html",
      tech: ["HTML", "CSS"],
    },
  ];

  return (
    <Section id="work">
      <Heading>My Projects</Heading>

      <Grid>
        {WORK_DATA.map((item, i) => (
          <Card
            key={i}
            style={{
              width: "350px",
              padding: "1.5rem",
              backgroundColor: "white",
            }}
          >
            {/* Custom Img component */}
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

            {/* Title */}
            <h3
              style={{
                marginTop: "1rem",
                fontSize: "1.4rem",
                color: "#3d2f24",
              }}
            >
              {item.title}
            </h3>

            {/* Description */}
            <p
              style={{
                marginTop: "0.5rem",
                color: "#6d5c4a",
              }}
            >
              {item.description}
            </p>

            {/* Tech List */}
            <div
              style={{
                marginTop: "1rem",
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
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
                  }}
                >
                  {t}
                </span>
              ))}
            </div>

            {/* Optional Button */}
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
