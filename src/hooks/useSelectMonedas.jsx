import styled from "@emotion/styled"

const Labels = styled.label `
  color: #fff;
`

const useSelectMonedas = (label) => {

  const SelectMonedas = () =>  (
    <>
      <Labels>{label}</Labels>
    </>
  )

  return [SelectMonedas]
}

export default useSelectMonedas
