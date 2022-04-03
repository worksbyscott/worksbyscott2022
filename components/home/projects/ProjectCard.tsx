import { motion } from "framer-motion";
import Link from "next/link";
import { styled } from "../../../theme.stitches";
import Text from "../../text";
import Image from 'next/image'
import { AspectRatio } from "../../aspectratio/";
import Flex from "../../flex";

const CardContainer = styled(motion.div, {
    width: '100%',
    overflow: 'hidden',
    borderRadius: "16px",
    marginRight: '$8',
    display: "block",
    position: "relative",
    border: "1px solid $borderColour",
    transition: "border .3s ease-in, box-shadow .3s ease-in",

    "&:hover": {
        border: "3px solid $brand",
        boxShadow: '0px 0px 50px rgba(132, 250, 176, 0.2)'

    },

    variants: {
        active: {
            true: {
                background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.47) 0%, rgba(0, 0, 0, 0.91) 100%)',
                boxShadow: '0px 0px 70px rgba(132, 250, 176, 0.2)'
            }
        }
    }

})

const CardDetails = styled(motion.div, {
    position: "absolute",
    width: "100%",
    height: "100%",
    boxSizing: "border-box",
    padding: '$2',
    backgroundColor: "rgb(0,0,0,.35)",
    color: "$typePrimary",
    opacity: 0
})

interface IProjectCard {
    img: string,
    name: string,
    url: string
    description: string
    index?: number
}


const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

const animation = {
    initial: {
        opacity: 0,
        y: 20,
        ...transition,
    },
    animate: {
        opacity: 1,
        y: 0
    },
    exit: {
        opacity: 0,
        y: -20
    }
}

const ProjectCard = ({ img, name, url, description, index }: IProjectCard) => {
    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            variants={animation}
            transition={{
                duration: 1,
                delay: index ? index * 0.2 : 0
            }}
        >
            <Link href={url}>
                <Flex column>
                    <CardContainer
                        exit={{
                            opacity: 0,
                            x: 100
                        }}
                        transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: .7 }} whileHover={{ scale: 1.05 }}>
                        <AspectRatio.Root ratio={3 / 2}>
                            <CardDetails transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: .7 }} whileHover={{ opacity: 100 }}>
                                <Text size='4'>{name}</Text>
                                <Text size='2'>{description}</Text>
                            </CardDetails>

                            <Image src='/cipher.png' layout="fill" objectFit="cover" alt={description} />

                        </AspectRatio.Root>
                    </CardContainer>

                    <Text size='3' bold contrast css={{ margin: "1rem 0 0 0" }}>{name}</Text>
                    <Text size='1'>{description}</Text>
                </Flex>
            </Link>
        </motion.div>
    )
}

export default ProjectCard;