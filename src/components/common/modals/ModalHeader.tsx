import { ActionIcon, Group } from '@mantine/core'
import TitleWithSubtext from '../Typography/TitleWithSubtext.tsx'
import { AiOutlineClose } from 'react-icons/ai'

type TModalHeaderProps = {
  onClose: () => void
  title: string
  subtext?: string
}

const ModalHeader = ({ subtext, onClose, title }: TModalHeaderProps) => {
  const closeHandle = () => {
    onClose && onClose()
  }

  return (
    <Group align={'start'} position={'apart'} noWrap mb={10}>
      <TitleWithSubtext title={title} subtext={subtext ? subtext : ''} />
      <ActionIcon onClick={closeHandle}>
        <AiOutlineClose />
      </ActionIcon>
    </Group>
  )
}

export default ModalHeader
