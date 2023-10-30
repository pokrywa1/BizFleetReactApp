import { useState } from 'react'
import { Stack } from '@mantine/core'
import { DatePicker } from '@mantine/dates'
import { Button } from '../../../common/Buttons/Button.tsx'
import { useMutation } from 'react-query'
import {
  postCarReservation,
  TPostCarReservationFormFields,
} from '../../../../app/api/user/reservations/postReservation.ts'
import { useGetCarReservation } from '../../../../app/api/user/cars/getCarReservation.ts'

type CarAddReservationProps = {
  id: string
  onClose: () => void
}
const CarAddReservation = ({ id, onClose }: CarAddReservationProps) => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null])
  const { data } = useGetCarReservation(id)
  const { mutateAsync } = useMutation(postCarReservation, {
    onSuccess: () => onClose && onClose(),
  })
  const handleReservationSubmit = () => {
    const formValue: TPostCarReservationFormFields = {
      endTime: value[1],
      startTime: value[0],
      carId: id,
    }
    mutateAsync(formValue)
  }
  return (
    <Stack>
      <DatePicker
        allowSingleDateInRange
        mx={'auto'}
        type="range"
        value={value}
        onChange={setValue}
        locale={'pl'}
        excludeDate={(date) => {
          if (!date) {
            // Jeśli data jest pusta (null), wyłącz ją.
            return true
          }

          const currentDate = new Date(date)

          // Ustalamy dzisiejszą datę
          const today = new Date()
          today.setHours(0, 0, 0, 0)

          // Jeśli data jest wcześniejsza niż dzisiaj, wyłącz ją.
          if (currentDate < today) {
            return true
          }

          // Tutaj dodajemy logikę sprawdzania disabledDate, jeśli data nie jest wcześniejsza niż dzisiaj.
          if (
            data &&
            data.some((disabledDate) => {
              const startTime = new Date(disabledDate.startTime)
              const endTime = new Date(disabledDate.endTime)

              return (
                currentDate <= endTime &&
                currentDate >= startTime &&
                disabledDate.reservationStatus.code !== 'Cancelled'
              )
            })
          ) {
            return true
          }

          // Jeśli żaden warunek nie jest spełniony, to data jest dostępna.
          return false
        }}
      />

      <Button disabled={value[0] === null || value[1] === null} onClick={handleReservationSubmit}>
        Zatwierdź
      </Button>
    </Stack>
  )
}

export default CarAddReservation
