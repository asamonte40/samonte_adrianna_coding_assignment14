import React from "react";
import HeroImage from "../../components/HeroImage";
import Text from "../../components/Text";
import Card from "../../components/Card";
import styled from "styled-components";

const Name = styled.h1`
  font-size: 2.75rem;
  font-weight: 700;
  color: #3d2f24;
  margin-bottom: 0.25rem;
`;

const InfoWrapper = styled.div`
  max-width: 700px;
  margin: 0 auto;
  line-height: 1.7;
`;

const BasicInfo = () => {
  return (
    <>
      <HeroImage
        src="/portfolioheroimage1.png"
        alt="portfolioheroimage"
        height="600px"
        style={{ display: "block" }}
      />

      <Card
        style={{
          position: "relative",
          margin: "-60px auto 5rem", // <-- add some space below
          padding: "3rem 2rem",
          width: "1000px",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <Name>Adrianna Samonte</Name>
        <Text style={{ fontWeight: 600, color: "#6d5c4a" }}>
          Full-Stack Web Developer • Student
        </Text>

        <InfoWrapper>
          <Text
            size="medium"
            color="#4a3f35"
            style={{ marginTop: "0.75rem", fontWeight: 600 }}
          >
            I'm a student currently studying in the{" "}
            <strong>Full-Stack Web Development</strong> program at
            <strong> Red River College Polytechnic</strong>, where I’m building
            strong foundations in front-end and back-end development.
          </Text>

          <Text
            size="medium"
            color="#4a3f35"
            style={{ marginTop: "0.75rem", fontWeight: 600 }}
          >
            I'm passionate about creating clean, modern, and intuitive websites
            that focus on accessibility, user experience, and design
            consistency. I enjoy bringing ideas to life and learning the “why”
            behind the code I write.
          </Text>

          <Text
            size="medium"
            color="#4a3f35"
            style={{ marginTop: "0.75rem", fontWeight: 600 }}
          >
            I'm especially interested in front-end development, UI/UX design,
            and building responsive layouts that feel smooth and professional.
            Every new project helps me improve my skills and explore better ways
            to build engaging digital experiences.
          </Text>
        </InfoWrapper>
      </Card>
    </>
  );
};

export default BasicInfo;
