import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <main className="container">
      <section>
        <div className="contact">
          <h2>Contact Information</h2>
          <p>soliddan211@gmail.com</p>
          <a
            href="https://www.linkedin.com/in/daniel-mendez-3b846621b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>

          <a
            href="https://github.com/DanProgramsIt"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithubSquare} />
          </a>
        </div>
      </section>
    </main>
  );
}

export default Contact;