import { AnimatePresence } from 'framer-motion'
import React, { FC, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'
import { Heading, Paragraph } from 'theme-ui'

import { Backdrop, CloseButton, MotionModal } from '~/components/organisms/modal/modal.styles'

interface Props {
  isToggled: boolean
  setToggled: () => void
  data?: {
    title: string
    message?: string
  }
  children?: React.ReactNode
}

const ModalComponent: FC<Props> = ({ isToggled, setToggled, data, children }) => {
  return (
    <AnimatePresence>
      { isToggled && (
        <>
          <Backdrop/>
          <MotionModal
            initial={ { y: 10, x: '-50%', opacity: 0 } }
            animate={ { y: 50, opacity: 1 } }
            exit={ { y: 100, opacity: 0 } }
          >
            <CloseButton onClick={ setToggled } />
            { data?.title && <Heading>{ data.title }</Heading> }
            { data?.message && <Paragraph>{ data.message }</Paragraph> }
            { children }
          </MotionModal>
        </>
      ) }
    </AnimatePresence>
  )
}

export const Modal: FC<Props> = (props) => {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    return () => setMounted(false)
  }, [])

  return mounted
    ? createPortal(
      <ModalComponent { ...props } />,
      document.querySelector('#modal-portal')!
    )
    : null
}
