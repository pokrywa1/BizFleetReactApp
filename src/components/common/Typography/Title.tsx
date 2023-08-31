import { createStyles, Title as MantineTitle } from '@mantine/core'
import { TitleProps as MantineTitleProps } from '@mantine/core'

import React from 'react'

type TitleProps = {
  children: React.ReactNode
} & MantineTitleProps

const useStyle = createStyles((theme) => ({
  title: {
    color: theme.colors.dark[5],
  },
}))
const Title = ({ children, ...props }: TitleProps) => {
  const { classes } = useStyle()
  return (
    <MantineTitle className={classes.title} {...props}>
      {children}
    </MantineTitle>
  )
}

export default Title
