
import React from 'react'
import { LayoutGroup, motion } from "framer-motion"
import { styled } from "../../../theme.stitches"
import ToolBarButton from "./ToolIcon"

import HomeIcon from '../../../assets/Home.svg'
import NFTIcon from '../../../assets/Mail.svg'
import MailIcon from '../../../assets/NFT.svg'

const Grid = styled(motion.div, {
    display: "grid",
    alignItems: "center",
    gap: "$2",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridAutoFlow: "row"
    //grid-auto-flow: row;
})


const ToolBarContainer = styled(motion.div, {
    boxSizing: 'border-box',
    padding: "$1",
    "&:hover": {
        borderColor: '$primary'
    }
})

const PreToolBar: React.FC = () => {
    return (
        <ToolBarContainer>
            <Grid>
                <LayoutGroup>
                    <ToolBarButton url='/' tooltip="Home">
                        <HomeIcon />
                    </ToolBarButton>

                    <ToolBarButton url='/work' tooltip="About" >
                        <MailIcon />
                    </ToolBarButton>
                    <ToolBarButton url='/nft' tooltip="Work" >
                        <HomeIcon />
                    </ToolBarButton>
                    <ToolBarButton url='/contact' tooltip="Contact" >
                        <NFTIcon />
                    </ToolBarButton>
                </LayoutGroup>
            </Grid>
        </ToolBarContainer>
    )

}

const Toolbar = React.memo(PreToolBar);

export default Toolbar;

