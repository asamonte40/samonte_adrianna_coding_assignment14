import React, { useState } from "react";
import Text from "../../components/Text";
import Card from "../../components/Card";
import RadioButton from "../../components/RadioButton";
import Table from "../../components/Table";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";
import TableFooter from "../../components/Table/TableFooter";
import styled from "styled-components";

const Section = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  text-align: center;
  padding: 3rem 2rem;
`;

const PrettyRadioWrapper = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;

  label {
    font-size: 0;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background: #fff;
    cursor: pointer;
    margin: 0 0.4rem;
    transition: 0.25s ease;
  }
`;

const Skills = () => {
  const [selectedTable, setSelectedTable] = useState("languages");

  const languagesAndFrameworks = [
    { skill: "HTML5", level: "Advanced" },
    { skill: "CSS3 / SCSS", level: "Advanced" },
    { skill: "JavaScript / TypeScript", level: "Intermediate" },
    { skill: "React", level: "Intermediate" },
    { skill: "PHP", level: "Intermediate" },
    { skill: "MySQL", level: "Intermediate" },
  ];

  const tools = [
    { skill: "Git & GitHub", level: "Proficient" },
    { skill: "VS Code", level: "Proficient" },
    { skill: "phpMyAdmin", level: "Proficient" },
    { skill: "Figma", level: "Proficient" },
    { skill: "Canva", level: "Proficient" },
    { skill: "Docker", level: "Proficient" },
  ];

  const softSkills = [
    { skill: "Communication", level: "Strong" },
    { skill: "Time Management", level: "Strong" },
    { skill: "Problem Solving", level: "Strong" },
    { skill: "Teamwork", level: "Strong" },
    { skill: "Attention to Detail", level: "Strong" },
  ];

  const renderTable = (
    title: string,
    data: { skill: string; level: string }[],
    skillLabel = "Skill",
    levelLabel = "Level",
  ) => (
    <>
      <Text size="large" color="#6d5c4a" style={{ marginBottom: "0.5rem" }}>
        {title}
      </Text>

      <Table>
        <TableHeader>
          <TableRow>
            <TableCell
              style={{
                border: "2px solid #4a3f35",
                padding: "10px 16px",
                backgroundColor: "#a0826d",
                fontWeight: "600",
                textAlign: "center",
                color: " #f4e8deff",
              }}
            >
              {skillLabel}
            </TableCell>
            <TableCell
              style={{
                border: "2px solid #4a3f35",
                padding: "10px 16px",
                backgroundColor: "#a0826d",
                fontWeight: "600",
                textAlign: "center",
                color: " #f4e8deff",
              }}
            >
              {levelLabel}
            </TableCell>
          </TableRow>
        </TableHeader>

        {data.map((item, i) => (
          <TableRow key={i}>
            <TableCell
              style={{
                border: "2px solid #4a3f35",
                fontWeight: "400",
                color: "#4a3f35",
              }}
            >
              {item.skill}
            </TableCell>
            <TableCell
              style={{
                border: "2px solid #4a3f35",
                fontWeight: "400",
                color: "#4a3f35",
              }}
            >
              {item.level}
            </TableCell>
          </TableRow>
        ))}

        <TableFooter>
          <TableCell
            colSpan={2}
            style={{
              border: "2px solid #4a3f35",
              padding: "10px 16px",
              backgroundColor: "#a0826d",
              fontWeight: "600",
              color: " #f4e8deff",
            }}
          >
            Total: {data.length}
          </TableCell>
        </TableFooter>
      </Table>
    </>
  );

  return (
    <Section>
      <Text
        style={{
          fontSize: "2rem",
          marginBottom: "2rem",
          color: "#3d2f24",
          textAlign: "center",
        }}
      >
        Skills
      </Text>

      <Card
        style={{
          margin: "2rem auto 0",
          padding: "1.5rem 2rem",
          width: "800px",
          backgroundColor: "#fff",
          border: "2px solid #6d5c4a",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        <Text
          size="medium"
          color="#4a3f35"
          style={{ fontWeight: 400, textAlign: "center" }}
        >
          These are the skills I've built as a web developer, combining both
          technical skills with my professional skills to design projects that
          are efficient, user-friendly, and visually engaging.
        </Text>
      </Card>

      <Card
        style={{
          margin: "2rem auto 0",
          padding: "3rem",
          width: "800px",
          backgroundColor: "white",
          height: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
          border: "2px solid #6d5c4a",
        }}
      >
        {selectedTable === "languages" &&
          renderTable("Languages & Frameworks", languagesAndFrameworks)}
        {selectedTable === "tools" && renderTable("Tools", tools, "Tool")}
        {selectedTable === "softSkills" &&
          renderTable("Soft Skills", softSkills, "Skill", "Strength")}

        <PrettyRadioWrapper>
          <RadioButton
            name="skills"
            options={["Languages & Frameworks", "Tools", "Soft Skills"]}
            selected={
              selectedTable === "languages"
                ? "Languages & Frameworks"
                : selectedTable === "tools"
                  ? "Tools"
                  : "Soft Skills"
            }
            onChange={(value) => {
              if (value === "Languages & Frameworks")
                setSelectedTable("languages");
              else if (value === "Tools") setSelectedTable("tools");
              else setSelectedTable("softSkills");
            }}
          />
        </PrettyRadioWrapper>
      </Card>
    </Section>
  );
};

export default Skills;
