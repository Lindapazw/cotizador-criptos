import styled from "@emotion/styled"
import ImagenCripto from './img/imagen-criptos.png'

const Contenedor = styled.div `
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 920px) {
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img `
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1 `
  font-family: 'Lato', sans-serif;
  color: #FFFFFF;
`

function App() {

  return (
    <>
    <Contenedor>
      <Imagen src={ImagenCripto} alt="imagen criptomonedas"/>
      <Heading>Desde app</Heading>
    </Contenedor>
    </>
  )
}

export default App
