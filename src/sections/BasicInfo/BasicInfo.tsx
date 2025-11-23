import React from "react";
import HeroImage from "../../components/HeroImage";
import Text from "../../components/Text";
import Card from "../../components/Card";
import Button from "../../components/Button";
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
        src="/portfolioheroimage2.png"
        alt="portfolioheroimage"
        height="600px"
        style={{ display: "block" }}
      />

      <Card
        style={{
          position: "relative",
          margin: "-60px auto 5rem",
          padding: "3rem 2rem",
          width: "1000px",
          backgroundColor: "white",
          overflow: "hidden",
        }}
      >
        <Name>Adrianna Samonte</Name>
        <Text style={{ fontWeight: 600, color: "#6d5c4a" }}>
          Full-Stack Web Developer • Student (she/her)
        </Text>

        <InfoWrapper>
          <Text
            size="medium"
            color="#4a3f35"
            style={{ marginTop: "0.75rem", fontWeight: 600 }}
          >
            Currently, I am studying <strong>Full-Stack Web Development</strong>{" "}
            at <strong>Red River College Polytechnic</strong>, where I’m
            building a strong skills in both front-end and back-end development.
          </Text>
          <Text
            size="medium"
            color="#4a3f35"
            style={{ marginTop: "0.75rem", fontWeight: 600 }}
          >
            I'm most passionate about front-end development in creating clean,
            modern, and intuitive websites that place a strong focus on
            accessibility, user experience, and consistency in design. I enjoy
            converting ideas into functional, visually engaging solutions while
            understanding the reasoning behind every line of code.
          </Text>

          <Text
            size="medium"
            color="#4a3f35"
            style={{ marginTop: "0.75rem", fontWeight: 600 }}
          >
            While I'm developing skills across the full stack, my primary focus
            and strength lie in front-end development, UI/UX design, and
            building responsive layouts that feel polished and professional.
            Each project helps me continue to better my craft and find even
            better ways to create engaging digital experiences.
          </Text>

          <a href="/work">
            <Button
              label="See My Projects"
              style={{
                marginTop: "2rem",
                padding: "0.8rem 1.5rem",
                fontWeight: 600,
                fontSize: "13px",
                borderRadius: "8px",
                background: "#a0826d",
                color: "#fff",
                border: "none",
                cursor: "pointer",
                transition: "0.3s ease",
              }}
            />
          </a>
        </InfoWrapper>
      </Card>
    </>
  );
};

export default BasicInfo;
