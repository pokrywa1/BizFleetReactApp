import { Loader } from '@mantine/core'

const AppBarLoader = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        marginTop: '4rem',
      }}
    >
      <Loader variant="dots" />
    </div>
  )
}

export default AppBarLoader
