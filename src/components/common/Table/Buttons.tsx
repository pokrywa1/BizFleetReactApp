import { useTableContext } from './Container.tsx'
import { Button } from '../Buttons/Button.tsx'
import { ActionIcon, MantineColor } from '@mantine/core'
import { BsTrash } from 'react-icons/bs'
import { useMutation } from 'react-query'
import ConfirmModal from '../modals/ConfirmModal.tsx'
import { useState } from 'react'
import { IconType } from 'react-icons'
import { TSharedModalProps } from '../modals/Modal.tsx'

type PureButtonProps = {
  name: string
  onClick: () => void
  icon: React.ReactNode
  color?: MantineColor
}
export const _PureButton = ({ name, icon, onClick, color = 'gray' }: PureButtonProps) => {
  const { isMobile } = useTableContext()
  return isMobile ? (
    <Button variant={'outline'} color={color} onClick={onClick} leftIcon={icon}>
      {name}
    </Button>
  ) : (
    <ActionIcon size={'lg'} radius={'md'} variant={'outline'} color={color} onClick={onClick}>
      {icon}
    </ActionIcon>
  )
}

type DeleteButtonProps<TMutationArg> = {
  mobileText?: string
  title?: string
  mutationFn: (args: TMutationArg) => Promise<unknown>
  mutationArgs: TMutationArg
  onSuccess?: () => void
  onError?: () => void
  onCancel?: () => void
  buttonColor?: MantineColor
  buttonIcon?: IconType
  modalProps?: TSharedModalProps
}
const _DeleteButton = <TMutationArg,>({
  onError,
  onSuccess,
  mutationArgs,
  mutationFn,
  mobileText = 'Usuń',
  buttonColor = 'red',
  buttonIcon: Icon = BsTrash,
  modalProps,
  title = 'Czy na pewno chcesz usunąć?',
}: DeleteButtonProps<TMutationArg>) => {
  const [opened, setOpened] = useState(false)

  const openModal = () => setOpened(true)
  const closeModal = () => setOpened(false)

  const _deleteMutation = useMutation(mutationFn, {
    onError: () => {
      onError && onError()
    },
    onSuccess: () => {
      closeModal()
      onSuccess && onSuccess()
    },
  })

  const { isMobile } = useTableContext()
  return (
    <>
      {isMobile ? (
        <Button variant={'outline'} color={buttonColor} onClick={openModal}>
          {mobileText}
        </Button>
      ) : (
        <ActionIcon
          size={'lg'}
          radius={'md'}
          variant={'outline'}
          color={buttonColor}
          onClick={openModal}
        >
          <Icon />
        </ActionIcon>
      )}
      <ConfirmModal
        onConfirm={() => _deleteMutation.mutateAsync(mutationArgs)}
        opened={opened}
        onClose={closeModal}
        title={title}
        {...modalProps}
      />
    </>
  )
}

export default _DeleteButton
