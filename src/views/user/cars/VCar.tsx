import { CarBannerCard } from '../../../components/user/cars/car/CarBannerCard.tsx'
import { useParams } from 'react-router-dom'
import { useGetCar } from '../../../app/api/user/cars/getCar.tsx'
import { QueryWrapper } from '../../../app/Query/Query.tsx'
import { TCar } from '../../../app/api/user/cars/getCars.tsx'

const VCar = () => {
  const { carId } = useParams()
  const queryData = useGetCar(carId)

  return (
    <>
      <QueryWrapper query={queryData}>{(data: TCar) => <CarBannerCard car={data} />}</QueryWrapper>
    </>
  )
}

export default VCar
