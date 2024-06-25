import { Text } from "@chakra-ui/react";

interface Props {
  text: string;
}

const MiniWriteUp = ({ text }: Props) => {
  return <Text>{text}</Text>;
};

export default MiniWriteUp;
