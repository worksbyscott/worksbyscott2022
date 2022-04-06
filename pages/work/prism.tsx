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


const Prism: NextPage = () => {
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
                        >Prism Animation</Text>
                        <Text >Javascript Animation Library</Text>
                    </Flex>
                    <Button
                        css={{
                            "@bp1": {
                                margin: '2rem 0 0 0'
                            },
                        }}
                        shadow
                        as={"a"}
                        href="https://www.npmjs.com/package/prism-animation">Download on NPM</Button>
                </Flex>
            </Container>

            <Container>
                <CaptionImage caption="Screen shot of shop collection page. colinprior.co.uk/collections" nameString="test" />
            </Container>

            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>Background</Text>
                <Text >Prism is a Javascript Animation library produced as an Edinburgh Napier University individual Honours project. Using the AnimationFrame method to modify elements on the web, the affords users the ability to create animations using components within the browser via browser requests, with in an intuitive and efficient Application Programming Interface (API). If you're interested in giving it a try, the project can be installed via node package manager as shown below. </Text>
            </Container>

            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>Quick Start Guide</Text>
                <Text >To install prism-animation to your project using node package manager</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={prismInstall} language="jsx" />
                </Card>
                <Text>Once installed, import funcation to your project and start animating!</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={prismImport} language="jsx" />
                </Card>
            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>How it works</Text>
                <Text >One function thats it. Simple isn’t it</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={howWorks} language="jsx" />
                </Card>
                <Text>All animations must specify the element prop on call. Target is the selected
                    element you wish to animate. This supports Elements, Arrays and class
                    names.</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={howWorks2} language="jsx" />
                </Card>
            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>Duration and Easing</Text>
                <Text >Prism supports bezier and penner easing animations. It includes a range of
                    Preset easing. Prism defaults animations to <InlineCode>inOutCubic</InlineCode> if not set.</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={easing} language="jsx" />
                </Card>
                <Text>Here is an list of supported easing functions.
                    Credit to gre on GitHub for providing the easing functions. <InlineCode>https://gist.github.com/gre/1650294</InlineCode></Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={easing2} language="jsx" />
                </Card>
            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>Supported Props</Text>
                <Text >Prism supports animation of all CSS attributes this does include colours.</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={props1} language="jsx" />
                </Card>
                <Text >Prism also supports the majority of transform values. Here is a list of
                    the ones supported.  If no unit is passed prism defaults to px or deg.</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={props2} language="jsx" />
                </Card>
            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>Animation Controls</Text>
                <Text >Prism allows you to control the life of the animation via an selection of
                    Callback functions.</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={controls} language="jsx" />
                </Card>
            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>State Callbacks</Text>
                <Text >Prism provides a set of hooks and callbacks to call during
                    the life of the animation. These call backs are <InlineCode>onUpdate</InlineCode>,
                    <InlineCode>onPlay</InlineCode>,<InlineCode>onComplete</InlineCode>,<InlineCode>onStop</InlineCode></Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={controls} language="jsx" />
                </Card>
            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="5" contrast bold>Implementing prism in React</Text>
                <Text >Prism also takes advantage of reacts use of JXS to provide an
                    PrismComponent and inline Component version of the Prism
                    Function. </Text>
                <Text >This component creates an div element to incase all the child elements
                    You wish to animate. This Component can also pass all default HTMLElement
                    Props like onClick, Styles, className.</Text>
            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>Cleaner more organised code</Text>
                <Text >Combining the animation function into JSX element allows for ease of
                    Maintainability. Although PrismComponents do not gain access to animation
                    Controls functions like <InlineCode>play()</InlineCode>, <InlineCode>stop()</InlineCode>, <InlineCode>restart()</InlineCode>.</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={reactCode} language="jsx" />
                </Card>
                <Text size="4" contrast bold>Prism Component</Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={reactCode2} language="jsx" />
                </Card>
            </Container>
            <Container css={{ marginTop: "$8" }}>
                <Text size="4" contrast bold>Scroll Trigger</Text>
                <Text >Trigger PrismComponent animation when the element comes into the
                    Viewport (window). This requires the <InlineCode>autoPlay</InlineCode> prop to be set to false.
                    This animation can only be triggered once until its remounted or the page
                    Has been refreshed. </Text>
                <Card noPadding>
                    <HighlightedCodeText codeString={scrollExample} language="jsx" />
                </Card>
            </Container>
        </>
    )

}

export default Prism


const prismInstall =
    `
    npm install prism-animation
`


const prismImport =
    `
    import { prism } from 'prism-animation'
`

const howWorks =
    `
    prism(“.prism-test”, {
        translateX: 1000
    })
`

const howWorks2 =
    `
    prism(elementArray, {           //Use array of elements  
        translateX: 1000
    })
`

const easing =
    `
    prism(“.prism-test”, {
        translateX: 1000
        duration: 4000,        // Duration is ms
        easing: “outCubic”,    // Easing String
    })
`

const easing2 =
    `
    linear
    inQuad
    outQuad
    inOutQuad
    inCubic
    outCubic
    inOutCubic
    inQuart
    outQuart
    inOutQuart
    inQuint
    outQuint
    inOutQuint
`

const controls =
    `
    const animator = prism(“.prism-test”, {
        duration: 4000,
        translateX: “1000px”,
        autoPlay: false,
    })

    animator.play();     // Starts animation 

    animator.stop();     // Stops animation

    animator.reset();    // Resets to initial state

    animator.restart();  // Resets and plays
`

const stateCallbacks =
    `
    const animator = prism(“.prism-test”, {
        onUpdate: () => {},      //Every frame of the animation 60fps
        onPlay: () => {},       //On animation start
        onStop: () => {},       //When .stop is called
        onComplete: () => {},   //When the animation completes
    })

`

const props1 =
    `
    prism(“.prism-test”, {
        translateX: 1000
        backgroundColor: “#D62525”
    })
`

const props2 =
    `
    ‘translateX’
    ‘translateY’
    ‘translateZ’
    ‘scale’
    ‘scaleX’
    ‘scaleY’
    ‘scaleX’
    ‘rotate’
    ‘rotateX’
    ‘rotateZ’
    ‘rotateY’
    ‘skew’
    ‘skewX’
    ‘skewY’
`

const reactCode =
    `
    prism(“.prism-test”, {
        duration: 2000,
        easing: “easeOutCubic”,
        fontSize: “50px”,
        opacity: 1
      })
  
      //Inside the component return
      <div className=“prism-test2”>
        <h1>Hello World</h1>
      </div>
`

const reactCode2 =
    `
    <PrismComponent
    animation={{
      duration: 2000,
      easing: “easeOutCubic”,
      fontSize: “50px”,
      opacity: 1
    }}>
    <h1>Hello World</h1>
  </PrismComponent>
`

const scrollExample =
    `
    <PrismComponent
        onScrollTrigger
        animation={{
          duration: 2000,
          easing: “easeOutCubic”,
          fontSize: “50px”,
          opacity: 1 
        }}>
        <h1>Hello World</h1>
    </PrismComponent>
`
