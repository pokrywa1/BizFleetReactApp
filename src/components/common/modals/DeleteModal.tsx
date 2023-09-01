import { ModalWithTitle, TModalWithTitleProps } from './Modal.tsx'
import { Button, Group } from '@mantine/core'

type TDeleteModalProps = {
  onConfirm: () => Promise<unknown>
} & TModalWithTitleProps

const DeleteModal = ({ onConfirm, ...props }: TDeleteModalProps) => {
  return (
    <ModalWithTitle {...props}>
      <Group spacing={'xs'} grow>
        <Button variant={'outline'} color={'gray'} onClick={() => props.onClose()}>
          Anuluj
        </Button>
        <Button color={'red'} onClick={onConfirm}>
          Usuń
        </Button>
      </Group>
    </ModalWithTitle>
  )
}

export default DeleteModal
