import { TextInput, TextInputProps } from '@mantine/core'

type TInputTextProps = {
  name: string
} & TextInputProps
const InputText = ({ ...props }: TInputTextProps) => {
  return (
    <div>
      <TextInput error={'hek'} {...props} />
    </div>
  )
}

export default InputText
