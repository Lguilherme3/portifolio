import perfilHome from "../../imagens/perfilfotohome.png";
import styled from "styled-components";



const Cabecalho = styled.header`
  height: 250px;
  
  background-color: #0A192F;
  color: white;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 869px) {
    flex-direction: column;
    height: 350px;
  }
img {
  width: 250px;
}

  p {
    text-align: left;
    width: 280px;
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
        
        <img src={perfilHome} alt="Img Perfil" />
      
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
