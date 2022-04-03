import { styled } from '../../theme.stitches';
import { motion } from 'framer-motion'

const Flex = styled(motion.div, {
    display: "flex",
    height: "100%",
    width: "100%",
    //padding: "0 2rem",

    variants: {
        alignCenter: {
            true: {
                alignItems: "center"
            }
        },
        justifyCenter: {
            true: {
                justifyContent: "center"
            }
        },
        spaceBetween: {
            true: {
                justifyContent: "space-between"
            }
        },
        column: {
            true: {
                flexDirection: "column"
            }
        }
    }
})

export default Flex;