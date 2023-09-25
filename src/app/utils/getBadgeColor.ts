import { ReservationStatusCode } from '../api/user/reservations/getReservations.ts'
import { MantineColor } from '@mantine/core'
import { TOrganizationRole } from '../api/user/organization/getOrganization.ts'

export type EnumBadgeColorType = 'reservation-status' | 'organization-member'
export const getBadgeColor = (enumType: EnumBadgeColorType, code: string): MantineColor => {
  switch (enumType) {
    case 'reservation-status':
      return getReservationBadgeColor(code as ReservationStatusCode)
    case 'organization-member':
      return getOrganizationMemberBadgeColor(code as TOrganizationRole)
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

const getOrganizationMemberBadgeColor = (code: TOrganizationRole): MantineColor => {
  switch (code) {
    case 'user':
      return 'blue'
    case 'admin':
      return 'red'
    default:
      return 'gray'
  }
}
