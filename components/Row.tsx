import { View, ViewProps, ViewStyle } from "react-native";

type Props = ViewProps & {
  style?: ViewStyle;
  gap?: number;
};

export default function Row({ style, gap, ...rest }: Props) {
  return (
    <View style={[rowStyle, style, gap ? { gap } : undefined]} {...rest} />
  );
}

const rowStyle = {
  flexDirection: "row",
  alignItems: "center",
} satisfies ViewStyle;
