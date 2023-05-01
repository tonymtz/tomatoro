import React, { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import { Divider, Heading, Link, Paragraph } from 'theme-ui'

interface Props {
  content: Post['attributes']['content']
}

export const RichTextRenderer: FC<Props> = ({ content }) => {
  return (
    <ReactMarkdown components={ {
      h1: (props) => <Heading as="h1">{ props.children }</Heading>,
      h2: (props) => <Heading as="h2">{ props.children }</Heading>,
      p: (props) => <Paragraph>{ props.children }</Paragraph>,
      li: (props) => <li><Paragraph>{ props.children }</Paragraph></li>,
      a: (props) => <Link href={ props.href }>{ props.children }</Link>,
      hr: () => <Divider sx={ { my: 4, width: '100%' } }/>,
    } }>
      { content }
    </ReactMarkdown>
  )
}
