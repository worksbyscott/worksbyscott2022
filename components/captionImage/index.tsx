import { styled } from '../../theme.stitches'
import Image from 'next/image'
import { AspectRatio } from '../aspectratio'
import Text from '../text'
import { motion } from 'framer-motion';

const ImageContainer = styled(motion.div, {
    width: '100%',
    overflow: 'hidden',
    borderRadius: "16px",
    margin: "$4 $6 $4 0",
    display: "block",
    position: "relative",
    border: "1px solid $borderColour",
    transition: "border .3s ease-in",

    "&:hover": {
        border: "3px solid $brand",
    },
})

const ImageWrapper = styled('div', {

})

const ImageCaption = styled('div', {
    width: "100%",
    padding: ".3rem .75rem",
    borderBottomLeftRadius: "1rem",
    borderBottomRightRadius: "1rem",
    borderTop: "1px solid $borderColour",
    zIndex: 10
})

interface ImageProps {
    nameString: string,
    caption?: string
}


const CaptionImage = (props: ImageProps) => {

    const { nameString, caption } = props;

    return (
        <ImageContainer
            initial={{
                opacity: 0,
                y: 20
            }}
            animate={{
                opacity: 1,
                y: 0
            }}
            transition={{
                duration: 1
            }}>
            <AspectRatio.Root ratio={16 / 9}>
                <ImageWrapper>
                    <Image src={nameString ? nameString : "/cipher.png"} layout="fill" objectFit="cover" alt={caption ? caption : ""} />
                </ImageWrapper>

            </AspectRatio.Root>
            {caption && (
                <ImageCaption>
                    <Text css={{
                        fontSize: "$1",
                        textAlign: "center",
                        margin: 0,

                        "@bp1": {
                            fontSize: ".8rem"
                        },


                    }}>{caption}</Text>
                </ImageCaption>
            )}
        </ImageContainer>
    );

}

export default CaptionImage