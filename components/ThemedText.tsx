import { Colors } from "@/constants/Colors";
import { StyleSheet, Text, type TextProps } from "react-native";

type Props = TextProps & {
  variant?: keyof typeof styles;
  color?: keyof typeof Colors;
};

export default function ThemedText({ variant, color, style, ...rest }: Props) {
  return (
    <Text
      style={[
        styles[variant ?? "default"],
        { color: Colors[color ?? "white"] },
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
  },
  header: {
    fontSize: 24,
    lineHeight: 32,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    fontWeight: "bold",
  },
});
