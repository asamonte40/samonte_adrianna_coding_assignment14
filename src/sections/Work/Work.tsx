import React from "react";
import styled from "styled-components";
import WorkCard from "./WorkCard";
import { WorkItem } from "./Work.types";

const Section = styled.section`
  padding: 4rem 1rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #3d2f24;
  margin-bottom: 2rem;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const WORK_DATA: WorkItem[] = [
  {
    title: "Heaven Scent – Flower Shop",
    description:
      "A fully functional flower shop website with dynamic pages, product listings, WBS documentation, and a CMS for managing categories, inventory, and content.",
    image: "/heaven_scent.png",
    link: "file:///C:/Users/ANDREA/Documents/TERM%201/Web%20Development/Module%209/Project4_Adrianna_Samonte/index.html",
    tech: ["JavaScript", "HTML", "CSS"],
  },
  {
    title: "DigiLight Studios – CMS Photography",
    description:
      "A large-scale CMS for a photography studio featuring user roles (Admin, Photographer, Guest), photo galleries, blog management, comment moderation, CAPTCHA validation, and category-based navigation.",
    image: "/digilight.png",
    link: "",
    tech: ["PHP", "MySQL", "AJAX", "WYSIWYG Editor"],
  },
  {
    title: "Portfolio Website",
    description: "A fully custom portfolio built with React & TypeScript.",
    image: "/portfolioheroimage.png",
    link: "https://yourproject.com",
    tech: ["React", "TypeScript", "Styled Components"],
  },
];

const Work = () => {
  return (
    <Section id="work">
      <Heading>My Projects</Heading>

      <Grid>
        {WORK_DATA.map((item) => (
          <WorkCard key={item.title} {...item} />
        ))}
      </Grid>
    </Section>
  );
};

export default Work;
