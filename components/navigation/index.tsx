import { styled } from '../../theme.stitches'

import Logo from '../navigation/logo'
import Flex from '../flex'
import Container from "../container"
import ToolBar from './tools'

const NavigationContainer = styled('div', {
    width: '100vw',
    boxSizing: "border-box",
    top: 0,
    position: 'fixed',
    padding: "2rem 0 1rem 0",
    backgroundImage: 'radial-gradient( rgba(0,0,0,0) 1px,$background 1px )',
    backgroundSize: '.5rem .5rem',
    backdropFilter: "brightness(50%) blur(16px)",
    zIndex: 100
})

const Navigation = () => {
    return (
        <NavigationContainer>
            <Container>
                <Flex spaceBetween>
                    <Logo />
                    <ToolBar />
                </Flex>
            </Container>
        </NavigationContainer>
    )
}

export default Navigation;

