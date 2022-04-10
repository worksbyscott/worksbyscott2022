import { styled } from "../../theme.stitches";

import { motion } from 'framer-motion'
import Flex from "../flex";

const IntroductionWrapper = styled('div', {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
})

const TitleText = styled('h2', {
    fontFamily: '$copy',
    color: 'white',
    fontSize: '2.5rem',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: "translate(-50%, -50%)"
})

const convertLine = (line: string) => {
    return line.split('').map((char, index) => (
        <motion.span
            key={index + "intro"}
            initial={{
                opacity: 0,
                x: 40
            }}
            animate={{
                opacity: 1,
                x: 0
            }}
            exit={{
                opacity: 0,
                x: -40
            }}


            transition={{
                ...transition,
                delay: (index * 0.05) + .5
            }}
        >
            {char}
        </motion.span>
    ))
}

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const Introduction = () => {
    return (
        <IntroductionWrapper key="intro-wrapper">
            <TitleText key="intro-title">{convertLine("worksbyscott.uk")}</TitleText>
        </IntroductionWrapper>
    )
}

export default Introduction;