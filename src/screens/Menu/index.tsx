import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import type { MenuItem } from "../../types";

const Menu: React.FC = () => {
  const menuItems: MenuItem[] = [
    { id: "1", name: "송금", icon: "send", category: "financial" },
    { id: "2", name: "결제", icon: "payment", category: "financial" },
    { id: "3", name: "계좌", icon: "account-balance", category: "financial" },
    { id: "4", name: "투자", icon: "trending-up", category: "financial" },
    { id: "5", name: "멤버십", icon: "card-membership", category: "lifestyle" },
    { id: "6", name: "쇼핑", icon: "shopping-bag", category: "lifestyle" },
    // 더미 데이터 추가...
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>전체</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>금융</Text>
          <View style={styles.menuGrid}>
            {menuItems
              .filter((item) => item.category === "financial")
              .map((item) => (
                <TouchableOpacity key={item.id} style={styles.menuItem}>
                  <MaterialIcons
                    name={item.icon as any}
                    size={28}
                    color="#FF5F00"
                  />
                  <Text style={styles.menuName}>{item.name}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>

        <View style={styles.menuSection}>
          <Text style={styles.sectionTitle}>생활</Text>
          <View style={styles.menuGrid}>
            {menuItems
              .filter((item) => item.category === "lifestyle")
              .map((item) => (
                <TouchableOpacity key={item.id} style={styles.menuItem}>
                  <MaterialIcons
                    name={item.icon as any}
                    size={28}
                    color="#FF5F00"
                  />
                  <Text style={styles.menuName}>{item.name}</Text>
                </TouchableOpacity>
              ))}
          </View>
        </View>

        <View style={styles.settingsSection}>
          <TouchableOpacity style={styles.settingsButton}>
            <MaterialIcons name="settings" size={24} color="#666666" />
            <Text style={styles.settingsText}>설정</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
  },
  menuSection: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  menuGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: -8,
  },
  menuItem: {
    width: "25%",
    padding: 8,
    alignItems: "center",
  },
  menuName: {
    marginTop: 8,
    fontSize: 12,
  },
  settingsSection: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  settingsButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  settingsText: {
    marginLeft: 8,
    fontSize: 16,
    color: "#666666",
  },
});

export default Menu;
