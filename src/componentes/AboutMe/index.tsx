import styled from "styled-components";
import github from "../../imagens/github-logo.png";
import facebook from "../../imagens/facebook-logo.png";
import instagram from "../../imagens/instagram-logo.png";
import linkedin from "../../imagens/linkedin-logo.png";
import whatsapp from "../../imagens/whatsapp-logo.png";

const AboutMeSection = styled.section`
  background-color: #0a192f;
  width: 100%;
  padding: 32px 0;
  h3 {
    font-weight: bolder;
    color: #64ffda;
    font-size: 32px;
    padding-bottom: 32px;
    font-family: 'Michroma', sans-serif;
  }

  div {
    display: flex;
    gap: 150px;
    justify-content: center;

    @media screen and (max-width: 850px) {
    gap: 30px;
  }
  }

  p {
    color: white;
    width: 300px;
    text-align: justify;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.5px;

    @media screen and (max-width: 320px) {
      font-size: 12px;
}
  }
`;

const ConteudoPrincipal = styled.div`
  display: flex;
  align-items: center;

  @media screen and (max-width: 850px) {
    
    flex-direction: column;
    
  }
`;

const FotoGithub = styled.a`
  img {
    height: 200px;
    border-radius: 50%;
    padding: 6px;
    border: solid 1px #64ffda;
    transition: all 1s;
  }

  img:hover {
    background-color: #64ffda;
    cursor: pointer;

    -webkit-transform: scale(1.5);
    transform: scale(1.1);
    -webkit-filter: drop-shadow(15px 10px 5px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(15px 10px 5px #000000);
  }
`;
const SectionContacts = styled.section`
  
  

  a:hover {
    color: #64ffda;
    cursor: pointer;
    -webkit-transform: scale(1.5);
    transform: scale(1.3);
    -webkit-filter: drop-shadow(5px 2px 2px rgba(0, 0, 0, 0.5));
    filter: drop-shadow(5px 2px 2px #000000);
    transition: all 1s;
  }
`;

const SocialMidias = styled.div`
  #contato {
    gap: 16px;
    display: flex;
    flex-direction: column;
    justify-content: start;

    @media screen and (max-width: 850px) {
    flex-direction: row;
  }
  }

  
`;

export default function AboutMe() {
  return (
    <AboutMeSection id="sobreMin">
      <h3>Sobre mim</h3>
      <div>
        
        <ConteudoPrincipal>
        <SocialMidias>
            <SectionContacts id="contato">
              <a
                href="https://www.instagram.com/luuizguiilherme/"
                target="_blank"
              >
                <img src={instagram} alt="Icon Instagram" />
              </a>
              <a href="https://github.com/lguilherme3" target="_blank">
                <img src={github} alt="Icon Github" />
              </a>
              <a
                href="https://www.linkedin.com/in/luuizguilherme/"
                target="_blank"
              >
                <img src={linkedin} alt="Icon Github" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5516997202963"
                target="_blank"
              >
                <img src={whatsapp} alt="Icone Whatsapp" />
              </a>
            </SectionContacts>
          </SocialMidias>
          <FotoGithub href="https://github.com/lguilherme3" target="_blank">
            <img
              src="https://github.com/lguilherme3.png"
              alt="Foto Guilherme"
            />
          </FotoGithub>
          <p>
            Olá, meu nome é Luiz Guilherme (mas, pode me chamar de Gui) Tenho 30
            anos, estou cursando Análise e Desenvolvimento de Sistemas e sou um
            desenvolvedor front-end em processo de construção. Aqui está o meu
            primeiro portfólio, o qual eu me dediquei muito. Durante a minha
            trajetória (um pouco longa, diga-se de passagem) tive fortes
            influências da tecnologia em eSport, por isso, estou me
            especializando em programação. Mais do que uma transição de
            carreira, ser desenvolvedor se tornou o meu propósito.
          </p>
          
        </ConteudoPrincipal>
      </div>
    </AboutMeSection>
  );
}
