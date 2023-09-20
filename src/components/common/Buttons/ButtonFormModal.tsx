import { Group, MantineColor } from '@mantine/core'
import { Button } from './Button.tsx'

export type ButtonFormModalProps = {
  onClose: () => void
  submitButtonText?: string
  cancelButtonText?: string
  submitButtonColor?: MantineColor
  cancelButtonColor?: MantineColor
}

export const ButtonFormModal = ({
  onClose,
  submitButtonColor = 'blue',
  submitButtonText = 'Dodaj',
  cancelButtonText = 'Anuluj',
  cancelButtonColor = 'gray',
}: ButtonFormModalProps) => {
  return (
    <Group spacing={'xs'} grow>
      <Button onClick={onClose} variant={'outline'} color={cancelButtonColor}>
        {cancelButtonText}
      </Button>
      <Button type={'submit'} color={submitButtonColor}>
        {submitButtonText}
      </Button>
    </Group>
  )
}
