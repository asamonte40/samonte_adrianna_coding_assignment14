import React, { useState } from "react";
import styled from "styled-components";
import Text from "../../components/Text";
import Dropdown from "../../components/Dropdown";
import Label from "../../components/Label";
import Img from "../../components/Img";
import Card from "../../components/Card";

const Section = styled.section`
  padding: 6rem 2rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FontSample = styled.p<{ font: string }>`
  font-family: ${(props) => props.font}, monospace;
  margin: 0.5rem 0;
  padding: 0.4rem 0.6rem;
  background: #f7f3ef;
  border-radius: 6px;
  color: #5a4734;
  width: fit-content;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
`;

const DeveloperSetup = () => {
  const [selectedSection, setSelectedSection] =
    useState<string>("VSCode Setup");

  return (
    <Section id="developer-setup">
      <Text
        style={{
          fontSize: "2rem",
          textAlign: "center",
          fontWeight: 700,
          color: "#4a3f35",
        }}
      >
        Developer Setup
      </Text>

      <Card
        style={{
          margin: "2rem auto 0",
          padding: "2.5rem",
          width: "800px",
          backgroundColor: "#f2efe9",
          minHeight: "500px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          boxShadow: "0 8px 20px rgba(51, 38, 3, 0.1)",
          borderRadius: "14px",
          border: "2px solid #6d5c4a",
        }}
      >
        <Label
          text="Choose a setup section:"
          style={{ marginTop: "1rem", color: "#6d5c4a", fontWeight: 800 }}
        />
        <Dropdown
          label=""
          options={["VSCode Setup", "Terminal Setup", "Preferred Editor Font"]}
          disabled={false}
          onChange={setSelectedSection}
          style={{
            marginTop: "0.5rem",
            width: "auto",
            border: "2px solid #6d5c4a",
          }}
        />

        {selectedSection === "VSCode Setup" && (
          <>
            <Text
              size="medium"
              color="#5a4734"
              style={{ margin: "1.5rem 0 1rem 0" }}
            >
              My VSCode Setup
            </Text>

            <Card
              style={{
                margin: "1rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text size="small" color="#5a4734">
                Theme: Alma Sakura
              </Text>
              <Text size="small" color="#5a4734" style={{ fontWeight: 400 }}>
                Japanese styled theme inspired from the flower cheery blossom.
                Based on the color of cheery blossom, asorted pinkish color are
                darkened in lower constrast, blended in a low-profile, relieving
                style. Language highlighting styled designed for Typescipt.
              </Text>
            </Card>

            <Card
              style={{
                margin: "1rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text size="small" color="#5a4734">
                Key Extensions
              </Text>
              <ul
                style={{
                  textAlign: "left",
                  marginTop: "0.5rem",
                  color: "#5a4734",
                }}
              >
                <li>Prettier – Auto format code</li>
                <li>Auto Close Tag – Automatically closes HTML/XML tags</li>
                <li>Code Runner – Run code snippets quickly</li>
                <li>
                  Endwise – Automatically closes blocks like `end` in
                  Ruby/Python
                </li>
                <li>Python – Python language support and debugging</li>
                <li>Live Server – Real-time preview of HTML/CSS changes</li>
              </ul>
            </Card>

            <Img
              src="/vscode.png"
              alt="VSCode setup"
              style={{
                width: "100%",
                maxWidth: "700px",
                borderRadius: "12px",
                marginTop: "0.5rem",
              }}
            />
          </>
        )}

        {selectedSection === "Terminal Setup" && (
          <>
            <Text
              size="medium"
              color="#5a4734"
              style={{ margin: "1.5rem 0 1rem 0", textAlign: "center" }}
            >
              Terminal Setup
            </Text>

            <Card
              style={{
                margin: "0.5rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text size="small" color="#6d5c4a" style={{ fontWeight: 800 }}>
                Windows Terminal
              </Text>
              <Text size="small" color="#5a4734" style={{ fontWeight: 400 }}>
                The default modern terminal for Windows with tabs,
                customization, and multiple shells.
              </Text>
              <Text
                size="small"
                color="#6d5c4a"
                style={{ marginTop: "0.5rem", fontWeight: 600 }}
              >
                Common commands: <code>dir</code>, <code>cd</code>,{" "}
                <code>git status</code>
              </Text>
            </Card>

            <Card
              style={{
                margin: "0.5rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text size="small" color="#6d5c4a" style={{ fontWeight: 800 }}>
                Git Bash
              </Text>
              <Text size="small" color="#5a4734" style={{ fontWeight: 400 }}>
                A Bash shell for Windows with Git commands pre-installed. Great
                for Linux-like workflow.
              </Text>
              <Text
                size="small"
                color="#6d5c4a"
                style={{ marginTop: "0.5rem", fontWeight: 600 }}
              >
                Common commands: <code>git clone</code>, <code>git commit</code>
                , <code>ls -la</code>
              </Text>
            </Card>

            <Card
              style={{
                margin: "0.5rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text size="small" color="#6d5c4a" style={{ fontWeight: 800 }}>
                PowerShell
              </Text>
              <Text size="small" color="#5a4734" style={{ fontWeight: 400 }}>
                Powerful Windows shell for scripting, automation, and system
                management.
              </Text>
              <Text
                size="small"
                color="#6d5c4a"
                style={{ marginTop: "0.5rem", fontWeight: 600 }}
              >
                Common commands: <code>Get-Process</code>,{" "}
                <code>Set-Location</code>, <code>Get-ChildItem</code>
              </Text>
            </Card>
          </>
        )}

        {selectedSection === "Preferred Editor Font" && (
          <>
            <Text
              size="medium"
              color="#5a4734"
              style={{ margin: "1.5rem 0 1rem 0" }}
            >
              Preferred Fonts
            </Text>

            <Card
              style={{
                margin: "0.5rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text color="#5a4734">VS Code Default Font</Text>
              <FontSample font="Consolas" style={{ fontWeight: 700 }}>
                Consolas - Hello World, this is a test!
              </FontSample>
            </Card>

            <Card
              style={{
                margin: "0.5rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text color="#5a4734">Monaco</Text>
              <FontSample font="Monaco">
                Monaco - The quick brown fox jumps over the lazy dog.
              </FontSample>
            </Card>

            <Card
              style={{
                margin: "0.5rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text color="#5a4734">Courier New</Text>
              <FontSample font="Courier New" style={{ fontWeight: 700 }}>
                Courier New - const hello = "world";
              </FontSample>
            </Card>

            <Card
              style={{
                margin: "0.5rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text color="#5a4734">Cascadia Code</Text>
              <FontSample font="Cascadia Code">
                Cascadia Code - The five boxing wizards jump quickly
              </FontSample>
            </Card>

            <Card
              style={{
                margin: "0.5rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text color="#5a4734">Menlo</Text>
              <FontSample font="Menlo" style={{ fontWeight: 700 }}>
                Menlo - ABCDEFGHIJKLMNOPQRSTUVWXYZ
              </FontSample>
            </Card>

            <Card
              style={{
                margin: "0.5rem 0",
                padding: "1rem",
                backgroundColor: "white",
              }}
            >
              <Text color="#5a4734">Lucida Console</Text>
              <FontSample font="Lucida Console" style={{ fontWeight: 700 }}>
                Lucida Console - x = 2x + 5
              </FontSample>
            </Card>
          </>
        )}
      </Card>
    </Section>
  );
};

export default DeveloperSetup;
