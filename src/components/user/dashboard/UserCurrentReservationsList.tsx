import { TReservation } from '../../../app/api/user/reservations/getReservations.ts'
import UserCurrentReservationCard from './UserCurrentReservationCard.tsx'
import { SimpleGrid, Title } from '@mantine/core'

type UserCurrentReservationsList = {
  reservations: TReservation[]
}
const UserCurrentReservationsList = ({ reservations }: UserCurrentReservationsList) => {
  return (
    <>
      <Title color={'dark'} order={2}>
        Aktualne wypożyczenie
      </Title>
      <SimpleGrid
        mt={'md'}
        cols={4}
        spacing="lg"
        breakpoints={[
          { maxWidth: '62rem', cols: 3, spacing: 'md' },
          { maxWidth: '48rem', cols: 2, spacing: 'sm' },
          { maxWidth: '36rem', cols: 1, spacing: 'sm' },
        ]}
      >
        {reservations.map((item) => (
          <UserCurrentReservationCard
            key={item.car.id}
            id={item.car.id}
            endTime={item.endTime}
            model={item.car.model}
            startTime={item.startTime}
            year={item.car.year}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

export default UserCurrentReservationsList
