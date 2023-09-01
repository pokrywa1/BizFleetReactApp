import CarsDatatable from '../../../components/user/cars/CarsDatatable.tsx'
import Title from '../../../components/common/Typography/Title.tsx'
import { Group, Modal } from '@mantine/core'
import { useState } from 'react'
import { Button } from '../../../components/common/Buttons/Button.tsx'
import CarsAddFormModal from '../../../components/user/cars/modals/CarsAddFormModal.tsx'
import { QueryWrapper } from '../../../app/Query/Query.tsx'
import { TCar, useGetCars } from '../../../app/api/user/cars/getCars.tsx'

const VCars = () => {
  const queryData = useGetCars()

  const [openedModal, setOpenedModal] = useState(false)
  return (
    <>
      <Group position={'apart'}>
        <Title order={2}>Samochody</Title>
        <Button onClick={() => setOpenedModal(true)}>Dodaj</Button>
      </Group>
      <QueryWrapper query={queryData}>
        {(data: TCar[]) => <CarsDatatable cars={data} />}
      </QueryWrapper>

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
