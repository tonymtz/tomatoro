import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import { Close } from 'theme-ui'

export const Backdrop = styled(motion.div)`
  background: rgba(170, 170, 170, 0.18);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 99;
`

export const MotionModal = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate3d(-50%, 0, 0);
  z-index: 9999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 420px;
  height: auto;
  padding: 2em 3em;
  border: 1px solid #ddd;
  background: #fff;
`

export const CloseButton = styled(Close)`
  position: absolute;
  top: 0.5em;
  right: 0.5em;
`
