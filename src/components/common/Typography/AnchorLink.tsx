import { Anchor, AnchorProps } from '@mantine/core'
import React from 'react'
import { Link, LinkProps } from 'react-router-dom'

type AnchorLinkProps = {
  children: React.ReactNode
} & AnchorProps &
  LinkProps

export const AnchorLink = ({ children, ...props }: AnchorLinkProps) => {
  return (
    <Anchor component={Link} {...props}>
      {children}
    </Anchor>
  )
}
