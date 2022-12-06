import { useState, useEffect, useRef } from "react";

import { motion } from "framer-motion";

import styled from "styled-components";
import logoHtml5 from "../../imagens/htmls5.png";
import logoJs from "../../imagens/javascript.png";
import logoCss from "../../imagens/css.png";
import logoTs from "../../imagens/ts.png";
import banner from "../../imagens/BannerSite.png";

const SectionPrincipal = styled.section`
background-color: #0a192f;
`

const DivTitulo = styled.h3`
  background-color: #0a192f;
  font-weight: bolder;
  color: #64ffda;
  font-size: 32px;
  padding: 0px 0px 32px;
  font-family: "Michroma", sans-serif;
`;

const DivMotion = styled.div`
  max-width: 848px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 500px) {
    width: 300px;
    
}

  .inner {
    display: flex;
  }

  .item {
    min-height: 250px;
    min-width: 250px;
    padding: 14px;
  }

  .item img {
    width: 100%;
    height: 80%;
    border-radius: 12px;
    pointer-events: none;
  }

  .carousel {
    cursor: grab;
    overflow: hidden;
  }
`;

const images = [banner, banner, banner, banner, banner, banner, banner, banner];

function Carrossel(props: any) {
  const carousel = useRef(props);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth);
  }, []);

  return (
    <SectionPrincipal id="projetos">
      <DivTitulo>Projetos</DivTitulo>
      <DivMotion>
        <motion.div
          ref={carousel}
          className="carousel"
          whileTap={{ cursor: "grabbing" }}
        >
          <motion.div
            className="inner"
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
          >
            {images.map((image) => (
              <motion.div className="item" key={image}>
                <img src={image} alt="texto alt" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </DivMotion>
    </SectionPrincipal>
  );
}

export default Carrossel;
