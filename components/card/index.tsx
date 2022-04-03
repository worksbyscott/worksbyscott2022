import { styled } from "../../theme.stitches";
import Text from '../text'

import InfoIcon from '../../assets/Info.svg';
import WarningIcon from '../../assets/Alert.svg';
import Flex from "../flex";
import Icon from "../icons/Logo";
import { motion } from 'framer-motion'

const CardContainer = styled(motion.div, {
    width: "100%",
    border: "2px solid $cardBorder",
    background: "$cardBackground",
    borderRadius: "16px",
    margin: "$4 0",
    oveflow: "hidden",

    variants: {
        type: {
            branded: {
                border: "2px solid $cardBorder",
                background: "$cardBackground",
            },
            standard: {
                border: "2px solid $cardStandardBorder",
                background: "$cardStandardBackground",
            },
            warning: {
                border: "2px solid $cardWarningBorder",
                background: "$cardWarningBackground",

            },
        }
    },

    defaultVariants: {
        type: "standard"
    }
})

const CardInnerContainer = styled('div', {
    padding: "$4",
    oveflow: "hidden",

    variants: {
        noPadding: {
            true: {
                padding: '0'
            }
        }
    }
})

const CardTitle = styled('div', {
    width: "100%",
    padding: "$2 $3",
    borderTopLeftRadius: "1rem",
    borderTopRightRadius: "1rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    ['svg']: {
        width: '1.75rem',
        height: "1.75rem"
    },

    ['svg path']: {
        fill: "none"
    },

    variants: {
        type: {
            branded: {
                borderBottom: "2px solid $cardBorder",
                background: "$cardBackground",
                ['svg circle']: {
                    stroke: "$teal10"
                },

                ['svg path']: {
                    stroke: "$teal10"
                },
            },
            standard: {
                borderBottom: "2px solid $cardStandardBorder",
                background: "$cardStandardBackground",
                ['svg circle']: {
                    stroke: "$typeSecondary"
                },

                ['svg path']: {
                    stroke: "$typeSecondary"
                },
            },
            warning: {
                borderBottom: "2px solid $cardWarningBorder",
                background: "$cardWarningBackground",
                ['svg circle']: {
                    stroke: "$red10"
                },

                ['svg path']: {
                    stroke: "$red10"
                },

            },
        }
    },

    defaultVariants: {
        type: "standard"
    }
})

interface CardProps {
    style?: "branded" | "standard" | "warning",
    noPadding?: boolean,
    title?: React.ReactNode,
    as?: React.ElementType;
    children: React.ReactNode;
}

const Card = (props: CardProps) => {

    const { as: Component, style, title, children, noPadding, ...rest } = props

    let Icon = InfoIcon;

    if (style == 'warning')
        Icon = WarningIcon

    return (
        <CardContainer
            initial={{
                opacity: 0,
                y: 20
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 1
            }}
            as={Component} type={style} {...rest}>
            {title && (
                <CardTitle type={style} >
                    <Text style={style} css={{ margin: 0 }}>{title}</Text>
                    <Icon />

                </CardTitle>
            )}
            <CardInnerContainer noPadding={noPadding}>
                {children}
            </CardInnerContainer>
        </CardContainer>
    )

}

export default Card