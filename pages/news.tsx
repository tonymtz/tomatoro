import React from 'react'
import { Grid, Heading, Paragraph } from 'theme-ui'

import { Screen } from '~/components/atoms/screen'
import { Page } from '~/components/templates/page'
import { getUpdates } from '~/utils/cms.api'

export async function getServerSideProps () {
  const updates = await getUpdates()
  const sortedUpdates = updates.sort((a, b) => b.id - a.id)
  return { props: { updates: sortedUpdates } }
}

export default function Terms ({ updates }: { updates: Update[] }) {
  return (
    <Page title="News">
      <Screen>
        <Grid variant="contained">
          <Heading as="h1">News</Heading>

          { updates.map((update) => (
            <div key={ update.id }>
              <Heading as="h4">
                { update.attributes.title }
              </Heading>
              <Paragraph>
                { update.attributes.content }
              </Paragraph>
            </div>
          )) }
        </Grid>
      </Screen>
    </Page>
  )
}
