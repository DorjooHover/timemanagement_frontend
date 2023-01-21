import { Button } from "@chakra-ui/react"

export const GeneralBtn = ({txt, func}) => {
    return (
        <Button onClick={ func} w='full'>{txt}</Button>
    )
}

export const ContainerBtn = ({children,key, func}) => {
    
    return (
        <Button key={key} h='auto' my={2} borderRadius={'20px'} onClick={ func} w='full' px={6} py={4}>{children}</Button>
    )
} 