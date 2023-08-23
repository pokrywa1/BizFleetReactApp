import { Badge, Card, Divider, Group, Text } from '@mantine/core'
import React from 'react'
import Button from '../../common/Buttons/Button.tsx'
import * as dayjs from 'dayjs'

type UserCurrentReservationCard = {
  model: string
  year: string
  id: string
  startTime: string
  endTime: string
}
const UserCurrentReservationCard = ({
  endTime,
  startTime,
  year,
  model,
  id,
}: UserCurrentReservationCard) => {
  return (
    <Card shadow={'sm'}>
      <Group position="apart" mt="md" mb="xs">
        <Text>{model}</Text>
        <Badge color="gray" variant="light">
          {year}
        </Badge>
      </Group>
      <Divider orientation="horizontal" my={'xs'} />
      <Group position="apart" mt="md" mb="xs">
        <Text color={'dimmed'} size={'xs'}>{`${dayjs(startTime).format('DD.MM.YYYY')} -  ${dayjs(
          endTime,
        ).format('DD.MM.YYYY')}`}</Text>
      </Group>
      <Button fullWidth>Zakończ przejazd</Button>
    </Card>
  )
}

export default UserCurrentReservationCard
