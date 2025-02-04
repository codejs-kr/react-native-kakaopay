import React from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Image,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Home: React.FC = () => {
  const serviceMenus = [
    { id: "1", name: "통신비할인", icon: "phone-android" },
    { id: "2", name: "손해보험", icon: "security" },
    { id: "3", name: "카드만들기", icon: "credit-card" },
    { id: "4", name: "내대출한도", icon: "account-balance" },
    { id: "5", name: "신용관리", icon: "trending-up" },
    { id: "6", name: "보험진단", icon: "health-and-safety" },
    { id: "7", name: "연금", icon: "savings" },
    { id: "8", name: "전체", icon: "menu" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../../../assets/images/kakaopay-logo.png")}
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="search" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="notifications" size={24} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <MaterialIcons name="menu" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* 프로모션 배너 */}
        <View style={styles.promotionBanner}>
          <Text style={styles.promotionText}>
            카카오페이에서 대출 신청 시{"\n"}1년 이자지원 찬스
          </Text>
          <Image
            source={require("../../../assets/images/promotion-gift.png")}
            style={styles.promotionImage}
          />
        </View>

        {/* 페이머니 섹션 */}
        <View style={styles.payMoneySection}>
          <View style={styles.payMoneyHeader}>
            <Text style={styles.payMoneyTitle}>페이머니 • pay 충전</Text>
            <TouchableOpacity>
              <MaterialIcons name="info" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          <View style={styles.payMoneyAmount}>
            <Text style={styles.amount}>0원</Text>
            <MaterialIcons name="chevron-right" size={24} color="#000" />
          </View>
          <View style={styles.payMoneyActions}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>충전</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>송금</Text>
            </TouchableOpacity>
          </View>
          {/* 충전 프로그레스 바 */}
          <View style={styles.chargeProgress}>
            <View style={styles.progressBar}>
              <View style={styles.progressFill} />
            </View>
            <View style={styles.progressLabels}>
              <Text style={styles.progressLabel}>30만원까지</Text>
              <Text style={styles.progressLabel}>100만원까지</Text>
            </View>
            <View style={styles.progressRates}>
              <Text style={styles.rateText}>세전,최대 연 5%</Text>
              <Text style={styles.rateText}>연 2.5%</Text>
            </View>
          </View>
        </View>

        {/* 서비스 메뉴 그리드 */}
        <View style={styles.serviceGrid}>
          {serviceMenus.map((menu) => (
            <TouchableOpacity key={menu.id} style={styles.serviceItem}>
              <MaterialIcons name={menu.icon as any} size={28} color="#333" />
              <Text style={styles.serviceName}>{menu.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 보유 주식 섹션 */}
        <TouchableOpacity style={styles.stockSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>보유 주식 pay</Text>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </View>
          {/* 추가 주식 관련 컨텐츠 */}
        </TouchableOpacity>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  logo: {
    height: 24,
    width: 100,
    resizeMode: "contain",
  },
  headerRight: {
    flexDirection: "row",
    gap: 16,
  },
  iconButton: {
    padding: 4,
  },
  content: {
    flex: 1,
  },
  promotionBanner: {
    backgroundColor: "#F5F6F7",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  promotionText: {
    fontSize: 16,
    lineHeight: 24,
    flex: 1,
  },
  promotionImage: {
    width: 60,
    height: 60,
  },
  payMoneySection: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginBottom: 8,
  },
  payMoneyHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  payMoneyTitle: {
    fontSize: 14,
    color: "#666",
  },
  payMoneyAmount: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 8,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  payMoneyActions: {
    flexDirection: "row",
    gap: 8,
    marginTop: 16,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: "#F2F3F4",
    paddingVertical: 8,
    paddingHorizontal: 24,
    borderRadius: 4,
  },
  actionButtonText: {
    fontSize: 14,
    fontWeight: "500",
  },
  chargeProgress: {
    marginTop: 16,
  },
  progressBar: {
    height: 4,
    backgroundColor: "#E5E5E5",
    borderRadius: 2,
  },
  progressFill: {
    width: "30%",
    height: "100%",
    backgroundColor: "#FFE100",
    borderRadius: 2,
  },
  progressLabels: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
  },
  progressLabel: {
    fontSize: 12,
    color: "#666",
  },
  progressRates: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 4,
  },
  rateText: {
    fontSize: 12,
    color: "#999",
  },
  serviceGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    padding: 16,
  },
  serviceItem: {
    width: "25%",
    alignItems: "center",
    paddingVertical: 16,
  },
  serviceName: {
    marginTop: 8,
    fontSize: 12,
    color: "#333",
  },
  stockSection: {
    padding: 20,
    backgroundColor: "#FFFFFF",
    borderTopWidth: 1,
    borderTopColor: "#E5E5E5",
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
});

export default Home;
