import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";

const BottomNavigation = () => {
  const pathname = usePathname(); // rota atual, bottom ativo

  return (
    <View style={styles.navbar}>
      {/* O prop asChild faz o <Link> usar o TouchableOpacity como base, sem quebrar layout nem acessibilidade */}
      <Link href="/LibraryScreen" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Feather
            name="music"
            size={24}
            color={pathname === "/LibraryScreen" ? "#00E0D6" : "#F7F7F7"}
          />
          <Text
            style={[
              styles.navLabel,
              pathname === "/LibraryScreen" && { color: "#F7F7F7" },
            ]}
          >
            home
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/search" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Feather
            name="search"
            size={24}
            color={pathname === "/search" ? "#00E0D6" : "#F7F7F7"}
          />
          <Text
            style={[
              styles.navLabel,
              pathname === "/search" && { color: "#F7F7F7" },
            ]}
          >
            search
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/FavoriteScreen" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Feather
            name="heart"
            size={24}
            color={pathname === "/FavoriteScreen" ? "#00E0D6" : "#F7F7F7"}
          />
          <Text
            style={[
              styles.navLabel,
              pathname === "/FavoriteScreen" && { color: "#F7F7F7" },
            ]}
          >
            favorite
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/profile" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Feather
            name="user"
            size={24}
            color={pathname === "/profile" ? "#00E0D6" : "#F7F7F7"}
          />
          <Text
            style={[
              styles.navLabel,
              pathname === "/profile" && { color: "#F7F7F7" },
            ]}
          >
            profile
          </Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    paddingVertical: 10,
    backgroundColor: "black",
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "white",
  },
});

export default BottomNavigation;
