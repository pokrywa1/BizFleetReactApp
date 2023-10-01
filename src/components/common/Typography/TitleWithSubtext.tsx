import { Stack, StackProps, Text } from '@mantine/core'
import Title from './Title.tsx'

type TTitleWithSubtextProps = {
  title: string
  subtext: string
} & StackProps

const TitleWithSubtext = ({ title, subtext, ...props }: TTitleWithSubtextProps) => {
  return (
    <Stack spacing={0} mb={0} {...props}>
      <Title order={3}>{title}</Title>
      <Text fz={15} color={'gray'}>
        {subtext}
      </Text>
    </Stack>
  )
}

export default TitleWithSubtext
