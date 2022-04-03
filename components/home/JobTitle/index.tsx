import Container from "../../container"
import Text from '../../text'

import { styled } from "../../../theme.stitches"
import Flex from "../../flex"

import MapIcon from '../../../assets/Map.svg';
import MailIcon from '../../../assets/Mail.svg';
import { Button } from '../../button/'
import { motion } from "framer-motion";

const HeadingContainer = styled(Flex, {
    width: "100%",
    margin: "0 0 3rem 0"
})

const Heading = styled(Text, {
    marginBottom: '$1'
})

const Icon = styled(MapIcon, {
    marginRight: '$3'

})

const Mail = styled(MailIcon, {
    marginRight: "$2"
})

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };


const animation = {
    initial: {
        y: 50,
        ...transition
    },
    animate: {
        y: 0,
        ...transition
    },
    exit: {
        y: -50,
        ...transition
    }
}

const TitleBlock = () => {

    const convertLine = (line: string) => {
        return line.split('').map((char, index) => (
            <motion.span
                key={index + "char"}
                initial={{
                    opacity: 0,
                    x: 40
                }}
                animate={{
                    opacity: 1,
                    x: 0
                }}


                transition={{
                    duration: 1,
                    delay: index * 0.05
                }}
            >
                {char}
            </motion.span>
        ))
    }

    return (
        <>
            <HeadingContainer column>
                <Heading font='title' as='h1' size='7'
                    css={{
                        overflow: "hidden",
                        lineHeight: "$4",
                        color: "$typePrimary",
                    }}>{convertLine("UI Designer and ")}<br></br>{convertLine("Front-end Developer")}</Heading>
                <Flex
                    initial={{
                        opacity: 0,

                    }}
                    animate={{
                        opacity: 1,

                    }}


                    transition={{
                        duration: 1,
                        delay: 0.3
                    }}
                    css={{ marginTop: "$2" }} alignCenter>
                    <Icon />
                    <Text css={{ color: "$typeColour", margin: 0 }} as='p' size='1'>Currently working at PingCreates</Text>
                </Flex>
                <Button
                    initial={{
                        opacity: 0,

                    }}
                    animate={{
                        opacity: 1,

                    }}


                    transition={{
                        duration: 1,
                        delay: 0.3
                    }}
                    shadow css={{ marginTop: "$4" }} type='featured'><Mail />Contact me</Button>
            </HeadingContainer>
        </>
    )


}

export default TitleBlock;