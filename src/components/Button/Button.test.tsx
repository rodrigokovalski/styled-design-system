import { render } from '@testing-library/react'
import { Button } from './Button'

describe('Button', () => {
    it('should render Button correctly', () => {
        const { getByText } = render(<Button>Button</Button>)

        expect(getByText('Button')).toBeInTheDocument()
    })
})
