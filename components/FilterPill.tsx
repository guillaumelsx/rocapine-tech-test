import { Pressable, StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";
import { Colors } from "@/constants/Colors";

type Props = {
  name: string;
  selected?: boolean;
  onPress: () => void;
};

export default function FilterPill({ name, selected = false, onPress }: Props) {
  return (
    <Pressable onPress={onPress}>
      <View
        style={[
          styles.pill,
          { backgroundColor: selected ? Colors.tint : Colors.grayDark },
        ]}
      >
        <ThemedText color={selected ? "background" : "white"}>
          {name}
        </ThemedText>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  pill: {
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    height: 32,
    paddingHorizontal: 12,
  },
});
