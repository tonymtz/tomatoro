import { ThemeUIStyleObject } from '@theme-ui/css'
import useTranslation from 'next-translate/useTranslation'
import React, { FC, useState } from 'react'
import { Button, Flex, Heading, Label, Textarea, Text, Input, Card } from 'theme-ui'
import { useBoolean } from 'usehooks-ts'

import { postFeedback, postSubscription } from '~/utils/cms.api'
import { track } from '~/utils/tracking.utils'

type FeedbackStatus = 'feedback' | 'subscribe' | 'success'

const fixedStyles: ThemeUIStyleObject = {
  position: 'fixed',
  bottom: '2rem',
  right: '2rem',
  zIndex: 10,
}

export const FeedbackCta = () => {
  const { t } = useTranslation('common')
  const { toggle: toggleModal, value: isModalOpen } = useBoolean(false)
  const [state, setState] = useState<FeedbackStatus>('feedback')
  const { setValue: setIsBusy, value: isBusy } = useBoolean(false)
  const { setValue: setError, value: isError } = useBoolean(false)

  const onCtaClick = () => {
    toggleModal()
    track('$feedback_cta_clicked')
  }

  const onFeedbackSubmit = async (feedback: Feedback) => {
    track('$feedback_submitted')
    setIsBusy(true)

    try {
      await postFeedback(feedback)
      setError(false)
      setState('subscribe')
    } catch (error) {
      setError(true)
    }
    setIsBusy(false)
  }

  const onSubscribeSubmit = async (subscription: Subscription) => {
    track('$subscription_submitted')
    setIsBusy(true)

    try {
      await postSubscription(subscription)
      setError(false)
      setState('success')
    } catch (error) {
      setError(true)
    }
    setIsBusy(false)
  }

  const commonProps: CommonProps = { isBusy, isError }

  return (
    <>
      <Button
        onClick={ () => {
          onCtaClick()
        } }
        sx={ fixedStyles }
      >
        { t('feedbackCta') }
      </Button>
      { isModalOpen && (
        <Card
          sx={ {
            ...fixedStyles,
            bottom: '5rem',
            height: '16rem',
            width: '340px',
            justifyContent: 'space-evenly',
          } }>

          { state === 'feedback' && (
            <FeedbackForm
              { ...commonProps }
              onSubmit={ (feedback: Feedback) => onFeedbackSubmit(feedback) }
            />
          ) }

          { state === 'subscribe' && (
            <SubscriptionForm
              { ...commonProps }
              onSubmit={ (subscription: Subscription) => onSubscribeSubmit(subscription) }
            />
          ) }

          { state === 'success' && (<FinalScreen/>) }
        </Card>
      ) }
    </>
  )
}

interface CommonProps {
  isBusy: boolean
  isError: boolean
}

const FeedbackForm: FC<
  CommonProps & {
    onSubmit: (feedback: Feedback) => void
  }
> = ({ isBusy, isError, onSubmit }) => {
  const { t } = useTranslation('common')
  const [content, setContent] = useState<string>('')

  return (
    <>
      <Label htmlFor="comment" sx={ { justifyContent: 'flex-end' } }>
        { t('feedback.title') }
      </Label>
      <Textarea
        name="comment"
        id="comment"
        rows={ 3 }
        value={ content }
        placeholder={ t('feedback.placeholder') }
        onChange={ (e) => setContent(e.target.value) }
        maxLength={ 420 }
        autoFocus
      />
      <Label sx={ { justifyContent: 'flex-end' } }>
        { t('feedback.rating') }
      </Label>
      <Flex sx={ { gap: 2, justifyContent: 'flex-end' } }>
        { isError && (
          <Text variant="small" sx={ { textAlign: 'right' } }>
            { t('feedback.errorLineOne') }<br/>
            { t('feedback.errorLineTwo') }
          </Text>
        ) }
        <Button
          disabled={ isBusy }
          onClick={ () => onSubmit({ content, liked: true }) }
          title={ t('feedback.like') }
        >
          👍
        </Button>
        <Button
          disabled={ isBusy }
          onClick={ () => onSubmit({ content, liked: false }) }
          title={ t('feedback.dislike') }
        >
          👎
        </Button>
      </Flex>
    </>
  )
}

const SubscriptionForm: FC<
  CommonProps & {
    onSubmit: (subscription: Subscription) => void
  }
> = ({ isBusy, isError, onSubmit }) => {
  const { t } = useTranslation('common')
  const [email, setEmail] = useState<string>('')

  return (
    <>
      <Heading as="h1" sx={ { mb: 0, textAlign: 'center' } }>
        { t('subscribe.title') }
      </Heading>
      <Text sx={ { textAlign: 'center' } }>
        { t('subscribe.content') }
      </Text>
      <Flex sx={ { gap: 2 } }>
        <Input
          value={ email }
          onChange={ (e) => setEmail(e.target.value) }
          placeholder={ t('subscribe.placeholder') }
          autoFocus
        />
        <Button
          disabled={ isBusy }
          onClick={ () => onSubmit({ email, marketing: true }) }
        >
          { t('subscribe.cta') }
        </Button>
      </Flex>
      { isError && (
        <Text variant="small" sx={ { textAlign: 'right' } }>
          { t('subscribe.errorLabel') }
        </Text>
      ) }
    </>
  )
}

const FinalScreen: FC = () => {
  const { t } = useTranslation('common')

  useState(() => {
    track('$thank_you_screen')
  })

  return (
    <>
      <Heading as="h1" sx={ { mb: 0, textAlign: 'center' } }>
        { t('subscribeSuccess.title') }
      </Heading>
      <Text sx={ { textAlign: 'center' } }>
        { t('subscribeSuccess.content') }
      </Text>
    </>
  )
}
