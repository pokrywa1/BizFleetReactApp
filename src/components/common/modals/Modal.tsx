import { ModalProps } from '@mantine/core'
import { Modal as MantineModal } from '@mantine/core'
import ModalHeader from './ModalHeader.tsx'

type TModalProps = ModalProps

export const Modal = ({ children, ...props }: TModalProps) => {
  return (
    <MantineModal radius={5} centered withCloseButton={false} {...props}>
      {children}
    </MantineModal>
  )
}

export type TModalWithTitleProps = {
  opened: boolean
  onClose: () => void
  title: string
  subtext?: string
  children?: React.ReactNode
  mantineProps?: Omit<ModalProps, 'onClose' | 'opened'>
}
export const ModalWithTitle = ({
  opened,
  onClose,
  subtext,
  title,
  children,
  mantineProps,
}: TModalWithTitleProps) => {
  return (
    <Modal opened={opened} onClose={onClose} {...mantineProps}>
      <ModalHeader onClose={onClose} title={title ? title : ''} subtext={subtext} />
      {children}
    </Modal>
  )
}
