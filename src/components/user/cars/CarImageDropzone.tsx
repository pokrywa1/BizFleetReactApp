import { useState } from 'react'
import { useMutation } from 'react-query'
import { postImage } from '../../../app/api/user/documents/postImage.tsx'
import { Group, Image, rem, Text } from '@mantine/core'
import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { BsUniversalAccess } from 'react-icons/bs'
import { AiOutlineCloudUpload } from 'react-icons/ai'

type CarImageDropzoneProps = {
  setFormPhoto: (photoId: string) => void
}
const CarImageDropzone = ({ setFormPhoto }: CarImageDropzoneProps) => {
  const [carImageUrl, setCarImageUrl] = useState<string>()
  const { mutateAsync, isLoading } = useMutation(postImage, {
    onSuccess: ({ data }) => {
      setCarImageUrl(data.url)
      setFormPhoto(data.id)
    },
    onError: (data) => console.log(data),
  })
  const onDropHandle = (file: File) => {
    const fd = new FormData()
    fd.append('file', file)

    mutateAsync(fd)
  }

  return (
    <>
      {carImageUrl ? (
        <Image mx="auto" radius="md" src={carImageUrl} alt="Random image" />
      ) : (
        <Dropzone
          loading={isLoading}
          onDrop={(files) => onDropHandle(files[0])}
          onReject={(files) => console.log('rejected files', files)}
          maxSize={3 * 1024 ** 2}
          accept={IMAGE_MIME_TYPE}
        >
          <Group
            position="center"
            spacing="xl"
            style={{ minHeight: rem(220), pointerEvents: 'none' }}
          >
            <Dropzone.Accept>
              <BsUniversalAccess size="3.2rem" stroke={1.5} />
            </Dropzone.Accept>
            <Dropzone.Reject>
              <AiOutlineCloudUpload size="3.2rem" stroke={1.5} />
            </Dropzone.Reject>
            <Dropzone.Idle>
              <AiOutlineCloudUpload size="3.2rem" stroke={1.5} />
            </Dropzone.Idle>

            <div>
              <Text size="xl" inline>
                Przeciągnij zdjęcie lub kliknij, aby wybrać
              </Text>
              <Text size="sm" color="dimmed" inline mt={7}>
                Maksymalny rozmiar zdjęcia wynosi 5mb
              </Text>
            </div>
          </Group>
        </Dropzone>
      )}
    </>
  )
}

export default CarImageDropzone
