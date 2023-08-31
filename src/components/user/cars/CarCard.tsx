import { Card, Image, Text, Group, createStyles, Button, rem, Stack, Modal } from '@mantine/core'
import { useGetDocument } from '../../../app/api/user/documents/getDocument.tsx'
import { useState } from 'react'
import CarAddReservation from './modals/CarAddReservation.tsx'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.xs,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}))

type CarCardProps = {
  id: string
  imageId: string | null
  model: string
  year: number
  plate: string
}
const CarCard = ({ id, plate, year, imageId, model }: CarCardProps) => {
  const [openedReservationModal, setOpenedReservationModal] = useState(false)
  const { data } = useGetDocument(imageId)
  const { classes } = useStyles()

  return (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={data?.url} alt="Tesla Model S" />
        </Card.Section>

        <Stack my="xs" spacing={'xs'}>
          <Group position={'apart'}>
            <Text fw={500}>Marka</Text>
            <Text fw={400}>{model}</Text>
          </Group>
          <Group position={'apart'}>
            <Text fw={500}>Rocznik</Text>
            <Text fw={400}>{year}</Text>
          </Group>
          <Group position={'apart'}>
            <Text fw={500}>Rejestracja</Text>
            <Text fw={400}>{plate}</Text>
          </Group>
        </Stack>

        <Card.Section className={classes.section}>
          <Button onClick={() => setOpenedReservationModal(true)} fullWidth style={{ flex: 1 }}>
            Rezerwuj
          </Button>
        </Card.Section>
      </Card>
      <Modal
        opened={openedReservationModal}
        onClose={() => setOpenedReservationModal(false)}
        title={'Rezerwacja samochodu'}
      >
        <CarAddReservation id={id} />
      </Modal>
    </>
  )
}

export default CarCard
