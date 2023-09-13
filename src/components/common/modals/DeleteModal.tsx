import { ModalWithTitle, TModalWithTitleProps } from './Modal.tsx'
import { Button, Group, MantineColor } from '@mantine/core'

type TDeleteModalProps = {
  onConfirm: () => Promise<unknown>
  submitButtonText?: string
  cancelButtonText?: string
  submitButtonColor?: MantineColor
  cancelButtonColor?: MantineColor
} & TModalWithTitleProps

const DeleteModal = ({
  onConfirm,
  submitButtonText = 'Zatwierdź',
  cancelButtonText = 'Anuluj',
  submitButtonColor = 'red',
  cancelButtonColor = 'gray',
  ...props
}: TDeleteModalProps) => {
  return (
    <ModalWithTitle {...props}>
      <Group spacing={'xs'} grow>
        <Button variant={'outline'} color={cancelButtonColor} onClick={() => props.onClose()}>
          {cancelButtonText}
        </Button>
        <Button color={submitButtonColor} onClick={onConfirm}>
          {submitButtonText}
        </Button>
      </Group>
    </ModalWithTitle>
  )
}

export default DeleteModal
