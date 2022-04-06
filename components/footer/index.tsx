import { styled } from "@stitches/react"
import Container from "../container"
import Flex from "../flex"
import { EmailIcon, GithubIcon } from "../icon/Icon"
import Text from '../text'
import Link from 'next/link'

const FooterContainer = styled('div', {
    margin: "4rem 0",
    borderTop: "1px solid $cardStandardBorder",
    paddingTop: "3rem "
})

const IconWrapper = styled('div', {
    position: 'relative',
    ['svg']: {
        stroke: 'white'
    }
})

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Flex alignCenter spaceBetween justifyCenter>
                    <Text>© worksbyscott.uk</Text>

                </Flex>
            </Container>
        </FooterContainer>

    )
}

export default Footer;