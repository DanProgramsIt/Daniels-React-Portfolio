import React from "react";
import Skills from "../work-skills/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Resume() {
  const other = [
    "Git",
    "GitHub",
    "Heroku",
    "Microsoft Word",
    "Discord",
    "slack",
    "Screencastify",
  ];

  const front = [
    "HTML 5",
    "CSS",
    "React",
    "jQuery",
    "Jest",
    "Handlebars",
    "Javascript",
    "Bootstrap",
    "Responsive Design",
    "RESTful API",
  ];

  const back = [
    "MySQL",
    "NoMySQl",
    "MongoDB",
    "Mongoose",
    "Node.js",
    "Express.js",
    "Sequelize ORM",
    "APIs",
    "JSON",
  ];

  return (
    <main>
      <div className="resume">
        <h2>
          See my Resume{" "}
          <a
            href="https://docs.google.com/document/d/17TjGZH57ydeVa1fFVp1nfh7XpTRQX3BNgZFIKiDx3CQ/edit?usp=sharing"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FontAwesomeIcon icon={faFile} />
          </a>
        </h2>
        <Row>
          <Col sm>
            <h3>My Front-end Skills</h3>
            <ul className="elemtSkill">
              {front.map((fbend) => (
                <Skills fbend={fbend} key={fbend} />
              ))}
            </ul>
          </Col>
          <Col sm>
            <h3>My Back-end Skills</h3>
            <ul>
              {back.map((fbend) => (
                <Skills fbend={fbend} key={fbend} />
              ))}
            </ul>
          </Col>
          <Col sm>
            <h3>Others Skills</h3>
            <ul>
              {other.map((fbend) => (
                <Skills fbend={fbend} key={fbend} />
              ))}
            </ul>
          </Col>
        </Row>
      </div>
    </main>
  );
}

export default Resume;
