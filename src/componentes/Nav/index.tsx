import styled from "styled-components";
import { Link, animateScroll as scroll } from "react-scroll";
const navOpcoes = ["Sobre mim", "Skills", "Contato", "Projetos"];

const Section = styled.section`
  background-color: #0a192ff4;
  display: flex;
  justify-content: center;
`;

const LinkList = styled.ul`
  padding: 16px;
  list-style: none;

  display: flex;
  gap: 64px;

  p {
    color: white;
    text-decoration: none;
  }
  p:hover {
    color: #64ffda;
    cursor: pointer;
  }
  @media screen and (max-width: 869px) {
    display: flex;
    gap: 24px;
    font-size: 12px;
  }
`;

export default function Nav() {
  return (
    <Section>
      <LinkList>
        <li>
          <Link
           
            activeClass="active"
            to="sobreMin"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p>Sobre mim</p>
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="skills"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p>Skills</p>
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="contato"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p>Contato</p>
          </Link>
        </li>

        <li>
          <Link
            activeClass="active"
            to="projetos"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <p>Projetos</p>
          </Link>
        </li>
      </LinkList>
   </Section>
  );
}
