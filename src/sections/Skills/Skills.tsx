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

const Container = styled.div`
  max-width: 1200px;
  margin: 3rem auto;
  padding: 1rem;
  text-align: center;
`;

const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;
`;

const Skills = () => {
  const [selectedTable, setSelectedTable] = useState("languages");

  const languagesAndFrameworks = [
    { skill: "HTML5", level: "Advanced" },
    { skill: "CSS3 / SCSS", level: "Advanced" },
    { skill: "JavaScript (ES6+)", level: "Intermediate" },
    { skill: "TypeScript", level: "Intermediate" },
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
    { skill: "XAMPP", level: "Proficient" },
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
            <TableCell>{skillLabel}</TableCell>
            <TableCell>{levelLabel}</TableCell>
          </TableRow>
        </TableHeader>

        {data.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{item.skill}</TableCell>
            <TableCell>{item.level}</TableCell>
          </TableRow>
        ))}

        <TableFooter>
          <TableCell colSpan={2}>Total: {data.length}</TableCell>
        </TableFooter>
      </Table>
    </>
  );

  return (
    <Container>
      <Text size="large" color="#3d2f24">
        Skills
      </Text>

      <Text size="medium" color="#4a3f35" style={{ marginTop: "0.75rem" }}>
        A combination of technical and professional skills that support my work
        in web development.
      </Text>

      {/* Card containing the selected table */}
      <Card
        style={{
          margin: "2rem auto 0",
          padding: "3rem",
          width: "1000px",
          backgroundColor: "white",

          // FIX: make card always same size
          minHeight: "420px",

          // Optional: center content inside the card
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        {selectedTable === "languages" &&
          renderTable("Languages & Frameworks", languagesAndFrameworks)}
        {selectedTable === "tools" && renderTable("Tools", tools, "Tool")}
        {selectedTable === "softSkills" &&
          renderTable("Soft Skills", softSkills, "Skill", "Strength")}

        {/* Radio buttons to switch tables */}
        <RadioGroup>
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
        </RadioGroup>
      </Card>
    </Container>
  );
};

export default Skills;
