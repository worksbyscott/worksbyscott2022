import { styled } from "@stitches/react";
import { PropsWithChildren, ReactChild } from "react";
import Footer from "../footer";
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
    return (
        <SiteWrapper>
            <Navigation />
            <PageWrapper>
                {children}
            </PageWrapper>
            <Footer />
        </SiteWrapper>
    )
}