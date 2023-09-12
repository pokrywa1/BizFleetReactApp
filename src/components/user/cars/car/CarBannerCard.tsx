import { TCar } from '../../../../app/api/user/cars/getCars.tsx'
import { Card, createStyles, Divider, Image, Stack } from '@mantine/core'
import Title from '../../../common/Typography/Title.tsx'
import { CarPropertyDetailsCard } from '../CarPropertyDetailsCard.tsx'
import { useGetDocument } from '../../../../app/api/user/documents/getDocument.tsx'
import { CarReservationHistoryDatatable } from './CarReservationHistoryDatatable.tsx'

const useStyle = createStyles((theme) => ({
  pageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: theme.spacing.xs,
    [theme.fn.largerThan('xs')]: {
      flexDirection: 'row',
    },
  },
  imageWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    aspectRatio: '1 / 1',
    [theme.fn.largerThan('xs')]: {
      width: '200px',
    },
  },

  root: {
    [theme.fn.largerThan('xs')]: {
      maxWidth: '200px',
      paddingRight: '1rem',
    },
  },
  essentialData: {
    display: 'flex',
    flexDirection: 'column',

    gap: theme.spacing.xs,
  },
  mainSection: {
    flex: 1,
  },
}))

type CarBannerCardProps = {
  car: TCar
}

export const CarBannerCard = ({ car }: CarBannerCardProps) => {
  const { classes } = useStyle()
  const { data: image } = useGetDocument(car.carPhotoId)
  return (
    <div className={classes.pageWrapper}>
      <div className={classes.essentialData}>
        <Card>
          <Image classNames={classes} withPlaceholder src={image?.url} />
        </Card>
        {/*<Divider orientation={'vertical'}></Divider>*/}
        <Card>
          <Title order={3}>{car.model}</Title>
          <Divider my={10} />
          <Stack spacing={'xs'}>
            <CarPropertyDetailsCard name="Rocznik" value={car.year.toString()} />
            <CarPropertyDetailsCard name="Rejestracja" value={car.licensePlate} />
            <CarPropertyDetailsCard name="Rocznik" value={car.year.toString()} />
          </Stack>
        </Card>
      </div>
      <CarReservationHistoryDatatable />
    </div>
  )
}
