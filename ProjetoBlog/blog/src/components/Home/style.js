import styled from 'styled-components'

export const Title = styled.h1.attrs(props => ({
    type: "text",
    size: props.size || "1em",
}))`
color: red;
`

export const Input = styled.input.attrs(props => ({
    type: "number"
}))`
color: green
`