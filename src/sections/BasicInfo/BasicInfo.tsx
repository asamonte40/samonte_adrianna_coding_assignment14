import React from "react";
import HeroImage from "../../components/HeroImage";
import Button from "../../components/Button";
import Text from "../../components/Text";
import Card from "../../components/Card";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 2.75rem;
  font-weight: 700;
  color: #3d2f24;
  margin-bottom: 0.25rem;
`;

const Subtitle = styled.h2`
  font-size: 1.15rem;
  font-weight: 400;
  color: #6d5c4a;
  margin-bottom: 1.5rem;
`;

const InfoWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
`;

const ButtonRow = styled.div`
  margin-top: 2.2rem;
  display: flex;
  gap: 0.75rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledButton = styled(Button)`
  background-color: #a0826d; /* <-- CHANGE THIS TO ANY COLOR YOU WANT */
  color: white;

  padding: 0.4rem 1rem; /* smaller button */
  font-size: 0.85rem; /* smaller text */
  border-radius: 6px;
  min-width: 100px; /* smaller width */
  text-align: center;

  &:hover {
    opacity: 0.9;
  }
`;

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

const BasicInfo = () => {
  return (
    <>
      <HeroImage
        src="/portfolioheroimage1.png"
        alt="portfolioheroimage"
        height="600px"
      />

      <Card color="white" width="1000px">
        <Name>Adrianna Samonte</Name>
        <Subtitle>Full-Stack Web Developer • Student</Subtitle>

        <InfoWrapper>
          <Text size="medium" color="#4a3f35">
            I'm a student currently studying in the{" "}
            <strong>Full-Stack Web Development</strong> program at
            <strong> Red River College Polytechnic</strong>, where I’m building
            strong foundations in front-end and back-end development.
          </Text>

          <Text size="medium" color="#4a3f35" style={{ marginTop: "0.75rem" }}>
            I'm passionate about creating clean, modern, and intuitive websites
            that focus on accessibility, user experience, and design
            consistency. I enjoy bringing ideas to life and learning the “why”
            behind the code I write.
          </Text>

          <Text size="medium" color="#4a3f35" style={{ marginTop: "0.75rem" }}>
            I'm especially interested in front-end development, UI/UX design,
            and building responsive layouts that feel smooth and professional.
            Every new project helps me improve my skills and explore better ways
            to build engaging digital experiences.
          </Text>
        </InfoWrapper>

        <ButtonRow>
          <StyledButton onClick={() => scrollToSection("work")} label="Work" />
          <StyledButton
            onClick={() => scrollToSection("skills")}
            label="Skills"
          />
          <StyledButton
            onClick={() => scrollToSection("resources")}
            label="Resources"
          />
          <StyledButton
            onClick={() => scrollToSection("developer-setup")}
            label="Developer Setup"
          />
        </ButtonRow>
      </Card>
    </>
  );
};

export default BasicInfo;
