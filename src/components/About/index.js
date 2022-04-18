import React from "react";
import img from "../../assets/images/Dan-smile.jpg";
import Container from "react-bootstrap/Container";
import Figure from "react-bootstrap/Figure";

function About() {
  return (
    <main>
      <section>
        <h1 className="about">About me</h1>
        <Container>
          <Figure>
            <Figure.Image width={250} height={250} src={img} />
            <Figure.Caption>
              <p className="fontStyle">
                Hello, My name is Daniel Mendez. I am a real estate agent in the
                state of Connecticut and have been for 2 years. As a real estate
                agent my goal is to find the right house my client is asking for
                and make sure that the transaction goes by smoothly while
                answering any question that they might have.I work another two
                jobs as well. I work as a security guard in the Wethersfield
                Public Library for 12 years and I work at the Cromwell Belden
                Library as library aid for 5 years. While working these jobs
                i've always had this fascination of computers, how fun they are
                to use and what amazing things you could accomplish while
                working with others on different projects, games or social
                media. Not to long ago my father asked me, "If you like
                compuetr's so much why not work in that field" and thats when I
                looked into many jobs involving computers and coding. The one
                job that stood out to me the most is "Software Engineering".
                From there I decided to take a Boot Camp class for coding and to
                take one more step into becoming a Software Engineer!
              </p>
            </Figure.Caption>
          </Figure>
        </Container>
      </section>
    </main>
  );
}

export default About;
