import { Dropzone, IMAGE_MIME_TYPE } from '@mantine/dropzone'
import { Group, rem, Text } from '@mantine/core'
import { AiOutlineCloudUpload } from 'react-icons/ai'
import { postImage } from '../../../app/api/user/documents/postImage.tsx'
import { useMutation } from 'react-query'

const ImageDropzone = () => {
  const mutation = useMutation(postImage, {
    onSuccess: (data) => console.log(data),
    onError: (data) => console.log(data),
  })
  const onDropHandle = (file: File) => {
    const fd = new FormData()

    fd.append('file', file)
    fd.append('api_key', '')
    fd.append('upload_preset', '')

    mutation.mutateAsync(fd)
  }
  return (
    <Dropzone
      onDrop={(files) => onDropHandle(files[0])}
      onReject={(files) => console.log('rejected files', files)}
      maxSize={3 * 1024 ** 2}
      accept={IMAGE_MIME_TYPE}
    >
      <Group position="center" spacing="xl" style={{ minHeight: rem(220), pointerEvents: 'none' }}>
        <Dropzone.Accept>
          <AiOutlineCloudUpload size="3.2rem" stroke={1.5} />
        </Dropzone.Accept>
        <Dropzone.Reject>
          <AiOutlineCloudUpload size="3.2rem" stroke={1.5} />
        </Dropzone.Reject>
        <Dropzone.Idle>
          <AiOutlineCloudUpload size="3.2rem" stroke={1.5} />
        </Dropzone.Idle>

        <div>
          <Text size="xl" inline>
            Drag images here or click to select files
          </Text>
          <Text size="sm" color="dimmed" inline mt={7}>
            Attach as many files as you like, each file should not exceed 5mb
          </Text>
        </div>
      </Group>
    </Dropzone>
  )
}

export default ImageDropzone
