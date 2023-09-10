import { ReservationStatusCode } from '../api/user/reservations/getReservations.ts'
import { MantineColor } from '@mantine/core'

export type EnumBadgeColorType = 'reservation-status'
export const getBadgeColor = (enumType: EnumBadgeColorType, code: string): MantineColor => {
  switch (enumType) {
    case 'reservation-status':
      return getReservationBadgeColor(code as ReservationStatusCode)
    default:
      return 'gray'
  }
}

const getReservationBadgeColor = (code: ReservationStatusCode): MantineColor => {
  switch (code) {
    case 'Reserved':
      return 'blue'
    case 'Active':
      return 'yellow'
    case 'Cancelled':
      return 'red'
    case 'Finished':
      return 'green'
    default:
      return 'gray'
  }
}
