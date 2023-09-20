import { TCar, useGetCars } from '../../../../app/api/user/cars/getCars.tsx'
import { putCar, TPutCarFormFields, TPutCarSchema } from '../../../../app/api/user/cars/putCar.tsx'
import useFormMutation from '../../../../app/hook/useFormMutation.tsx'
import { Stack } from '@mantine/core'
import InputText from '../../../common/Inputs/InputText.tsx'
import { FormModal } from '../../../common/modals/FormModal.tsx'

type CarEditFormModalProps = {
  opened: boolean
  onClose: () => void
  car: TCar
}
const CarEditFormModal = ({ car, opened, onClose }: CarEditFormModalProps) => {
  const { refetch } = useGetCars()
  const initialValue: TPutCarFormFields = {
    licensePlate: car.licensePlate,
  }
  const { inputsNames, handleSubmit, methods } = useFormMutation<TPutCarFormFields, unknown>(
    TPutCarSchema,
    putCar(car.id),
    {
      onSuccess: () => refetch && refetch(),
    },
    initialValue,
  )

  return (
    <FormModal
      methods={methods}
      opened={opened}
      onClose={onClose}
      title={'Edycja pojazdu'}
      onSubmit={handleSubmit}
      subtext={'Edytuj dane i zapisz'}
    >
      <form onSubmit={handleSubmit}>
        <Stack spacing={'xs'}>
          <InputText name={inputsNames.licensePlate} placeholder={'Rejestracja'} />
        </Stack>
      </form>
    </FormModal>
  )
}

export default CarEditFormModal
