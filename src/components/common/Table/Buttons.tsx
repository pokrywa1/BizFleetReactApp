import { useTableContext } from './Container.tsx'
import { Button } from '../Buttons/Button.tsx'
import { ActionIcon, MantineColor } from '@mantine/core'
import { BsTrash } from 'react-icons/bs'
import { useMutation } from 'react-query'

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
  name?: string
  mutationFn: (args: TMutationArg) => Promise<unknown>
  mutationArgs: TMutationArg
  onSuccess?: () => void
  onError?: () => void
  onCancel?: () => void
}
const _DeleteButton = <TMutationArg,>({
  onError,
  onSuccess,
  mutationArgs,
  mutationFn,
  name = 'Usuń',
}: DeleteButtonProps<TMutationArg>) => {
  const _deleteMutation = useMutation(mutationFn, {
    onError: onError,
    onSuccess: onSuccess,
  })
  const _onClick = () => _deleteMutation.mutateAsync(mutationArgs)

  const { isMobile } = useTableContext()
  return isMobile ? (
    <Button variant={'outline'} color={'red'} onClick={_onClick}>
      {name}
    </Button>
  ) : (
    <ActionIcon size={'lg'} radius={'md'} variant={'outline'} color={'red'} onClick={_onClick}>
      <BsTrash />
    </ActionIcon>
  )
}

export default _DeleteButton
