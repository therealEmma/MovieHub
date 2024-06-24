import { HStack, Image, Input } from "@chakra-ui/react"
import logo from "../assets/pngwing.com.png"

const Navbar = () => {
  return (
    <HStack spacing={5} paddingX={10}>
        <Image width={'200px'} src={logo} />
        <Input placeholder="Search Movie..." />
    </HStack>
  )
}

export default Navbar