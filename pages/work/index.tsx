import { motion } from 'framer-motion'
import type { NextPage } from 'next'
import Container from '../../components/container'
import Flex from '../../components/flex'
import ProjectCard from '../../components/home/projects/ProjectCard'
import Text from '../../components/text'

import { styled } from '../../theme.stitches'

const ProjectsContainer = styled(motion.div, {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "$3",

    "@bp1": {
        display: 'flex',
        flexDirection: "column"
    },
})

const Work: NextPage = () => {
    return (
        <Container>
            <ProjectsContainer>
                <ProjectCard name="Prism Animation" url="/work/prism" description="Javascipt animation library" img="/prism1.png" index={1} />
                <ProjectCard name="Colin Prior" url="/work/colin" description="E-Commerce Store" img="/cp9.png" index={2} />
                <ProjectCard name="Dealer's Choice" url="/work/dealer" description="NFT presale site" img="/dealer2.png" index={3} />

            </ProjectsContainer>
        </Container>
    )

}

export default Work