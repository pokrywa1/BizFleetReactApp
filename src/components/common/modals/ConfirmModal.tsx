import { ModalWithTitle, TModalWithTitleProps, TSharedModalProps } from './Modal.tsx'
import { Button, Group } from '@mantine/core'

export type TDeleteModalProps = {
  onConfirm: () => Promise<unknown>
} & TModalWithTitleProps &
  TSharedModalProps

const ConfirmModal = ({
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

export default ConfirmModal
