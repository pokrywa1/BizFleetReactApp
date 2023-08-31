import CarsDatatable from '../../../components/user/cars/CarsDatatable.tsx'
import Title from '../../../components/common/Typography/Title.tsx'
import { Group, Modal } from '@mantine/core'
import { useState } from 'react'
import { Button } from '../../../components/common/Buttons/Button.tsx'
import CarsAddFormModal from '../../../components/user/cars/modals/CarsAddFormModal.tsx'

const VCars = () => {
  const [openedModal, setOpenedModal] = useState(false)
  return (
    <>
      <Group position={'apart'}>
        <Title order={2}>Samochody</Title>
        <Button onClick={() => setOpenedModal(true)}>Dodaj</Button>
      </Group>
      <CarsDatatable />
      <Modal
        title={'Dodawanie samochodu'}
        centered
        opened={openedModal}
        onClose={() => setOpenedModal(false)}
      >
        <CarsAddFormModal />
      </Modal>
    </>
  )
}

export default VCars
