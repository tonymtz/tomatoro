import { ThemeUIStyleObject } from '@theme-ui/css'
import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Divider, Heading, Link, Paragraph } from 'theme-ui'

interface Props {
  content: Post['attributes']['content']
  overrides?: Partial<{
    a: ThemeUIStyleObject,
    p: ThemeUIStyleObject
  }>
}

export const RichTextRenderer: FC<Props> = ({ content, overrides }) => {
  const safeOverrides = {
    a: overrides?.a || {},
    p: overrides?.p || {},
  }

  return (
    <ReactMarkdown components={ {
      h1: (props) => <Heading as="h1">{ props.children }</Heading>,
      h2: (props) => <Heading as="h2">{ props.children }</Heading>,
      p: (props) => <Paragraph sx={safeOverrides.p}>{ props.children }</Paragraph>,
      li: (props) => <li><Paragraph>{ props.children }</Paragraph></li>,
      a: (props) => <Link href={ props.href } sx={safeOverrides.a}>{ props.children }</Link>,
      hr: () => <Divider sx={ { my: 4, width: '100%' } }/>,
    } }>
      { content }
    </ReactMarkdown>
  )
}
