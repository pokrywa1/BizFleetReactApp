import { TCar, useGetCars } from '../../../app/api/user/cars/getCars.tsx'
import CarCard from './CarCard.tsx'
import { SimpleGrid } from '@mantine/core'

type CarsDatatableProps = {
  cars: TCar[]
}
const CarsDatatable = ({ cars }: CarsDatatableProps) => {
  const { refetch } = useGetCars()
  return (
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
      {cars && cars?.map((item) => <CarCard key={item.id} car={{ ...item }} refetch={refetch} />)}{' '}
    </SimpleGrid>
  )
}

export default CarsDatatable
