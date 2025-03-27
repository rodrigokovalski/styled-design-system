import { StyledButton } from './Button.styles'
import { ButtonProps } from './Button.types'

export function Button({ children }: ButtonProps) {
    return <StyledButton>{children}</StyledButton>
}
