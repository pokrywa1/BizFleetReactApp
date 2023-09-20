import { Badge, Card, createStyles, Divider, Group, Image, rem, Text } from '@mantine/core'
import * as dayjs from 'dayjs'
import { Button } from '../../common/Buttons/Button.tsx'
import { useGetDocument } from '../../../app/api/user/documents/getDocument.tsx'
import ConfirmModal from '../../common/modals/ConfirmModal.tsx'
import { useState } from 'react'
import { useMutation } from 'react-query'
import { putReservationFinish } from '../../../app/api/user/reservations/putReservationFinish.ts'
import { useGetActiveReservations } from '../../../app/api/user/reservations/getActiveReservation.ts'
import { useGetReservations } from '../../../app/api/user/reservations/getReservations.ts'

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  item: {
    color: 'slategray',
  },
  actionIconWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
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
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}))

type UserCurrentReservationCard = {
  model: string
  year: string
  id: string
  startTime: string
  endTime: string
  url: string
}
const UserCurrentReservationCard = ({
  id,
  endTime,
  startTime,
  year,
  model,
  url,
}: UserCurrentReservationCard) => {
  const { classes } = useStyles()
  const { data } = useGetDocument(url)
  const { refetch: activeReservationRefetch } = useGetActiveReservations()
  const { refetch: allReservationRefetch } = useGetReservations()

  const [openedModal, setOpenedModal] = useState(false)

  const handleSubmit = () => {
    activeReservationRefetch && activeReservationRefetch()
    allReservationRefetch && allReservationRefetch()
    setOpenedModal(false)
  }

  const finishMutation = useMutation(putReservationFinish, {
    onSuccess: handleSubmit,
  })

  return (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={data?.url} alt="Tesla Model S" />
        </Card.Section>

        <Group position="apart" mt="md" mb="xs">
          <Text>{model}</Text>
          <Badge color="gray" variant="light">
            {year}
          </Badge>
        </Group>
        <Divider orientation="horizontal" my={'xs'} />
        <Group position={'apart'}>
          <Text>Data od</Text>
          <Text fz={'sm'} color={'dark'}>
            {dayjs(startTime).format('DD.MM.YYYY')}
          </Text>
        </Group>
        <Group position={'apart'}>
          <Text>Data do</Text>
          <Text fz={'sm'} color={'dark'}>
            {dayjs(endTime).format('DD.MM.YYYY')}
          </Text>
        </Group>
        <Card.Section className={classes.section}>
          <Button onClick={() => setOpenedModal(true)} fullWidth>
            Zakończ przejazd
          </Button>
        </Card.Section>
      </Card>
      <ConfirmModal
        onConfirm={() => finishMutation.mutateAsync(id)}
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
        title={'Kończenie przejazdu'}
      />
    </>
  )
}

export default UserCurrentReservationCard
