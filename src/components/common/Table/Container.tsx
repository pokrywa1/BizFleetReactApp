import { createStyles } from '@mantine/core'
import { TTableHeader } from '../../user/dashboard/DasboardAllReservationsDatatable.tsx'

const useStyle = createStyles((theme) => ({
  container: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',

    // padding: theme.spacing.xs,
    // marginTop: theme.spacing.xs,
    // marginBottom: theme.spacing.xs,
    color: theme.colors.gray[8],

    borderCollapse: 'separate',
    borderSpacing: `0px 10px`,
    '& > thead > tr > th, & > tbody > tr > td': {
      backgroundColor: theme.colorScheme == 'light' ? theme.white : theme.colors.dark[6],
      padding: '15px 20px',
      borderTop: `1px solid ${theme.other.line}`,
      borderBottom: `1px solid ${theme.other.line}`,
      textAlign: 'left',
    },
    'td:first-of-type, th:first-of-type': {
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
    },
    'td:last-of-type, th:last-of-type': {
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
    },
    // '& > tbody > tr > td, & > thead > tr > th': {
    //   backgroundColor: theme.colorScheme == 'light' ? theme.white : theme.colors.dark[6],
    //   padding: '15px 20px',
    //   borderTop: `1px solid ${theme.other.line}`,
    //   borderBottom: `1px solid ${theme.other.line}`,
    //
    //   ':first-of-type': {
    //     borderTopLeftRadius: 10,
    //     borderBottomLeftRadius: 10,
    //     borderLeft: `1px solid ${theme.other.line}`,
    //   },
    //   ':last-of-type': {
    //     borderTopRightRadius: 10,
    //     borderBottomRightRadius: 10,
    //     borderRight: `1px solid ${theme.other.line}`,
    //   },
    // },
  },
  th: {
    textAlign: 'start',
  },
}))

type TableContainerProps = {
  columns: TTableHeader
  children: React.ReactNode | React.ReactNode[]
}
const _TableContainer = ({ columns, children }: TableContainerProps) => {
  const { classes } = useStyle()
  return (
    <div className={classes.container}>
      <table className={classes.table}>
        <thead>
          <tr>
            {columns.map((item, index) => (
              <th className={classes.th} key={index} scope="col">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  )
}

export default _TableContainer
