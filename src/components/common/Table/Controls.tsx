import { createStyles } from '@mantine/core'
import { useTableContext } from './Container.tsx'

type TableControlsProps = {
  children: React.ReactNode
}

const useStyles = createStyles(() => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.5rem',
  },
}))
export const _TableControls = ({ children }: TableControlsProps) => {
  const { classes } = useStyles()

  const { isMobile } = useTableContext()
  if (isMobile) return <>{children}</>
  return <>{!isMobile && <div className={classes.container}>{children}</div>}</>
}
