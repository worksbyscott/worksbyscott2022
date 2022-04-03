import { styled } from "@stitches/react"
import Container from "../container"
import Text from '../text'

const FooterContainer = styled('div', {
    margin: "4rem 0",
    borderTop: "1px solid $cardStandardBorder",
    paddingTop: "3rem "
})

const Footer = () => {
    return (
        <FooterContainer>
            <Container>
                <Text>This is a test</Text>
            </Container>
        </FooterContainer>

    )
}

export default Footer;