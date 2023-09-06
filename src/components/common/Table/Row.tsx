import React from 'react'
import { ActionIcon, Collapse, createStyles, Divider, Group, Stack, Text } from '@mantine/core'
import { useTableContext } from './Container.tsx'
import { useDisclosure } from '@mantine/hooks'
import { AiOutlineArrowDown } from 'react-icons/ai'

type TableRowProps = {
  children: React.ReactNode | React.ReactNode[]
}

const useStyle = createStyles(() => ({
  tr: {
    backgroundColor: 'white',
  },
  tdControls: {
    textAlign: 'right',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: '0.5rem',
  },
  actionIcon: {
    transitionDuration: '200ms',
    transitionProperty: 'all',
    margin: '0',
  },
  opened: {
    rotate: '180deg',
  },
}))
const _TableRow = ({ children: _children }: TableRowProps) => {
  const [opened, { toggle }] = useDisclosure(false)
  const { classes, cx } = useStyle()
  const { importantIndex, isMobile, columns } = useTableContext()
  const children = React.Children.toArray(_children)

  const complementIndexes = []

  for (let i = 0; i < children.length; i++) {
    if (!importantIndex?.includes(i)) {
      complementIndexes.push(i)
    }
  }

  return (
    <>
      <tr className={classes.tr}>
        {!isMobile && children.map((item, index) => <td key={index}>{item}</td>)}
        {importantIndex &&
          isMobile &&
          importantIndex.map((index) => <td key={index}>{children[index]}</td>)}
        {importantIndex && isMobile && (
          <td className={classes.tdControls}>
            <ActionIcon onClick={toggle} variant="outline" mr={0} color={'blue'}>
              <div className={cx(classes.actionIcon, { [classes.opened]: opened })}>
                <AiOutlineArrowDown />
              </div>
            </ActionIcon>
          </td>
        )}
      </tr>
      {importantIndex && isMobile && opened && (
        <tr>
          <td colSpan={importantIndex.length + 1}>
            <Collapse in={opened}>
              <Stack>
                {complementIndexes.map((index, i) => (
                  <>
                    <Group position={'apart'} key={index}>
                      <Text size={'xs'} color={'gray.6'} key={Number(index)}>
                        {columns[index].name}
                      </Text>
                      <Text key={Number(index)}>{children[index]}</Text>
                    </Group>
                    {i + 1 < complementIndexes.length && <Divider color={'gray.2'} />}
                  </>
                ))}
              </Stack>
            </Collapse>
          </td>
        </tr>
      )}
    </>
  )
}
// 0.0625rem solid #dee2e6
export default _TableRow
