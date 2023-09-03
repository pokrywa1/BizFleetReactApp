import { TCar, useGetCars } from '../../../../app/api/user/cars/getCars.tsx'
import { putCar, TPutCarFormFields, TPutCarSchema } from '../../../../app/api/user/cars/putCar.tsx'
import useFormMutation from '../../../../app/hook/useFormMutation.tsx'
import { FormProvider } from 'react-hook-form'
import { Stack } from '@mantine/core'
import InputText from '../../../common/Inputs/InputText.tsx'
import { Button } from '../../../common/Buttons/Button.tsx'

const CarEditFormModal = (car: TCar) => {
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
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={'xs'}>
          <InputText name={inputsNames.licensePlate} placeholder={'Rejestracja'} />
          <Button type={'submit'}>Zatwierdź</Button>
        </Stack>
      </form>
    </FormProvider>
  )
}

export default CarEditFormModal
