import { ModalWithTitle, TModalWithTitleProps } from './Modal.tsx'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'
import { FormEventHandler } from 'react'
import { Stack } from '@mantine/core'
import { ButtonFormModal, ButtonFormModalProps } from '../Buttons/ButtonFormModal.tsx'

type FormModalProps<FormFields extends FieldValues> = {
  methods: UseFormReturn<FormFields>
  onSubmit: FormEventHandler
  buttonsProps?: ButtonFormModalProps
} & TModalWithTitleProps

export const FormModal = <FormFields extends FieldValues>({
  methods,
  onSubmit,
  onClose: _onClose,
  buttonsProps,
  ...props
}: FormModalProps<FormFields>) => {
  const onCloseHandle = () => {
    methods.reset && methods.reset()
    _onClose && _onClose()
  }
  return (
    <ModalWithTitle onClose={onCloseHandle} {...props}>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>
          <Stack spacing={'xs'}>
            {props.children}
            <ButtonFormModal onClose={onCloseHandle} {...buttonsProps} />
          </Stack>
        </form>
      </FormProvider>
    </ModalWithTitle>
  )
}
