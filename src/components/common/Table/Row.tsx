import React from 'react'
import { createStyles } from '@mantine/core'

type TableRowProps = {
  children: React.ReactNode | React.ReactNode[]
}

const useStyle = createStyles((theme) => ({
  tr: {
    backgroundColor: 'white',
  },
  td: {},
}))
const _TableRow = ({ children: _children }: TableRowProps) => {
  const { classes } = useStyle()

  const children = React.Children.toArray(_children)
  return (
    <tr className={classes.tr}>
      {children.map((item, index) => (
        <td className={classes.td} key={index}>
          {item}
        </td>
      ))}
    </tr>
  )
}

export default _TableRow
