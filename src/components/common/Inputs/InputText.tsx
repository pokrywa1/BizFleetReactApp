import { TextInput, TextInputProps } from '@mantine/core'

type TInputTextProps = {
  name: string
} & TextInputProps
const InputText = ({ ...props }: TInputTextProps) => {
  return (
    <div>
      <TextInput {...props} />
    </div>
  )
}

export default InputText
