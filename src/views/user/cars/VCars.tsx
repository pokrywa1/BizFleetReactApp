import CarsDatatable from '../../../components/user/cars/CarsDatatable.tsx'
import Title from '../../../components/common/Typography/Title.tsx'
import { Group } from '@mantine/core'
import { useState } from 'react'
import { Button } from '../../../components/common/Buttons/Button.tsx'
import CarsAddFormModal from '../../../components/user/cars/modals/CarsAddFormModal.tsx'
import { ModalWithTitle } from '../../../components/common/modals/Modal.tsx'

const VCars = () => {
  const [openedModal, setOpenedModal] = useState(false)
  return (
    <>
      <Group position={'apart'}>
        <Title order={2}>Samochody</Title>
        <Button onClick={() => setOpenedModal(true)}>Dodaj</Button>
      </Group>
      <CarsDatatable />
      <ModalWithTitle
        title={'Dodawanie samochodu'}
        subtext={'Wypełnij dane i zatwierdź'}
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
      >
        <CarsAddFormModal />
      </ModalWithTitle>
    </>
  )
}

export default VCars
