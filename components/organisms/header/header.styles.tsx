import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Flex, Heading as _Heading } from 'theme-ui'

export const Container = styled(Flex)`
  background-color: background;
  border-bottom: 1px solid background;
  position: sticky;
  align-items: center;
  top: 0;
  z-index: 1;
`

export const Heading = styled(_Heading)`
  display: none;
`

export const MotionNav = styled(motion.nav)`
  height: 200px;
  width: 100vw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: column;
  z-index: auto;
`
