import { AnimatePresence, motion, useElementScroll, useViewportScroll } from "framer-motion";
import { useRef } from "react";
import { styled } from "../../theme.stitches";
import Container from "../container";
import Flex from "../flex";
import TitleBlock from "./JobTitle";
import ProjectCard from "./projects/ProjectCard";
import Text, { Strong } from '../text'
import Card from "../card";
import { Button } from "../button";
import InlineCode from "../inlinecode";

const ProjectsContainer = styled(Container, {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "$3",

    "@bp1": {
        display: 'flex',
        flexDirection: "column"
    },
})

const ProjectsInnerContainer = styled(motion.div, {
    display: "inline-flex",
    flexDirection: "row",
    flexWrap: "wrap",

    gap: "$4",
    overflow: "hidden",

    "@bp1": {
        flexDirection: "column",
    },
})

const HomeBlock = () => {

    const { scrollYProgress } = useViewportScroll()

    return (
        <>
            <Container>
                <TitleBlock />
            </Container>
            <ProjectsContainer>
                <ProjectCard name="Colin Prior" img="/cp9.png" url="/work/colin" description="E-commerce Store" index={0} />
                <ProjectCard name="Dealer's Choice" img="/dealer2.png" url="/work/dealer" description="NFT Presale site" index={1} />
            </ProjectsContainer>

            <Container css={{ marginBottom: "$6 " }}>
                <Card title="About Me">
                    <Text>I’m Scott Templeton, and I've been a Front-end Engineer at the Scottish digital agency Ping Creates since June of 2021. I joined the team at Ping after graduating from Edinburgh Napier University with a Honours in Web Design and Development w/ User Experience Design.<br /><br /> I have a keen interest in the development of web-based user experiences which harmonise beautiful, elegant design with intractability. Currently, my main focus is the production of scalable, high quality design system solutions for a diverse client base at Ping.</Text>
                </Card>
            </Container>

            <Container>
                <Card style="branded" title={"Work with Me"}>
                    <Text>Are you looking to hiring a Front-end Developer for your next project, expand your freelance roster or just want to talk Web Development. Contact me at <InlineCode>info@worksbyscott.uk</InlineCode> or message below. <br></br><br></br>  Public CV excludes personal some details.</Text>
                    <Flex css={{ gap: "$2" }}>
                        <Button css={{ marginTop: "$2" }}>Download CV</Button>
                        <Button type="defaultNoLine" css={{ marginTop: "$2" }}>Contact Me</Button>

                    </Flex>
                </Card>
            </Container>

        </>
    )
}

export default HomeBlock;