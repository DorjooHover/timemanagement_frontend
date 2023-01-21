import { Text } from "@chakra-ui/react"

export const HeaderText = ({txt, color='white', fs = '4xl',fw="600"}) => {
    return (
        <Text color={color} fontSize={fs} fontWeight={fw}>{txt}</Text>
    )
}
export const HeaderText1 = ({txt, color='#00477b', fs = '2xl',fw="600"}) => {
    return (
        <Text color={color} fontSize={fs} fontWeight={fw}>{txt}</Text>
    )
}
