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
                <ProjectCard name="Prism Animation" url="/work/prism" description="Javascipt animation library" img="" index={1} />
                <ProjectCard name="Colin Prior" url="/work/colin-prior" description="E-Commerce Store" img="" index={2} />
                <ProjectCard name="Dealer's Choice" url="/work/dealers" description="NFT presale site" img="" index={3} />
                <ProjectCard name="Cella FM" url="/work/cella" description="Community Radio Statio" img="" index={4} />

            </ProjectsContainer>
        </Container>
    )

}

export default Work