import type { NextPage } from 'next'

import Head from 'next/head';

import { Button } from "../components/button";
import Container from '../components/container'
import Flex from '../components/flex'
import HomeBlock from '../components/home';
import TitleBlock from '../components/home/JobTitle';
import Navigation from '../components/navigation';

const Home: NextPage = () => {
  return (
    <HomeBlock />
  )

}

export default Home