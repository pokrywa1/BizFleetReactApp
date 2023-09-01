import { FormProvider } from 'react-hook-form'
import useFormMutation from '../../../../app/hook/useFormMutation.tsx'
import {
  postSignIn,
  TPostCarFormFields,
  TPostCarSchema,
} from '../../../../app/api/user/cars/postCar.tsx'
import InputText from '../../../common/Inputs/InputText.tsx'
import { Button } from '../../../common/Buttons/Button.tsx'
import { Stack } from '@mantine/core'
import CarImageDropzone from '../CarImageDropzone.tsx'
import { useGetCars } from '../../../../app/api/user/cars/getCars.tsx'

const CarsAddFormModal = () => {
  const { refetch } = useGetCars()

  const { inputsNames, handleSubmit, methods } = useFormMutation<TPostCarFormFields, unknown>(
    TPostCarSchema,
    postSignIn,
    {
      onSuccess: () => refetch && refetch(),
    },
  )
  const setFormPhoto = (photoId: string) => {
    methods.setValue(inputsNames.carPhotoId, photoId)
  }
  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={'xs'}>
          <CarImageDropzone setFormPhoto={setFormPhoto} />
          <InputText name={inputsNames.model} placeholder={'Model'} />
          <InputText name={inputsNames.licensePlate} placeholder={'Rejestracja'} />
          <InputText name={inputsNames.year} placeholder={'Rocznik'} />
          <Button type={'submit'}>Zatwierdź</Button>
        </Stack>
      </form>
    </FormProvider>
  )
}

export default CarsAddFormModal
