import github from "../../imagens/github-logo.png";
import instagram from "../../imagens/instagram-logo.png";
import linkedin from "../../imagens/linkedin-logo.png";
import whatsapp from "../../imagens/whatsapp-logo.png";

import styled from "styled-components";

const SectionContacts = styled.section`
  
  background-color: #0a192ff4;
  padding: 5px;
  height: 40%;
  color: white;
  font-size: 20px;

  a:hover {
    color: #64FFDA;
    cursor: pointer;
    -webkit-transform: scale(1.5);
    transform: scale(1.3);
    -webkit-filter: drop-shadow(7px 5px 5px rgba(0,0,0,.5));
    filter: drop-shadow(7px 5px 5px #000000);
    transition: all 1s;
  }
`;

const SocialMidias = styled.div`
padding: 8px;
display: flex;
justify-content: space-evenly;
align-items: center;
`
export default function Contacts() {
  return (
    <SectionContacts id="contato">
      <SocialMidias>
        <h3>Conecte-se comigo</h3>

        <a 
        href="https://www.instagram.com/luuizguiilherme/" 
        target="_blank">
            <img 
            src={instagram} 
            alt="Icon Instagram" /></a>
        <a 
        href="https://github.com/lguilherme3"
        target="_blank"
        >
            <img src={github} 
            alt="Icon Github" /></a>
        <a 
        href="https://www.linkedin.com/in/luuizguilherme/"
        target="_blank"
        >
            <img 
            src={linkedin} 
            alt="Icon Github" /></a>
        <a
          href="https://api.whatsapp.com/send?phone=5516997202963"
          target="_blank"
        >
          <img 
          src={whatsapp} 
          alt="Icone Whatsapp" />
        </a>
      </SocialMidias>
    </SectionContacts>
  );
}
