import styled from "@emotion/styled";

const Alerta = styled.div `
    background-color:#B7322C;
    color: #FFFFFF;
    padding: 15px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight:700;
    text-align: center;
    margin-bottom: 15px;
    border-radius:5px;
`

const Error = ({ children }) => {
    return (
            <Alerta> {children} </Alerta>
    )
}

export default Error
