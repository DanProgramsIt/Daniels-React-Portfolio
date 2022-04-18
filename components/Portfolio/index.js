import React from "react";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Row from "react-bootstrap/Row";

function Portfolio(props) {
  return (
    <Row>
      <div className="col s12 m4 Project-meta ">
        <div className="card ">
          <h3 className="text-portfolio">{props.name}</h3>
          <a href={props.deploy} target="blank">
            <img
              className="images"
              src={require(`../../assets/images/${props.image}`)}
              alt={props.name}
            />
          </a>
          <div className="Project-meta">
            <p>{props.technologies}</p>
            <a
              href={props.githubLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon color="#4d4d4d" icon={faGithubSquare} />
            </a>
          </div>
        </div>
      </div>
    </Row>
  );
}

export default Portfolio;
