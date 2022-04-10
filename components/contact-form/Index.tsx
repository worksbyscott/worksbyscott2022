import React from "react"
import { styled } from "../../theme.stitches"
import { Button } from "../button"
import { AlertDialog, AlertDialogAction, AlertDialogContent, AlertDialogTrigger, AlertDialogTitle, AlertDialogDescription, AlertDialogCancel } from "../dialog/Index"
import Flex from "../flex"
import { Tooltip, TooltipContent, TooltipTrigger } from "../tooltip"
import Text from '../text';
import InlineCode from "../inlinecode"

interface ContactForm {
    children: React.ReactNode
}

const Input = styled('input', {
    all: 'unset',
    width: '100%',
    flex: '1',
    display: 'inline',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    boxSizing: 'border-box',
    padding: '.4rem 1rem',
    fontFamily: "$copy",
    fontWeight: 500,
    fontSize: '1rem',
    lineHeight: 1.9,
    background: "$slate1",
    color: 'white',
    border: `1px solid $cardStandardBorder`,
    margin: '.4rem 0',

    '&:focus': { boxShadow: `0 0 0 2px $teal8` },
});


const ContactFormDialog = (props: ContactForm) => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                {props.children}
            </AlertDialogTrigger>
            <AlertDialogContent >
                <AlertDialogTitle>Contact me</AlertDialogTitle>
                <AlertDialogDescription>
                    Are you looking to hiring a Front-end Developer for your next project, expand your freelance roster or just want to talk Web Development contact me. Email <InlineCode>info@worksbyscott.uk</InlineCode> or fill in the form below.
                </AlertDialogDescription>

                <Flex css={{ marginTop: "1rem", justifyContent: 'flex-end' }}>
                    <AlertDialogCancel asChild>
                        <Button type="featuredNoLine" css={{ marginRight: 25 }}>
                            Cancel
                        </Button>
                    </AlertDialogCancel>
                </Flex>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ContactFormDialog;