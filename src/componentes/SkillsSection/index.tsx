import styled from "styled-components";
import logoHtml5 from "../../imagens/htmls5.png";
import logoJs from "../../imagens/javascript.png";
import logoReact from "../../imagens/react.png";
import logoCss from "../../imagens/css.png";
import logoTs from "../../imagens/ts.png";
import logoPhp from "../../imagens/php.png";

const Section = styled.section`
  background-color: #0a192f;
  padding-bottom: 36px;
  text-align: center;
  color: white;
  display: row;

 

  p {
    margin: 8px 0;
  }

  h2,
  h3 {
    font-weight: bolder;
    padding-top: 16px;
  }

  img {
    width: 120px;
    padding: 16px;
    cursor: pointer;
    transition: all 0.5s;
  }

  img:hover {
    border-radius: 50%;
    -webkit-filter: drop-shadow(7px 7px 1px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(7px 7px 1px #1c1c1c39);
    -webkit-transform: rotateZ(-360deg) scale(1.5);
    transform: rotateZ(-360deg) scale(1.2);
  }
`;
const DivPrincipal = styled.div`
  display: flex;
  justify-content: space-evenly;

`;

const TitleSkills = styled.h2`
  padding: 16px 0;
  font-size: 32px;
  color: #64ffda;
`;

const ColorStrong = styled.strong`
  color: #64ffda;
`;

const DivSkills = styled.div``;

export default function SkillsSection() {
  return (
    <Section id="skills">
      <TitleSkills>Skills</TitleSkills>
      <DivPrincipal>
        <div>
          <DivSkills>
            <h3>HTML5</h3>
            <p>
              Nível: <ColorStrong>Intermediário</ColorStrong>
            </p>
          </DivSkills>
          <a
            href="https://www.w3.org/standards/webdesign/htmlcss"
            target="_blank"
          >
            <img src={logoHtml5} alt="logoHtml5" />
          </a>

          <DivSkills>
            <h3>CSS</h3>
            <p>
              Nível: <ColorStrong>Intermediário</ColorStrong>
            </p>
          </DivSkills>
          <a
            href="https://www.w3.org/standards/webdesign/htmlcss"
            target="_blank"
          >
            <img src={logoCss} alt="logo CSS" />
          </a>

          <DivSkills>
            <h3>JavaScript</h3>
            <p>
              Nível: <ColorStrong>Intermediário</ColorStrong>
            </p>
          </DivSkills>
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Web/JavaScript"
            target="_blank"
          >
            <img src={logoJs} alt="logo Javascript" />
          </a>
        </div>

        <div>
          <DivSkills className="pReact">
            <h3>React</h3>
            <p>
              Nível: <ColorStrong>Iniciante</ColorStrong>{" "}
            </p>
          </DivSkills>
          <a href="https://pt-br.reactjs.org/" target="_blank">
            <img src={logoReact} alt="logo React" />
          </a>

          <DivSkills>
            <h3>TypeScript</h3>
            <p>
              Nível: <ColorStrong>Iniciante</ColorStrong>
            </p>
          </DivSkills>
          <a href="https://www.typescriptlang.org/" target="_blank">
            <img src={logoTs} alt="Logo Typescript" />
          </a>

          <DivSkills className="pReact">
            <h3>PHP</h3>
            <p>
              Nível: <ColorStrong>Iniciante</ColorStrong>{" "}
            </p>
          </DivSkills>
          <a href="https://www.php.net/" target="_blank">
            <img src={logoPhp} alt="logo php" />
          </a>
        </div>
      </DivPrincipal>
    </Section>
  );
}
