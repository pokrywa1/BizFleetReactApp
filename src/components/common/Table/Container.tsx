import { createStyles } from '@mantine/core'
import { TTableHeader } from '../../user/dashboard/DasboardAllReservationsDatatable.tsx'
import { createContext, useContext } from 'react'
import { useMediaQuery } from '@mantine/hooks'

const useStyle = createStyles((theme) => ({
  container: {
    overflowX: 'auto',
  },
  table: {
    width: '100%',
    color: theme.colors.gray[8],

    borderCollapse: 'separate',
    borderSpacing: `0 10px`,
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
    '& > tbody > tr > td > button': {
      textAlign: 'right',
    },
  },
  th: {
    textAlign: 'start',
  },
}))

type TTableContext = {
  isMobile: boolean
  importantIndex?: number[]
  columns: TTableHeader
}

const TableContextInitial: TTableContext = {
  isMobile: false,
  importantIndex: undefined,
  columns: [],
}

export const TableContext = createContext<TTableContext>(TableContextInitial)
export const useTableContext = () => {
  const context = useContext(TableContext)
  if (!context) {
    throw new Error('Error in creating the context')
  }
  return context
}

type TableContainerProps = {
  columns: TTableHeader
  children: React.ReactNode | React.ReactNode[]
  importantIndex?: number[]
}
const _TableContainer = ({ columns, importantIndex, children }: TableContainerProps) => {
  const { classes } = useStyle()
  const isMobile = useMediaQuery(`(max-width: 500px)`)

  return (
    <TableContext.Provider value={{ isMobile, importantIndex, columns }}>
      <div className={classes.container}>
        <table className={classes.table}>
          <_TableHead />
          <_TableBody>{children}</_TableBody>
        </table>
      </div>
    </TableContext.Provider>
  )
}

export default _TableContainer

const _TableHead = () => {
  const { classes } = useStyle()

  const { columns, importantIndex, isMobile } = useTableContext()
  console.log(columns)
  return (
    <thead>
      <tr>
        {!isMobile &&
          columns.map((item, index) => {
            console.log(index)
            return (
              <th className={classes.th} key={index} scope="col">
                {item.name ?? ''}
              </th>
            )
          })}
        {importantIndex &&
          isMobile &&
          importantIndex.map((index) => (
            <th className={classes.th} key={index} scope="col">
              {columns[index].name}
            </th>
          ))}
        {importantIndex && isMobile && <th className={classes.th} scope="col"></th>}
      </tr>
    </thead>
  )
}

type TableBodyProps = {
  children: React.ReactNode | React.ReactNode[]
}
const _TableBody = ({ children }: TableBodyProps) => {
  return <tbody>{children}</tbody>
}
