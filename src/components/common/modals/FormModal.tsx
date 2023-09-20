import { ModalWithTitle, TModalWithTitleProps } from './Modal.tsx'
import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form'
import { FormEventHandler } from 'react'

type FormModalProps<FormFields extends FieldValues> = {
  methods: UseFormReturn<FormFields>
  onSubmit: FormEventHandler
} & TModalWithTitleProps

export const FormModal = <FormFields extends FieldValues>({
  methods,
  onSubmit,
  onClose: _onClose,
  ...props
}: FormModalProps<FormFields>) => {
  const onCloseHandle = () => {
    methods.reset && methods.reset()
    _onClose && _onClose()
  }
  return (
    <ModalWithTitle onClose={onCloseHandle} {...props}>
      <FormProvider {...methods}>
        <form onSubmit={onSubmit}>{props.children}</form>
      </FormProvider>
    </ModalWithTitle>
  )
}
