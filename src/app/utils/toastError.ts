import toast from 'react-hot-toast'

export const toastError = (error: string) => {
  toast.error(error)
}
export const toastSuccess = (error: string) => {
  toast.success(error)
}
