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
                        >Dealers Choice</Text>
                        <Text >NFT Presale Site</Text>
                    </Flex>
                    <Button
                        css={{
                            "@bp1": {
                                margin: '2rem 0 0 0'
                            },
                        }}
                        shadow
                        as={"a"}
                        href="https://dealerschoicenft.com">View Site</Button>
                </Flex>
            </Container>
            <Container>
                <CaptionImage nameString="/dealer1.png" />
            </Container>
            <Container css={{ margin: "$8 auto" }}>
                <Text size="4" contrast bold>Background</Text>
                <Text >Dealer’s Choice is a NFT collection of 10,000 5-card combinations sorted programmatically relative to their frequency in poker. On purchase, a Dealer’s Choice NFT will be added to the wallet containing a five-card combination matching the probability of poker. There is even a small chance of getting a royal Flush!</Text>
            </Container>
            <Container>
                <CaptionImage caption="Landing page - Minting Screen" nameString="/dealer3.png" />
            </Container>
            <Container>
                <Card title="My Approach">
                    <Text >My approach to site design draws inspiration from retro Macintosh operating system design to play to the Web3 community and their fascination with the pixel art style art that covers the mainstream NFT market. <br /> <br />
                        This project was extremely rewarding – I found the development process fascinating, learning the intricacies of Web3 technology during the uprising of the Metaverse. Dealer’s Choice will announce its presale date in the near future, so stay tuned at @dealerschoicenft if you're interested in grabbing one for yourself. </Text>
                </Card>
            </Container>
            <Container>
                <CaptionImage caption="Landing page - About window" nameString="/dealer2.png" />
            </Container>
        </>
    )

}

export default Work