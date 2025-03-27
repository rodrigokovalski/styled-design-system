import styled from 'styled-components'
import { ButtonProps } from './Button.types'

export const StyledButton = styled.button<ButtonProps>`
    background-color: ${(props) => (props.isLoading ? `#000` : `white`)};
`
