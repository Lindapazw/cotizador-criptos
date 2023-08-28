import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/moneda"
import { useEffect, useState } from "react"

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
    margin-top:30px;

    &:hover {
        background-color: #7a7dfe;
        cursor: pointer;
    }
`

const Formulario = () => {

    const[criptos, setCriptos] = useState

    const [ moneda , SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)

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
        }
        consultarApi();
    },[])

    return (
        <div>
            <SelectMonedas/> {moneda}
            <InputSubmit type="submit" value='Cotizar' />
        </div>
    )
}

export default Formulario
