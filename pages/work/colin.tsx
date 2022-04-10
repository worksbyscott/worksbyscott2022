import type { NextPage } from 'next'
import Container from '../../components/container'
import { styled } from '../../theme.stitches'

import { motion } from "framer-motion";
import Link from "next/link";
import Image from 'next/image'
import Text, { Strong } from '../../components/text'
import ProjectCard from '../../components/home/projects/ProjectCard';
import { Button } from '../../components/button';
import Card from '../../components/card';
import Flex from '../../components/flex';
import InlineCode from '../../components/inlinecode';
import CaptionImage from '../../components/captionImage';
import { HighlightedCodeText } from '../../components/code';



const Work: NextPage = () => {
    return (
        <>
            <Container>
                <Flex spaceBetween
                    css={{
                        alignContent: 'center',
                        "@bp1": {
                            flexDirection: "column",
                            alignContent: 'normal',
                            marginBottom: "4rem"
                        },
                    }}
                >
                    <Flex column>
                        <Text contrast font="title" bold size="5"
                            css={{
                                "@bp1": {
                                    margin: 0
                                },
                            }}
                        >Colin Prior</Text>
                        <Text >Shopify E-commerce store </Text>
                    </Flex>
                    <Button
                        css={{
                            "@bp1": {
                                margin: '2rem 0 0 0'
                            },
                        }}
                        shadow
                        as={"a"}
                        href="https://colinprior.co.uk">View Site</Button>
                </Flex>
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="/cp1.png" />
                <Card title="Disclaimer" style='warning'>
                    <Text css={{ color: '$red10' }} >This project was conducted at PingCreates and I do not own all the content of this site. Scott Templeton played a primary role in the development of the Colin Prior site. If your intrested in making a site similar to this? Please visit pingcreates.com!</Text>

                </Card>
            </Container>

            <Container css={{ margin: "$8 auto" }}>
                <Text size="4" contrast bold>Background</Text>
                <Text >Colin Prior is known as one of the world’s most respected landscape photographers. Born in Glasgow, his proximity to the Scottish Highlands shaped his passion for the outdoors and fostered his interest in photography. His photographs capture sublime moments of light and land, which are the result of meticulous planning and preparation and often take years to achieve. Prior is a photographer who seeks out patterns in the landscape and the hidden links between reality and the imagination.</Text>
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="/cp8.png" />
            </Container>
            <Container css={{ margin: "$8 auto" }}>
                <Text size="4" contrast bold>The Goal</Text>
                <Text >Colin approached Ping Creates to revamp his existing ecommerce site to meet modern web standards whilst improving the visual consistency across his brand. To accomplish this goal we migrated his site from WooCommerce to Shopify by constructing a bespoke liquid theme from the group using custom Web Components. Ultimately, Prior’s website now provides a consistent visual experience, promoting and displaying Colin’s photography to the highest level. </Text>
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="/cp9.png" />
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="/cp2.png" />
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="/cp3.png" />
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="/cp4.png" />
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="/cp5.png" />
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="/cp6.png" />
            </Container>
            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="/cp7.png" />
            </Container>
        </>
    )

}

export default Work