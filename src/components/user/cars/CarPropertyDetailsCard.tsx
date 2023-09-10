import { Card, Group, Stack, Text, ThemeIcon } from '@mantine/core'
import { AiFillCalendar } from 'react-icons/ai'

type CarPropertyDetailsCardProps = {
  name: string
  value: string
}

export const CarPropertyDetailsCard = ({ name, value }: CarPropertyDetailsCardProps) => {
  return (
    <Card withBorder>
      <Group noWrap>
        <ThemeIcon size={'lg'} variant="light">
          <AiFillCalendar />
        </ThemeIcon>

        <Stack spacing={'none'}>
          <Text color={'gray'} fz={'sm'} fw={500}>
            {name}
          </Text>
          <Text>{value}</Text>
        </Stack>
      </Group>
    </Card>
  )
}
