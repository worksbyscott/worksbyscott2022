import { styled } from "@stitches/react";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Footer from "../footer";
import Introduction from "../introduction/introduction";
import Navigation from "../navigation";

interface LayoutProps {
    children: React.ReactNode;
}

const SiteWrapper = styled('div', {
    backgroundColor: "$background",
    minHeight: "100vh",
    minWidth: "100vw",
    width: "auto",
    height: "auto",
    overflow: "hidden",
    boxSizing: "border-box"
})

const PageWrapper = styled('div', {
    paddingTop: '10rem',
    minHeight: "100vh"
})

export default function Layout({ children }: LayoutProps) {

    const [introduction, setIntroduction] = useState(true);

    useEffect(() => {
        setInterval(() => {
            setIntroduction(false)
        }, 3000)
    }, [])

    return (
        <SiteWrapper>
            <AnimatePresence exitBeforeEnter>
                {introduction ? (
                    <Introduction key="intro" />
                ) : (
                    <>
                        <Navigation />
                        <PageWrapper>
                            {children}
                        </PageWrapper>
                        <Footer />
                    </>
                )}
            </AnimatePresence>
        </SiteWrapper>
    )
}