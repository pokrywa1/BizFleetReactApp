import { Stack, StackProps, Text, useMantineTheme } from '@mantine/core'
import Title from './Title.tsx'

type TTitleWithSubtextProps = {
  title: string
  subtext: string
} & StackProps

const TitleWithSubtext = ({ title, subtext, ...props }: TTitleWithSubtextProps) => {
  const theme = useMantineTheme()
  return (
    <Stack spacing={0} mb={0} {...props}>
      <Title order={3}>{title}</Title>
      <Text fz={15} color={theme.colorScheme === 'dark' ? 'gray.5' : 'gray'}>
        {subtext}
      </Text>
    </Stack>
  )
}

export default TitleWithSubtext
