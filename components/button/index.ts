import { styled } from "../../theme.stitches"

import { motion } from 'framer-motion'

export const Button = styled(motion.button, {
    appearance: "none",
    userSelect: "none",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexShrink: 0,
    outline: "none",
    cursor: "pointer",
    border: "0px",
    fontFamily: "$copy",
    fontSize: "$1",
    height: "3rem",
    width: "max-content",
    padding: "$2 $3",
    borderRadius: "1rem",
    background: "$background",

    defaultVariants: {
        type: 'featured'
    },

    variants: {
        shadow: {
            true: {
                boxShadow: "0 0 16px 4px $colors$teal4,0 0 16px 4px $colors$sky4"
            }
        },
        type: {
            default: {
                color: "$buttonFont",
                background: "$buttonBackgroundNormal",
                border: "2px solid $buttonBorderNormal",

                ['svg']: {
                    borderColor: "$buttonTypeActive"
                },

                ['svg path']: {
                    stroke: "$buttonTypeActive"
                },

                "&:hover": {
                    background: "$buttonBackgroundHover",
                    borderColour: "$buttonBorderHover"
                },

                "&:focus": {
                    background: "$buttonBackgroundClick",
                    borderColour: "$buttonBorderClick"
                }
            },

            featured: {
                color: "$buttonFont",
                background: "$buttonBackgroundNormal",
                border: "2px solid $buttonBorderNormal",

                ['svg']: {
                    borderColor: "$buttonTypeActive"
                },

                ['svg path']: {
                    stroke: "$buttonTypeActive"
                },

                "&:hover": {
                    background: "$buttonBackgroundHover",
                    borderColour: "$buttonBorderHover"
                },

                "&:focus": {
                    background: "$buttonBackgroundClick",
                    borderColour: "$buttonBorderClick"
                }
            },

            featuredNoLine: {
                color: "$buttonTypeActive",
                background: "$buttonBackgroundNormal",
                border: "2px solid $buttonBorderNormal",

                ['svg']: {
                    borderColor: "$buttonTypeActive"
                },

                ['svg path']: {
                    stroke: "$buttonTypeActive"
                },

                "&:hover": {
                    background: "$buttonBackgroundHover",
                    borderColour: "$buttonBorderHover"
                },

                "&:focus": {
                    background: "$buttonBackgroundClick",
                    borderColour: "$buttonBorderClick"
                }
            },

            defaultNoLine: {
                color: "$buttonTypeActive",
                background: "$none",
                border: "none",

                ['svg']: {
                    borderColor: "$button2TypeActive"
                },

                ['svg path']: {
                    stroke: "$button2TypeActive"
                },

                "&:hover": {
                },

                "&:focus": {
                }
            },


        }
    },
}) 