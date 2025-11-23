import React, { useState } from "react";
import styled from "styled-components";
import Card from "../../components/Card";
import Text from "../../components/Text";
import Button from "../../components/Button";
import Dropdown from "../../components/Dropdown";

const Section = styled.section`
  padding: 6rem 2rem 4rem; /* extra top padding to avoid navbar overlap */
  background: #f7f2ed;
`;

const Heading = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: #3d2f24;
  text-align: center;
`;

const CardWrapper = styled(Card)`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
`;

const DropdownWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Resources = () => {
  const RESOURCES = [
    { name: "React Documentation", link: "https://react.dev/" },
    { name: "MDN Web Docs", link: "https://developer.mozilla.org/" },
    { name: "CSS Tricks", link: "https://css-tricks.com/" },
    { name: "JavaScript Info", link: "https://javascript.info/" },
    { name: "Stack Overflow", link: "https://stackoverflow.com/" },
    { name: "Git & GitHub", link: "https://github.com/" },
  ];

  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  return (
    <Section id="resources">
      <Heading>Resources</Heading>

      <CardWrapper>
        <Text size="medium" color="#4a3f35" style={{ marginBottom: "1rem" }}>
          Select a resource from the dropdown and click "Go" to visit the site.
        </Text>

        <DropdownWrapper>
          <Dropdown
            label="Choose a resource:"
            options={RESOURCES.map((r) => r.name)}
            disabled={false}
            onChange={(value) => {
              const index = RESOURCES.findIndex((r) => r.name === value);
              setSelectedIndex(index);
            }}
          />

          <Button
            label="Go"
            onClick={() => {
              if (selectedIndex !== null) {
                window.open(RESOURCES[selectedIndex].link, "_blank");
              }
            }}
            style={{
              background: "#a0826d",
              color: "white",
              padding: "8px 20px",
              borderRadius: "6px",
            }}
          />
        </DropdownWrapper>
      </CardWrapper>
    </Section>
  );
};

export default Resources;
