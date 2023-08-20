import useUserStore from '../../app/store/useUserStore.ts'

const VUserPanel = () => {
  return <div>{useUserStore((state) => state.accessToken)}</div>
}

export default VUserPanel
