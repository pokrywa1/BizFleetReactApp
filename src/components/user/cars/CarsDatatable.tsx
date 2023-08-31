import { useGetCars } from '../../../app/api/user/cars/getCars.tsx'
import CarCard from './CarCard.tsx'
import { SimpleGrid } from '@mantine/core'

const CarsDatatable = () => {
  const { data } = useGetCars()

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
      {data?.map((item) => (
        <CarCard
          id={item.id}
          year={item.year}
          imageId={item.carPhotoId}
          model={item.model}
          plate={item.licensePlate}
          key={item.id}
        />
      ))}
    </SimpleGrid>
  )
}

export default CarsDatatable
