import { StyledComponentType } from '@stitches/react/types/styled-component';
import React from 'react';
import { styled } from '../../../theme.stitches'
import { motion } from 'framer-motion';
//import Icon from '../../icons/Logo'

import Icon from '../../../assets/Logo.svg'

const IconContainer = styled(motion.div, {
    background: '$background',
    border: '1px solid $button2BorderNormal',
    boxSizing: 'border-box',
    borderRadius: '8px',
    padding: "$1",
    width: "3rem",
    height: "3rem",
    transition: "all .2s ease-in",
    display: "flex",
    alignContent: "center",
    position: 'relative',

    ['svg']: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: "translate(-50%, -50%)",
        width: '24px',
        height: '24px',
    },

    "&:hover": {
        borderWidth: "2px",
        borderColor: "$buttonBorderHover",
        background: "$buttonBackgroundHover"
    },

    "&:clicked": {
        borderColor: "$buttonBorderClicked"
    }
})

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


const Logo: React.FC = () => {
    return (
        <IconContainer
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 1,
            }}
            whileHover={{
                scale: 1.05
            }}
            transition={transition}
        >
            <Icon />
        </IconContainer>
    )

}

export default Logo;

