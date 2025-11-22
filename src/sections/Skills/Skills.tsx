import React from "react";
import Text from "../../components/Text";
import Table from "../../components/Table";
import TableHeader from "../../components/Table/TableHeader";
import TableRow from "../../components/Table/TableRow";
import TableCell from "../../components/Table/TableCell";
import TableFooter from "../../components/Table/TableFooter";

const Skills = () => {
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
    { skill: "Postman", level: "Proficient" },
    { skill: "XAMPP", level: "Proficient" },
  ];

  const softSkills = [
    { skill: "Communication", level: "Strong" },
    { skill: "Time Management", level: "Strong" },
    { skill: "Problem Solving", level: "Strong" },
    { skill: "Teamwork", level: "Strong" },
    { skill: "Attention to Detail", level: "Strong" },
  ];

  return (
    <div style={{ maxWidth: "900px", margin: "3rem auto", padding: "1rem" }}>
      <Text size="large" color="#3d2f24">
        Skills
      </Text>

      <Text size="medium" color="#4a3f35" style={{ marginTop: "0.75rem" }}>
        A combination of technical and professional skills that support my work
        in web development.
      </Text>

      {/* Languages / Frameworks */}
      <Text size="large" color="#6d5c4a" style={{ marginTop: "2rem" }}>
        Languages & Frameworks
      </Text>

      <Table>
        <TableHeader>
          <TableCell>Skill</TableCell>
          <TableCell>Level</TableCell>
        </TableHeader>

        {languagesAndFrameworks.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{item.skill}</TableCell>
            <TableCell>{item.level}</TableCell>
          </TableRow>
        ))}

        <TableFooter>
          <TableCell colSpan={2}>
            Total: {languagesAndFrameworks.length} skills
          </TableCell>
        </TableFooter>
      </Table>

      {/* Tools */}
      <Text size="large" color="#6d5c4a" style={{ marginTop: "2rem" }}>
        Tools
      </Text>

      <Table>
        <TableHeader>
          <TableCell>Tool</TableCell>
          <TableCell>Level</TableCell>
        </TableHeader>

        {tools.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{item.skill}</TableCell>
            <TableCell>{item.level}</TableCell>
          </TableRow>
        ))}

        <TableFooter>
          <TableCell colSpan={2}>Total: {tools.length} tools</TableCell>
        </TableFooter>
      </Table>

      {/* Soft Skills */}
      <Text size="large" color="#6d5c4a" style={{ marginTop: "2rem" }}>
        Soft Skills
      </Text>

      <Table>
        <TableHeader>
          <TableCell>Skill</TableCell>
          <TableCell>Strength</TableCell>
        </TableHeader>

        {softSkills.map((item, i) => (
          <TableRow key={i}>
            <TableCell>{item.skill}</TableCell>
            <TableCell>{item.level}</TableCell>
          </TableRow>
        ))}

        <TableFooter>
          <TableCell colSpan={2}>Total: {softSkills.length} soft skills</TableCell>
        </TableFooter>
      </Table>
    </div>
  );
};

export default Skills;