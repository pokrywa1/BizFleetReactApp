import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import * as yup from 'yup'
import { AnyObjectSchema } from 'yup'
import { AxiosError, AxiosResponse } from 'axios'
import { useMutation, UseMutationOptions } from 'react-query'
import { yupResolver } from '@hookform/resolvers/yup'
import toast from 'react-hot-toast'

type FieldNamesMap<T> = {
  [K in keyof T]: K
}
const UseFormMutation = <FormFields extends FieldValues, ServerResponse = unknown>(
  schema: AnyObjectSchema,
  mutationFn: (data: FormFields) => Promise<AxiosResponse<ServerResponse>['data']>,
  options?: Omit<UseMutationOptions<ServerResponse, AxiosError, unknown, FormFields>, 'mutationFn'>,
  defaultValues?: object,
) => {
  const methods = useForm<FormFields>({
    resolver: yupResolver(schema),
    defaultValues: { ...schema.getDefault(), ...defaultValues },
  })
  const { isLoading, mutateAsync, error } = useMutation(mutationFn, {
    ...options,
    onError: (error, variables, context) => {
      if (options?.onError) {
        options.onError(error, variables, context)
      } else {
        toast.error(error.message)
      }
    },
  })

  const inputsNames = generateFieldNamesMap<FormFields>(schema)

  const handleSubmit = methods.handleSubmit(async (data: FormFields) => {
    try {
      return (await mutateAsync(data)) as unknown as SubmitHandler<FormFields>
    } catch (e) {
      return false
    }
  })

  return { methods, handleSubmit, inputsNames, isLoading, error }
}

export default UseFormMutation

function generateFieldNamesMap<T>(schema: yup.AnyObjectSchema): FieldNamesMap<T> {
  const schemaDescription = schema.describe()
  const inputNames = schemaDescription.fields
    ? (Object.keys(schemaDescription.fields) as (keyof T)[])
    : []
  return inputNames.reduce((map, fieldName) => {
    map[fieldName] = fieldName
    return map
  }, {} as FieldNamesMap<T>)
}
