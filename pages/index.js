import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "../styles/Home.module.css";
import {
  Box,
  Button,
  Divider,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { API } from "./lib/api";
import { useRouter } from "next/router";
import {GeneralBtn, HeaderText, MainVContainer} from '../utils'
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return router && (
    <MainVContainer bgImage="https://images.unsplash.com/photo-1607008829749-c0f284a49fc4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80" >
      <Box bg={'blackAlpha.400'} pos='absolute' inset={0} zIndex={0}/>
      <Box />
      <VStack w='full' pos={'relative'}>
        <HeaderText txt={'Artisty'}/>
        <Divider/>
        <HeaderText txt={'Nail salon EST 2016'} fs={'1rem'} fw='normal'/>
      </VStack>
      <VStack w={'full'}>
        <GeneralBtn txt={'Үйлчилгээ'} func={() => router.push('/services')}/>
        <GeneralBtn txt={'Бидний тухай'}/>
        
      </VStack>
    </MainVContainer>

  )
}
