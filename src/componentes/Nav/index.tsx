import styled from "styled-components";

const navOpcoes = ['Sobre mim', 'Skills', 'Contato', 'Projetos']

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

  a {
    color: white;
    text-decoration: none;
  }
  a:hover {
    color: #64ffda;
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
          <a href="#sobreMin">Sobre mim</a>
        </li>
        <li>
          <a href="#skills">Skills</a>
        </li>
        <li>
          <a href="#contato">Contato</a>
        </li>
        <li>
          <a href="#projetos">Projetos</a>
        </li>
      </LinkList>
    </Section>
  );
}
