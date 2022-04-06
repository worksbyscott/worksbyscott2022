import { StyledComponentType } from '@stitches/react/types/styled-component';
import React from 'react';
import { styled } from '../../../theme.stitches'
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import Flex from '../../flex';
import HomeIcon from '../../../assets/Home.svg'
import {
    Tooltip,
    Provider,
    TooltipTrigger,
    TooltipContent,
    StyledContent
} from "../../tooltip"
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Link from 'next/link';
import { DropdownMenu, DropdownMenuArrow, DropdownMenuContent, DropdownMenuItem } from '../../dropdown';
import { DropdownMenuTrigger } from '@radix-ui/react-dropdown-menu';
import { log } from 'console';


const ToolContainer = styled(motion.div, {
    width: '2.75rem',
    height: '2.75rem',
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all .3s ease-in",

    backgroundColor: "$button2BackgroundNormal",
    border: "1px solid $button2BorderNormal",

    borderRadius: ".5rem",

    ['svg']: {
        zIndex: 12,
        transition: "all .2s ease-in",
    },

    ['svg path']: {
        transition: "all .2s ease-in",
        fill: '$button2BackgroundNormal',
        stroke: '$button2BorderNormal',
    },
    "&:hover": {
        border: "2px solid $buttonBorderHover",
        background: "$buttonBackgroundHover",
        boxShadow: '0px 0px 20px rgba(132, 250, 176, 0.2)',


        ['svg path']: {
            fill: '$buttonBackgroundHover',
            stroke: '$buttonTypeState',
        },
    },

    variants: {
        active: {
            true: {
                border: "2px solid $buttonBorderClick",
                background: "$buttonBackgroundClick",

                ['svg path']: {
                    fill: '$buttonBackgroundClick',
                    stroke: '$buttonTypeActive',
                },
            }
        }
    }
})

const ActiveTool = styled(motion.div, {
    backgroundColor: '$borderGray',
    width: '2.75rem',
    height: '2.75rem',
    borderRadius: "8px",
    position: 'fixed',
    zIndex: 10

})

interface ToolBarProps {
    url: string,
    tooltip: string,
    children: React.ReactNode
}

const ToolBarButton = ({ url, tooltip, children }: ToolBarProps) => {
    const router = useRouter();

    const isActive = () => router.pathname == url || (router.pathname.includes('work') && url == '/work')


    return (
        <Tooltip delayDuration={0}>
            <TooltipTrigger asChild>
                {url == 'none' ? (
                    <>
                        <ToolContainer
                            whileHover={{
                                scale: 1.05
                            }}
                            active={isActive()}>
                            {children}
                        </ToolContainer>
                    </>
                ) : (
                    <>
                        <Link href={url}>
                            <ToolContainer
                                whileHover={{
                                    scale: 1.05
                                }}
                                active={isActive()}>
                                {children}
                            </ToolContainer>
                        </Link>
                    </>
                )}

            </TooltipTrigger>
            <TooltipContent sideOffset={5} >
                {tooltip}
            </TooltipContent>
        </Tooltip >
    )
}

export default ToolBarButton;