import { TCar } from '../../../app/api/user/cars/getCars.tsx'
import { Card, createStyles, Divider, Image } from '@mantine/core'
import Title from '../../common/Typography/Title.tsx'

const useStyle = createStyles((theme) => ({
  imageWrapper: {
    height: '100%',
    width: '100%',
    aspectRatio: '1 / 1',
    [theme.fn.largerThan('xs')]: {
      maxWidth: '300px',
    },
  },

  root: {
    [theme.fn.largerThan('xs')]: {
      maxWidth: '300px',
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
  refetch: () => void
}

export const CarBannerCard = () => {
  const { classes } = useStyle()
  return (
    <Card>
      <div className={classes.bannerWrapper}>
        <Image classNames={classes} withPlaceholder />
        {/*<Divider orientation={'vertical'}></Divider>*/}
        <div className={classes.mainSection}>
          <Title order={3}>Peugeot</Title>
          <Divider />
        </div>
      </div>
    </Card>
  )
}
