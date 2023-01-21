import { VStack } from "@chakra-ui/react"

export const MainVContainer = ({children, height = '100vh', jc= 'space-around', bgImage= ''}) => {
    return (
        <VStack px={4} py={3} minH={height} justifyContent={jc}  bgPosition={'center'} bgPos='center center' bgSize={'cover'} bgRepeat='no-repeat' pos={'relative'} bgImage={bgImage}>
            {children}
        </VStack>
    )
}
export const SecondVContainer = ({children, height = '100vh', jc= 'space-between', bg='cyan.100'}) => {
    return (
        <VStack px={4} py={6} minH={height} justifyContent={jc}  pos={'relative'} bg={bg}>
            {children}
        </VStack>
    )
}