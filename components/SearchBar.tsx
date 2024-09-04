import { Image, StyleSheet, Text, TextInput } from "react-native";
import Row from "./Row";
import { Colors } from "@/constants/Colors";

type Props = {
  value: string;
  onChange: (s: string) => void;
};

export default function SearchBar({ value, onChange }: Props) {
  return (
    <Row style={[styles.wrapper, { backgroundColor: Colors.grayDark }]}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.white}
        value={value}
        onChangeText={onChange}
        style={styles.input}
      />
      <Text>🔍</Text>
    </Row>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    borderRadius: 16,
    height: 32,
    paddingHorizontal: 12,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Colors.border,
  },
  input: {
    flex: 1,
    height: 16,
    fontSize: 12,
    lineHeight: 16,
    color: Colors.white,
  },
});
