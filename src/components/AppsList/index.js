import React, { useState } from "react";
import Portfolio from "../Portfolio/index";
import Container from "react-bootstrap/Container";

function AppsList() {
  const [apps] = useState([
    {
      name: "Populate-Music",
      image: "Populate-Music.jpg",
      githubLink: "https://github.com/jlcunningham2101/Populate-Music",
      deploy: "https://jlcunningham2101.github.io/Populate-Music/",
    },
    {
      name: "Mountain-Lake-Bed-and-Breakfast",
      image: "Mountain-Lake-Bed-and-Breakfast.png",
      githubLink: "https://github.com/tooqk4u/Mountain-Lake-Bed-and-Breakfast",
      deploy: "https://mountainlake.herokuapp.com/",
    },
    {
      name: "Notes-to-remember",
      image: "Notes-to-remember.jpg",
      githubLink: "https://github.com/DanProgramsIt/Notes-to-remember",
      deploy: "https://notestoremember.herokuapp.com/",
    },
    {
      name: "Budget-Track",
      image: "Budget-Track.jpg",
      githubLink: "https://github.com/DanProgramsIt/Budget-Track",
      deploy: "https://budget-tracked.herokuapp.com/",
    },
    {
      name: "Coast-2-Coast",
      image: "Main.jpg",
      githubLink: "https://github.com/reggietenk/Coast-2-Coast-",
      deploy: "https://coast-2-coast.herokuapp.com/",
    },
  ]);

  return (
    <main>
      <h1>Portfolio</h1>
      <Container>
        <div className="grid">
          {apps.map((project) => (
            <Portfolio {...project} key={project.name} />
          ))}
        </div>
      </Container>
    </main>
  );
}

export default AppsList;