import styled from "@emotion/styled"

const Contenedor = styled.div`
    color:#FFFFFF;
    font-family:'Lato', sans-serif;
`

const Precio = styled.p`
    font-size:25px;
        span{
            font-weight:700;
        }
`

const Texto = styled.p`
    font-size:15px;
        span{
            font-weight:700;
        }
`

const Resultado = ({resultado}) => {

    const {PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, LASTUPDATE} = resultado

    return (
        <Contenedor>
            <Precio>El precio es de: <span>{PRICE}</span></Precio>
            <Texto>El precio más alto del dia: <span>{HIGHDAY}</span></Texto>
            <Texto>El precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
            <Texto>Última actualización: <span>{LASTUPDATE}</span></Texto>
        </Contenedor>
    )
}

export default Resultado
