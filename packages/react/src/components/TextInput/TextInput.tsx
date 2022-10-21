import { ComponentProps } from 'react'
import { Container, Input, Prefix } from './TextInput.styles'

export type TextInputProps = ComponentProps<typeof Input> & {
  prefix?: string
}

export const TextInput = ({ prefix, ...props }: TextInputProps) => {
  return (
    <Container>
      {!!prefix && <Prefix>{prefix}</Prefix>}
      <Input {...props} />
    </Container>
  )
}
