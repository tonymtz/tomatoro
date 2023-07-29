import Image from 'next/image'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'
import { Close, Flex, Grid, MenuButton, NavLink, Text } from 'theme-ui'
import { useBoolean } from 'usehooks-ts'

import { LanguageSelector } from '~/components/molecules/language-selector'
import logoTomatoroDark from '~/public/svg/logo-tomatoro-dark.svg'
import logoTomatoro from '~/public/svg/logo-tomatoro.svg'
import { useSettingsStore } from '~/stores/settings'
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
        backgroundColor: 'background',
      } }>
        <Grid sx={{ gridTemplateColumns: ['1fr auto', '1fr auto'], width: '100%' }}>
          <TomatoroLogo />
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
        sx={{
          backgroundColor: 'background',
        }}
      >
        <Flex sx={{
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '1rem',
          margin: '0 auto',
          maxWidth: '768px',
          width: '100%',
          backgroundColor: 'background',
        }}>
          <Grid sx={{ gridTemplateColumns: ['1fr auto', '1fr auto'], width: '100%' }}>
            <TomatoroLogo />
            <Close onClick={ () => setFalse() }/>
          </Grid>
        </Flex>
        <Flex sx={{
          alignItems: 'center',
          backgroundColor: 'background',
          gap: '1rem',
          flexDirection: 'column',
          padding: '1.5rem 0',
          borderBottom: '1px solid',
          borderTop: '1px solid',
          borderColor: '#eee',
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
          <LanguageSelector />
        </Flex>
      </MotionNav>
      {/*<ThemeSelector />*/}
    </Container>
  )
}

const TomatoroLogo: FC = () => {
  const { t } = useTranslation('common')
  const [theme] = useSettingsStore((state) => [state.themePreference])

  return (
    <Link href="/" title="Go to Tomatoro Home">
      <Image
        src={ theme === 'dark' ? logoTomatoroDark : logoTomatoro }
        alt={ t('header.logoAlt') }
        width={ 150 }
        height={ 30 }
        aria-hidden
      />
      <Heading as="h1">{ t('header.title') }</Heading>
    </Link>
  )
}
