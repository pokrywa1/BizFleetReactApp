import { TReservation } from '../../../app/api/user/reservations/getReservations.ts'
import UserCurrentReservationCard from './UserCurrentReservationCard.tsx'
import { SimpleGrid } from '@mantine/core'

type UserCurrentReservationsList = {
  reservations: TReservation[]
}
const UserCurrentReservationsList = ({ reservations }: UserCurrentReservationsList) => {
  return (
    <>
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
            id={item.id}
            endTime={item.endTime}
            model={item.car.model}
            startTime={item.startTime}
            year={item.car.year}
            url={item.car.carPhotoId}
          />
        ))}
      </SimpleGrid>
    </>
  )
}

export default UserCurrentReservationsList
