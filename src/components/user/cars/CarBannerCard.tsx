import { TCar } from '../../../app/api/user/cars/getCars.tsx'
import { Card, createStyles, Divider, Group, Image } from '@mantine/core'
import Title from '../../common/Typography/Title.tsx'
import { CarPropertyDetailsCard } from './CarPropertyDetailsCard.tsx'
import { useGetDocument } from '../../../app/api/user/documents/getDocument.tsx'

const useStyle = createStyles((theme) => ({
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
  bannerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    gap: theme.spacing.xs,
    [theme.fn.largerThan('xs')]: {
      flexDirection: 'row',
    },
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
    <Card>
      <div className={classes.bannerWrapper}>
        <Image classNames={classes} withPlaceholder src={image?.url} />
        {/*<Divider orientation={'vertical'}></Divider>*/}
        <div className={classes.mainSection}>
          <Title order={3}>{car.model}</Title>
          <Divider my={10} />

          <Group spacing={'xs'}>
            <CarPropertyDetailsCard name="Rocznik" value={car.year.toString()} />
            <CarPropertyDetailsCard name="Rejestracja" value={car.licensePlate} />
            <CarPropertyDetailsCard name="Rocznik" value={car.year.toString()} />
          </Group>
        </div>
      </div>
    </Card>
  )
}
