import FilterPill from "@/components/FilterPill";
import MoodCard from "@/components/MoodCard";
import Row from "@/components/Row";
import SearchBar from "@/components/SearchBar";
import ThemedText from "@/components/ThemedText";
import { Colors } from "@/constants/Colors";
import { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";

const filters = ["All moods", "Anxious", "Confused", "Exhausted"];
const moods = [
  { name: "Sleep", imageSrc: require("@/assets/images/sleep.png") },
  { name: "Relax", imageSrc: require("@/assets/images/relax.png") },
  { name: "Breath", imageSrc: require("@/assets/images/breath.png") },
  { name: "Focus", imageSrc: require("@/assets/images/focus.png") },
  { name: "Energy", imageSrc: require("@/assets/images/energy.png") },
  { name: "Comfort", imageSrc: require("@/assets/images/comfort.png") },
];

export default function Index() {
  const [search, setSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("All moods");

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.background }}>
      <View style={[styles.container]}>
        <Row style={styles.header}>
          <ThemedText variant="header">Meditation guides</ThemedText>
          <Text>🔔</Text>
        </Row>
        <Row>
          <SearchBar value={search} onChange={setSearch} />
        </Row>
        <Row gap={12} style={styles.listWrapper}>
          {filters.map((filter) => (
            <FilterPill
              key={filter}
              name={filter}
              selected={filter === selectedFilter}
              onPress={() => setSelectedFilter(filter)}
            />
          ))}
        </Row>
        <ThemedText variant="subtitle">What do you need?</ThemedText>
        <Row gap={12} style={styles.listWrapper}>
          {moods.map(({ name, imageSrc }) => (
            <MoodCard name={name} imageSrc={imageSrc} />
          ))}
        </Row>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    gap: 16,
  },
  header: {
    justifyContent: "space-between",
  },
  listWrapper: {
    flexWrap: "wrap",
  },
});
