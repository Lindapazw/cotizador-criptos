import styled from "@emotion/styled"
import useSelectMonedas from "../hooks/useSelectMonedas"
import { monedas } from "../data/moneda"

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

    const [ moneda , SelectMonedas] = useSelectMonedas('Elige tu moneda', monedas)

    return (
        <div>
            <SelectMonedas/> {moneda}
            <InputSubmit type="submit" value='Cotizar' />
        </div>
    )
}

export default Formulario
