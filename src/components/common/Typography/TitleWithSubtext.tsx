import { Stack, Text } from '@mantine/core'
import Title from './Title.tsx'

type TTitleWithSubtextProps = {
  title: string
  subtext: string
}

const TitleWithSubtext = ({ title, subtext }: TTitleWithSubtextProps) => {
  return (
    <Stack spacing={0} mb={0}>
      <Title order={3}>{title}</Title>
      <Text fz={15} color={'gray'}>
        {subtext}
      </Text>
    </Stack>
  )
}

export default TitleWithSubtext
