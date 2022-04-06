import type { NextPage } from 'next'
import Container from '../../components/container'

import Text, { Strong } from '../../components/text'
import { Button } from '../../components/button';
import Card from '../../components/card';
import Flex from '../../components/flex';
import InlineCode from '../../components/inlinecode';
import CaptionImage from '../../components/captionImage';
import { HighlightedCodeText } from '../../components/code';

const codeString = `
    import { prism } from 'prism-animation'
`;


const About: NextPage = () => {
    return (
        <>
            <Container>
                <Flex spaceBetween alignCenter>
                    <Flex column>
                        <Text contrast font="title" bold size="5">Colin Prior E-Commerce Store</Text>
                        <Text>Shopify, GSAP, Stencil</Text>
                    </Flex>
                    <Button shadow as={"a"} href="https://colinprior.co.uk/">Visit Project</Button>
                </Flex>

                <Card title="Disclaimer" style="warning">
                    <Text style="warning" >This project is was commisioned by Colin Prior to PingCreates. I do not own the content or property of the site but has lead developer on the project.</Text>
                </Card>
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="test" />
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="test" />
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="test" />

            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="5" contrast bold></Text>
                <Text >Lorem Ipsum is <Strong>simply dummy </Strong>text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </Text>
            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>Disscussion</Text>
                <Text >Lorem <InlineCode>test</InlineCode>Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets </Text>
            </Container>

            <Container>
                <Card noPadding title="Installing Prims">

                    <HighlightedCodeText codeString={codeString} language="jsx" />
                </Card>
            </Container>
        </>
    )

}

export default About