import { TextProps as MantineTextProps, Text as MantineText, useMantineTheme } from '@mantine/core'
type TextProps = {} & MantineTextProps

export const Text = ({ color, ...props }: TextProps) => {
  const theme = useMantineTheme()

  return (
    <MantineText
      color={color || (theme.colorScheme == 'dark' ? theme.colors.gray[5] : theme.colors.gray[8])}
      {...props}
    />
  )
}
