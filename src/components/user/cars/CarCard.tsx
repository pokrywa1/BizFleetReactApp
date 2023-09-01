import {
  Card,
  Image,
  Text,
  Group,
  createStyles,
  Button,
  rem,
  Stack,
  ActionIcon,
  Menu,
} from '@mantine/core'
import { useGetDocument } from '../../../app/api/user/documents/getDocument.tsx'
import { useState } from 'react'
import CarAddReservation from './modals/CarAddReservation.tsx'
import { useMutation } from 'react-query'
import { deleteCar } from '../../../app/api/user/cars/deleteCar.tsx'
import { TCar } from '../../../app/api/user/cars/getCars.tsx'
import { AiFillSetting } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'
import { ModalWithTitle } from '../../common/modals/Modal.tsx'
import DeleteModal from '../../common/modals/DeleteModal.tsx'

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
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}))

const CarCard = (car: TCar) => {
  const [openedReservationModal, setOpenedReservationModal] = useState(false)
  const [openedDeleteModal, setOpenedDeleteModal] = useState(false)
  const { data } = useGetDocument(car.carPhotoId)
  const { classes } = useStyles()

  const { mutateAsync: deleteMutation } = useMutation(deleteCar, {
    onSuccess: () => setOpenedDeleteModal(false),
  })

  return (
    <>
      <Card withBorder radius="md" className={classes.card}>
        <Card.Section className={classes.imageSection}>
          <Image src={data?.url} alt="Tesla Model S" />
          <Menu shadow="md" width={200} classNames={classes}>
            <Menu.Target>
              <ActionIcon className={classes.actionIconWrapper}>
                <AiFillSetting />
              </ActionIcon>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item icon={<AiFillSetting />}>Edycja</Menu.Item>
              <Menu.Item icon={<BsFillTrashFill />} onClick={() => setOpenedDeleteModal(true)}>
                Usuń
              </Menu.Item>
            </Menu.Dropdown>
          </Menu>
        </Card.Section>

        <Stack my="xs" spacing={'xs'}>
          <Group position={'apart'}>
            <Text fw={500}>Marka</Text>
            <Text fw={400}>{car.model}</Text>
          </Group>
          <Group position={'apart'}>
            <Text fw={500}>Rocznik</Text>
            <Text fw={400}>{car.year}</Text>
          </Group>
          <Group position={'apart'}>
            <Text fw={500}>Rejestracja</Text>
            <Text fw={400}>{car.licensePlate}</Text>
          </Group>
        </Stack>

        <Card.Section className={classes.section}>
          <Button onClick={() => setOpenedReservationModal(true)} fullWidth>
            Rezerwuj
          </Button>
        </Card.Section>
      </Card>
      <ModalWithTitle
        opened={openedReservationModal}
        onClose={() => setOpenedReservationModal(false)}
        title={'Rezerwacja samochodu'}
        subtext={'Wybierz okres i zatwierdź rezerwacje'}
      >
        <CarAddReservation id={car.id} />
      </ModalWithTitle>

      <DeleteModal
        onConfirm={() => deleteMutation(car.id)}
        opened={openedDeleteModal}
        onClose={() => setOpenedDeleteModal(false)}
        title={'Usuwanie samochodu'}
        subtext={'Czy na pewno chcesz usunąć samochód?'}
      />
    </>
  )
}

export default CarCard
