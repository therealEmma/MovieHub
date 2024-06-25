import { HStack, Image, Input } from "@chakra-ui/react"
import logo from "../assets/netflix-logo-png-2574.png"

const Navbar = () => {
  return (
    <HStack spacing={5} paddingY={5}>
        <Image boxSize={10} src={logo} />
        <Input borderRadius={20} placeholder="Search Movie..." />
    </HStack>
  )
}

export default Navbar