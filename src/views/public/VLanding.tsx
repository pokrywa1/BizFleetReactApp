import {
  createStyles,
  Image,
  Title,
  Button,
  Group,
  Text,
  List,
  ThemeIcon,
  rem,
} from '@mantine/core'
import image from '../../../public/heroCar.svg'
import { BsFillCheckCircleFill } from 'react-icons/bs'

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: `${theme.spacing.xl}`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,
  },

  content: {
    maxWidth: rem(480),
    marginRight: `calc(${theme.spacing.xl} * 3)`,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(44),
    lineHeight: 1.2,
    fontWeight: 900,

    [theme.fn.smallerThan('xs')]: {
      fontSize: rem(28),
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    marginTop: 'auto',
    marginBottom: 'auto',
    [theme.fn.smallerThan('md')]: {
      display: 'none',
    },
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({ variant: 'light', color: theme.primaryColor }).background,
    borderRadius: theme.radius.sm,
    padding: `${rem(4)} ${rem(12)}`,
  },
}))
const VLanding = () => {
  const { classes } = useStyles()

  return (
    <div className={classes.inner}>
      <div className={classes.content}>
        <Title className={classes.title}>
          <span className={classes.highlight}>Nowoczesna</span> wypożyczalnia firmowych samochodów
        </Title>
        <Text color="dimmed" mt="md">
          Już teraz stwórz nowoczesną flotę samochodów firmowych. Sprawdź, jakie korzyści daje
          aplikacja BizFleet.
        </Text>

        <List
          mt={30}
          spacing="sm"
          size="sm"
          icon={
            <ThemeIcon size={20} radius="xl">
              <BsFillCheckCircleFill size={rem(12)} stroke={1.5} />
            </ThemeIcon>
          }
        >
          <List.Item>
            <b>Szybkość i Wygoda</b> – Dzięki aplikacji pracownicy mogą wypożyczyć samochód w kilka
            chwil, bez konieczności długotrwałego procesu rezerwacji.
          </List.Item>
          <List.Item>
            <b>Śledzenie i Analiza</b> – Aplikacja umożliwia monitorowanie dostępności samochodów
            oraz śledzenie ich użytkowania w czasie rzeczywistym.
          </List.Item>
          <List.Item>
            <b>Historia w jednym miejscu</b> – Każde z wypożyczeń jest zapisywane, dzięki czemu
            możesz sprawdzić historie pojazdu, nawet kilka lat wstecz
          </List.Item>
        </List>

        <Group mt={30}>
          <Button radius="xl" size="md" className={classes.control}>
            Zacznij już teraz
          </Button>
        </Group>
      </div>
      <Image src={image} className={classes.image} />
    </div>
  )
}

export default VLanding
