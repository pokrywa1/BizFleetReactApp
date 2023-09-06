import React from 'react'
import { Button, Collapse, createStyles, Flex, Group, Text } from '@mantine/core'
import { useTableContext } from './Container.tsx'
import { useDisclosure } from '@mantine/hooks'

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
  const [opened, { toggle }] = useDisclosure(false)
  const { classes } = useStyle()
  const { importantIndex, isMobile } = useTableContext()

  const children = React.Children.toArray(_children)
  return (
    <>
      <tr className={classes.tr}>
        {!isMobile &&
          children.map((item, index) => (
            <td className={classes.td} key={index}>
              {item}
            </td>
          ))}
        {importantIndex && isMobile && (
          <td className={classes.td} colSpan={importantIndex.length + 1}>
            <Group position={'apart'}>
              <Group spacing={'xl'} noWrap>
                {importantIndex.map((item) => children[item])}
              </Group>
              <Button onClick={toggle} />
            </Group>
            <Collapse in={opened}>
              <Text>fbdbdbb</Text>
              <Text>fbdbdbb</Text>
            </Collapse>
          </td>
        )}
        {/*{importantIndex && isMobile && <td className={classes.td}></td>}*/}
        {/*{importantIndex && isMobile && opened && (*/}
        {/*  <Collapse in={opened}>*/}
        {/*    <Text>fbdbdbb</Text>*/}
        {/*    <Text>fbdbdbb</Text>*/}
        {/*  </Collapse>*/}
        {/*)}*/}
      </tr>
    </>
  )
}

export default _TableRow
