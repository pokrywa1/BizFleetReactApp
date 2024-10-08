import CarsDatatable from '../../../components/user/cars/CarsDatatable.tsx'
import Title from '../../../components/common/Typography/Title.tsx'
import { Group } from '@mantine/core'
import { useState } from 'react'
import { Button } from '../../../components/common/Buttons/Button.tsx'
import CarsAddFormModal from '../../../components/user/cars/modals/CarsAddFormModal.tsx'
import { QueryWrapper } from '../../../app/Query/Query.tsx'
import { TCar, useGetCars } from '../../../app/api/user/cars/getCars.tsx'
import { RequireAdmin } from '../../../components/common/Access/RequireAdmin.tsx'

const VCars = () => {
  const queryData = useGetCars()
  const [openedModal, setOpenedModal] = useState(false)

  return (
    <>
      <Group position={'apart'}>
        <Title order={2}>Samochody</Title>
        <RequireAdmin>
          <Button onClick={() => setOpenedModal(true)}>Dodaj</Button>
        </RequireAdmin>
      </Group>
      <QueryWrapper query={queryData}>
        {(data: TCar[]) => <CarsDatatable cars={data} />}
      </QueryWrapper>
      <CarsAddFormModal opened={openedModal} onClose={() => setOpenedModal(false)} />
    </>
  )
}

export default VCars
