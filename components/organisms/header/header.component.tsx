import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'
import { Close, Flex, Grid, MenuButton, NavLink, Text } from 'theme-ui'
import { useBoolean } from 'usehooks-ts'

import { LanguageSelector } from '~/components/molecules/language-selector'
import logoTomatoro from '~/public/svg/logo-tomatoro.svg'
import { LINKS } from '~/utils/config'

import { Container, Heading, MotionNav } from './header.styles'

const menuItems = [
  { key: 'home', href: LINKS.HOME },
  { key: 'howItWorks', href: LINKS.HOW_IT_WORKS },
  { key: 'contact', href: LINKS.CONTACT },
]

const menuVariants = {
  opened: {
    top: 0,
    transition: {
      when: 'beforeChildren',
      staggerChildren: 0.5,
    },
  },
  closed: {
    top: '-90vh',
  },
}

export const Header = () => {
  const { t } = useTranslation('common')
  const { setFalse, setTrue, value } = useBoolean(false)

  return (
    <Container as="header">
      <Flex sx={ {
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '1rem',
        margin: '0 auto',
        maxWidth: '768px',
        width: '100%',
      } }>
        <Grid sx={{ gridTemplateColumns: ['1fr auto auto', '1fr auto auto'], width: '100%' }}>
          <TomatoroLogo />
          <LanguageSelector />
          <MenuButton
            aria-label={ t('header.toggle') }
            onClick={ () => setTrue() }
          />
        </Grid>
      </Flex>

      <MotionNav
        initial={ false }
        variants={ menuVariants }
        animate={ value ? 'opened' : 'closed' }
      >
        <Flex sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          margin: '0 auto',
          maxWidth: '768px',
          width: '100%',
        }}>
          <Grid sx={{ gridTemplateColumns: ['1fr auto auto', '1fr auto auto'], width: '100%' }}>
            <TomatoroLogo />
            <LanguageSelector />
            <Close onClick={ () => setFalse() }/>
          </Grid>
        </Flex>
        <Flex sx={{
          alignItems: 'center',
          backgroundColor: 'white',
          gap: '1rem',
          flexDirection: 'column',
          padding: '1.5rem 0',
          borderBottom: '1px solid #eee',
          borderTop: '1px solid #eee',
        }}>
          { menuItems.map((item) => (
            <NavLink key={ item.key } as={ Link } href={ item.href } onClick={ () => setFalse() }>
              <Text>
                { t(`header.items.${ item.key }`) }
              </Text>
            </NavLink>
          )) }
          <Text sx={ { cursor: 'pointer', fontWeight: 'bold' } } onClick={ () => setFalse() }>
            { t('header.items.close') }
          </Text>
        </Flex>
      </MotionNav>
    </Container>
  )
}

const TomatoroLogo: FC = () => {
  const { t } = useTranslation('common')

  return (
    <Link href="/" title="Go to Tomatoro Home">
      <Image
        src={ logoTomatoro }
        alt={ t('header.logoAlt') }
        width={ 150 }
        height={ 30 }
        aria-hidden
      />
      <Heading as="h1">{ t('header.title') }</Heading>
    </Link>
  )
}
