import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/moneda"
import { useEffect, useState } from "react"
import Error from "./Error"

const InputSubmit = styled.input `
    background-color: #9497ff;
    border: none;
    width: 100%;
    padding: 10px;
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s;
    margin-top:20px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = () => {

    const[criptos, setCriptos] = useState([])
    const[error, setError] = useState(false)

    const [ moneda , SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)
    const [ criptomoneda , SelectCriptomoneda] = useSelectMonedas('Elige tu Criptomoneda', criptos)

    const handleSubmit = e => {
        e.preventDefault();
        
        if([moneda, criptomoneda].includes('')) {
            console.log('error');
            setError(true);
            return
        }
    }

    useEffect(() => {
        const consultarApi = async()  =>{
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const ArrayCriptos = resultado.Data.map( cripto => {

                const objeto = {
                    id: cripto.CoinInfo.Name ,
                    nombre: cripto.CoinInfo.FullName,
                }
                return objeto
            })
            setCriptos(ArrayCriptos)
        }
        consultarApi();
    },[])

    return (
        <>
        {error && <Error>Todos los elementos son obligatorios</Error>}
        <form onSubmit={handleSubmit}>
            <SelectMonedas/>
            <SelectCriptomoneda/>
            <InputSubmit type="submit" value='Cotizar' />
        </form>
        </>
    )
}

export default Formulario
