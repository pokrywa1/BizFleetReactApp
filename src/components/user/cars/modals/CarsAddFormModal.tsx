import useFormMutation from '../../../../app/hook/useFormMutation.tsx'
import {
  postCar,
  TPostCarFormFields,
  TPostCarSchema,
} from '../../../../app/api/user/cars/postCar.tsx'
import InputText from '../../../common/Inputs/InputText.tsx'
import { Button } from '../../../common/Buttons/Button.tsx'
import { Stack } from '@mantine/core'
import CarImageDropzone from '../CarImageDropzone.tsx'
import { useGetCars } from '../../../../app/api/user/cars/getCars.tsx'
import { FormModal } from '../../../common/modals/FormModal.tsx'

type CarsAddFormModalProps = {
  opened: boolean
  onClose: () => void
}
const CarsAddFormModal = ({ opened, onClose }: CarsAddFormModalProps) => {
  const { refetch } = useGetCars()

  const { inputsNames, handleSubmit, methods } = useFormMutation<TPostCarFormFields, unknown>(
    TPostCarSchema,
    postCar,
    {
      onSuccess: () => {
        refetch && refetch().then(() => methods.reset())
        onClose()
      },
    },
  )
  const setFormPhoto = (photoId: string) => {
    methods.setValue(inputsNames.carPhotoId, photoId)
  }
  return (
    <FormModal
      methods={methods}
      onSubmit={handleSubmit}
      opened={opened}
      onClose={onClose}
      title={'Dodawanie pojazdu'}
    >
      <Stack spacing={'xs'}>
        <CarImageDropzone setFormPhoto={setFormPhoto} />
        <InputText name={inputsNames.model} placeholder={'Model'} />
        <InputText name={inputsNames.licensePlate} placeholder={'Rejestracja'} />
        <InputText name={inputsNames.year} placeholder={'Rocznik'} />
        <Button type={'submit'}>Zatwierdź</Button>
      </Stack>
    </FormModal>
  )
}

export default CarsAddFormModal
