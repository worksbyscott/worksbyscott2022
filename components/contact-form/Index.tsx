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

                <Text css={{ margin: 0, fontSize: '1rem' }} size={'1'}>Name</Text>
                <Input placeholder="john doe" />

                <Text css={{ margin: 0, fontSize: '1rem' }} size={'1'}>Email</Text>
                <Input placeholder="example@gmail.com" />

                <Text css={{ margin: 0, fontSize: '1rem' }} size={'1'}>Subject</Text>
                <Input placeholder="subject" />

                <Text css={{ margin: 0, fontSize: '1rem' }} size={'1'}>Message</Text>
                <Input placeholder="message" />

                <Flex css={{ marginTop: "1rem", justifyContent: 'flex-end' }}>
                    <AlertDialogCancel asChild>
                        <Button type="defaultNoLine" css={{ marginRight: 25 }}>
                            Cancel
                        </Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Tooltip delayDuration={0}>
                            <TooltipTrigger asChild>
                                <Button type="featured">Send Message</Button>
                            </TooltipTrigger>
                            <TooltipContent sideOffset={5} >
                                You can't go back
                            </TooltipContent>
                        </Tooltip >

                    </AlertDialogAction>
                </Flex>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default ContactFormDialog;