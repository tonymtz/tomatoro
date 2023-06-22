import useTranslation from 'next-translate/useTranslation'
import React from 'react'
import { Grid, Heading } from 'theme-ui'

import { BackCta } from '~/components/atoms/back-cta'
import { Screen } from '~/components/atoms/screen'
import { UpdatesList } from '~/components/molecules/updates-list'
import { Page } from '~/components/templates/page'
import { getUpdates } from '~/utils/cms.api'

export async function getServerSideProps () {
  const updates = await getUpdates()
  const sortedUpdates = updates.sort((a, b) => b.id - a.id)
  return { props: { updates: sortedUpdates } }
}

export default function Terms ({ updates }: { updates: Update[] }) {
  const { t } = useTranslation('pages')

  return (
    <Page subtitle={ t('news.title') }>
      <Screen>
        <Grid variant="contained" sx={ { justifyItems: 'start' } }>
          <Heading as="h1">{ t('news.title') }</Heading>

          <UpdatesList updates={ updates }/>

          <BackCta/>
        </Grid>
      </Screen>
    </Page>
  )
}
