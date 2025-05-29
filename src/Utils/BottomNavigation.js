import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import { Link, usePathname } from "expo-router";

const BottomNavigation = () => {
  const pathname = usePathname(); // rota atual, bottom ativo

  return (
    <View style={styles.navbar}>
      {/* O prop asChild faz o <Link> usar o TouchableOpacity como base, sem quebrar layout nem acessibilidade */}
      <Link href="/Home" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name={pathname === "/Home" ? "musical-notes" : "musical-notes-outline"}
            size={24}
            color="#FFFFFF"
          />
          <Text
            style={[
              styles.navLabel,
              pathname === "/Home" && { color: "#F7F7F7" },
            ]}
          >
            home
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/Pesquisa" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name={pathname === "/Pesquisa" ? "search" : "search-outline"}
            size={24}
            color="#F7F7F7"
          />
          <Text
            style={[
              styles.navLabel,
              pathname === "/Pesquisa" && { color: "#F7F7F7" },
            ]}
          >
            search
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/Favorito" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name={pathname === "/Favorito" ? "heart" : "heart-outline"}
            size={24}
            color="#F7F7F7"
          />
          <Text
            style={[
              styles.navLabel,
              pathname === "/Favorito" && { color: "#F7F7F7" },
            ]}
          >
            favorite
          </Text>
        </TouchableOpacity>
      </Link>

      <Link href="/Perfil" asChild>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons
            name={pathname === "/Perfil" ? "person" : "person-outline"}
            size={24}
            color="#F7F7F7"
          />
          <Text
            style={[
              styles.navLabel,
              pathname === "/Perfil" && { color: "#F7F7F7" },
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
    backgroundColor: "#000000",
    
  },
  navItem: {
    alignItems: "center",
  },
  navLabel: {
    fontSize: 12,
    color: "#f7f7f7",
  },
});

export default BottomNavigation;
