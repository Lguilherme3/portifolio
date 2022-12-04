import banner3 from "../../imagens/banner1.jpg";
import perfilHome from "../../imagens/perfilfotohome.png";
import styled from "styled-components";
// import { TypeAnimation } from "react-type-animation";

const Cabecalho = styled.header`
  height: 300px;
  
  background-color: #0A192F;
  /* background-image: url(${banner3});
  
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 5% 10%; */
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 869px) {
    flex-direction: column;
    height: 450px;
  }
img {
  width: 250px;
}

  p {
    text-align: left;
    width: 280px;
    margin: 0 100px;
    font-size: 32px;

    color: #64FFDA;
    text-shadow: 0.1em 0.1em #0000003d;

    @media screen and (max-width: 869px) {
    font-size: 16px;
    text-align: center;
  }
  }

  
`;

function Header() {
  return (
    <Cabecalho>
      
        <p>
        Bem-vindo ao portfólio de um desenvolvedor Front-End em construção.
        </p>
        {/* <TypeAnimation
          sequence={[
            "Bem-vindo ao portfólio de um desenvolvedor Front-End em construção.",
            1100,
          ]}
          wrapper="p"
          cursor={true}
          repeat={Infinity}
          style={{ fontSize: "2.2em" }}
        /> */}

        <img src={perfilHome} alt="" />
      
    </Cabecalho>
  );
}

export default Header;



// {
//     function typeWriter(elemento: { innerHTML: string; }) {
//         const textoArray = elemento.innerHTML.split('');
//         elemento.innerHTML = '';
//         textoArray.forEach((Letra, i) => {
//             setTimeout(() => elemento.innerHTML += Letra, 75 * i);
//         });
//     }npm st
// }
