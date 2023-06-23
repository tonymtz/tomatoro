import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import React, { FC } from 'react'
import { Flex, Heading, NavLink, Text } from 'theme-ui'

import { footerData } from './footer.config'
import { Container, section, Section } from './footer.styles'

interface Props {
  version?: string
}

export const Footer: FC<Props> = ({ version }) => {
  const { t } = useTranslation('common')

  return (
    <Container as="footer">
      <Flex sx={ section }>
        <Section>
          <NavLink href="/">
            <Heading as="h3">Tomatoro</Heading>
          </NavLink>
          <Text variant="small">
            { t('footer.lineOne') }
            <br/>
            { t('footer.lineTwo') }
          </Text>
        </Section>

        { footerData.links.map((linkGroup) => (
          <Section key={ linkGroup.key }>
            <Heading as="h4">{ t(`footer.groups.${ linkGroup.key }.title`) }</Heading>
            { linkGroup.items.map((item) => (
              <NavLink key={ item.key } as={ Link } href={ item.href } variant="footer">
                <Text variant="small">{ t(`footer.groups.${ linkGroup.key }.items.${ item.key }`) }</Text>
              </NavLink>
            )) }
          </Section>
        )) }
      </Flex>
      <Flex sx={ section }>
        <Text variant="small" as="span">
          { t('footer.copyright', { currentYear: footerData.currentYear }) }
        </Text>

        { version && (
          <Text variant="small" sx={ { textAlign: ['left', 'right'] } }>
            v{ version }
          </Text>
        ) }
      </Flex>
    </Container>
  )
}
