import React from "react";
import styled from "styled-components";
import { WorkItem } from "./Work.types";

const Card = styled.div`
  background: #ffffff;
  border-radius: 15px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  max-width: 350px;
  width: 100%;
`;

const Preview = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 12px;
`;

const Title = styled.h3`
  margin-top: 1rem;
  font-size: 1.4rem;
  color: #3d2f24;
`;

const Description = styled.p`
  color: #6d5c4a;
  margin-top: 0.5rem;
`;

const TechList = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  background: #f7ede2;
  padding: 6px 12px;
  border-radius: 8px;
  font-size: 0.8rem;
  color: #3d2f24;
`;

const LinkButton = styled.a`
  display: inline-block;
  margin-top: 1rem;
  padding: 10px 18px;
  background: #a0826d;
  color: white;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.9rem;
  transition: 0.3s;
  &:hover {
    background: #8a6f5d;
  }
`;

const WorkCard: React.FC<WorkItem> = ({
  title,
  description,
  image,
  link,
  tech,
}) => {
  return (
    <Card>
      <Preview src={image} alt={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>

      <TechList>
        {tech.map((t) => (
          <TechTag key={t}>{t}</TechTag>
        ))}
      </TechList>

      {link && <LinkButton href={link}>View Project</LinkButton>}
    </Card>
  );
};

export default WorkCard;
