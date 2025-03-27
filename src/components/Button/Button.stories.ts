import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../Button'
import { ButtonProps } from './Button.types'

const meta = {
    title: 'Example/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: { control: 'color' },
    },
} satisfies Meta<ButtonProps>

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Button',
    },
}

export const Secondary: Story = {
    args: {
        children: 'Button',
    },
}
