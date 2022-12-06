import styled from "styled-components";
import backtToTop from "../../imagens/backtop.png";
import { Link, animateScroll as scroll } from "react-scroll";

const FooterStyle = styled.footer`
  background-color: #0a192ff4;
  color: white;
  padding: 16px;

  display: flex;
  justify-content: space-between;

  gap: 34px;

  p {
    margin: auto;
    display: block;
  }

  a {
    text-decoration: none;
    color: white;
  }

  a:hover {
    color: #64ffda;
  }

  img:hover {
    border-radius: 50%;
    background-color: #64ffda;
    cursor: pointer;
  }
`;

export default function Footer() {
  return (
    <FooterStyle>
      <p>
        Desenvolvido por
        <a href="https://github.com/lguilherme3"> Luiz Guilherme Pereira.</a>
      </p>

      <Link
        activeClass="active"
        to="contato"
        spy={true}
        smooth={true}
        offset={-70}
        duration={500}
      >
        <p>
            <img src={backtToTop} alt="topo" />
        </p>
      </Link>
    </FooterStyle>
  );
}
