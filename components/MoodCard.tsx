import { Image, StyleSheet, View } from "react-native";
import ThemedText from "./ThemedText";
import { Colors } from "@/constants/Colors";

type Props = {
  name: string;
  imageSrc: any;
};

export default function MoodCard({ name, imageSrc }: Props) {
  return (
    <View style={styles.card}>
      <Image
        source={imageSrc}
        style={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <ThemedText variant="subtitle" style={{ marginLeft: 8, marginBottom: 8 }}>
        {name}
      </ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    position: "relative",
    width: "30%",
    justifyContent: "flex-end",
    height: 100,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 16,
    overflow: "hidden",
  },
});
