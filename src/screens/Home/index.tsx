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

  const recentTransactions = [
    {
      id: "1",
      type: "payment",
      title: "스타벅스 강남점",
      amount: -4800,
      time: "오후 2:30",
      icon: "local-cafe",
    },
    {
      id: "2",
      type: "transfer",
      title: "김카카오",
      amount: 50000,
      time: "오전 11:20",
      icon: "person",
    },
  ];

  const mySubscriptions = [
    {
      id: "1",
      name: "넷플릭스",
      amount: 17000,
      dueDate: "2024.03.25",
      logo: "https://picsum.photos/40/40?random=1",
    },
    {
      id: "2",
      name: "멜론",
      amount: 10900,
      dueDate: "2024.03.28",
      logo: "https://picsum.photos/40/40?random=2",
    },
  ];

  const investmentProducts = [
    {
      id: "1",
      title: "해외주식 소액으로 시작하기",
      description: "천원부터 투자 가능",
      returnRate: "연 2.5%",
      image: "https://picsum.photos/100/100?random=3",
    },
    {
      id: "2",
      title: "적금 금리 비교",
      description: "수수료 없이 간편하게",
      returnRate: "연 5.5%",
      image: "https://picsum.photos/100/100?random=4",
    },
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
            source={{ uri: "https://picsum.photos/100/100?random=10" }}
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

        {/* 최근 거래내역 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>최근 거래내역</Text>
          {recentTransactions.map((transaction) => (
            <TouchableOpacity
              key={transaction.id}
              style={styles.transactionItem}
            >
              <View style={styles.transactionLeft}>
                <View
                  style={[
                    styles.transactionIcon,
                    {
                      backgroundColor:
                        transaction.type === "payment" ? "#FF5F00" : "#2196F3",
                    },
                  ]}
                >
                  <MaterialIcons
                    name={transaction.icon}
                    size={20}
                    color="#FFF"
                  />
                </View>
                <View>
                  <Text style={styles.transactionTitle}>
                    {transaction.title}
                  </Text>
                  <Text style={styles.transactionTime}>{transaction.time}</Text>
                </View>
              </View>
              <Text
                style={[
                  styles.transactionAmount,
                  {
                    color: transaction.amount < 0 ? "#000" : "#2196F3",
                  },
                ]}
              >
                {transaction.amount.toLocaleString()}원
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 정기결제 관리 섹션 */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>이번 달 정기결제</Text>
            <TouchableOpacity style={styles.seeAllButton}>
              <Text style={styles.seeAllText}>전체보기</Text>
              <MaterialIcons name="chevron-right" size={20} color="#666" />
            </TouchableOpacity>
          </View>
          <View style={styles.subscriptionsList}>
            {mySubscriptions.map((subscription) => (
              <View key={subscription.id} style={styles.subscriptionItem}>
                <Image
                  source={{ uri: subscription.logo }}
                  style={styles.subscriptionLogo}
                />
                <View style={styles.subscriptionInfo}>
                  <Text style={styles.subscriptionName}>
                    {subscription.name}
                  </Text>
                  <Text style={styles.subscriptionAmount}>
                    {subscription.amount.toLocaleString()}원
                  </Text>
                  <Text style={styles.subscriptionDate}>
                    {subscription.dueDate} 결제 예정
                  </Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* 투자 상품 추천 섹션 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>투자하고 수익 받기</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.investmentScroll}
          >
            {investmentProducts.map((product) => (
              <TouchableOpacity key={product.id} style={styles.investmentCard}>
                <Image
                  source={{ uri: product.image }}
                  style={styles.investmentImage}
                />
                <View style={styles.investmentInfo}>
                  <Text style={styles.investmentTitle}>{product.title}</Text>
                  <Text style={styles.investmentDesc}>
                    {product.description}
                  </Text>
                  <Text style={styles.investmentRate}>
                    {product.returnRate}
                  </Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        {/* 추천 혜택 섹션 */}
        <View style={[styles.section, styles.benefitsSection]}>
          <Text style={styles.sectionTitle}>이런 혜택은 어때요?</Text>
          <View style={styles.benefitCards}>
            <TouchableOpacity style={styles.benefitCard}>
              <MaterialIcons name="card-giftcard" size={24} color="#FF5F00" />
              <Text style={styles.benefitTitle}>친구 초대하면</Text>
              <Text style={styles.benefitAmount}>5,000원 받기</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.benefitCard}>
              <MaterialIcons name="local-offer" size={24} color="#4CAF50" />
              <Text style={styles.benefitTitle}>첫 결제 시</Text>
              <Text style={styles.benefitAmount}>3,000원 캐시백</Text>
            </TouchableOpacity>
          </View>
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
  section: {
    backgroundColor: "#FFFFFF",
    marginTop: 8,
    padding: 20,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  seeAllButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  seeAllText: {
    fontSize: 14,
    color: "#666",
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  transactionLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  transactionTitle: {
    fontSize: 16,
    marginBottom: 4,
  },
  transactionTime: {
    fontSize: 12,
    color: "#666",
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subscriptionsList: {
    gap: 16,
  },
  subscriptionItem: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
  },
  subscriptionLogo: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  subscriptionInfo: {
    flex: 1,
  },
  subscriptionName: {
    fontSize: 16,
    marginBottom: 4,
  },
  subscriptionAmount: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 2,
  },
  subscriptionDate: {
    fontSize: 12,
    color: "#666",
  },
  investmentScroll: {
    marginTop: 16,
  },
  investmentCard: {
    width: 280,
    marginRight: 16,
    borderRadius: 12,
    backgroundColor: "#F8F9FA",
    overflow: "hidden",
  },
  investmentImage: {
    width: "100%",
    height: 140,
  },
  investmentInfo: {
    padding: 16,
  },
  investmentTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  investmentDesc: {
    fontSize: 14,
    color: "#666",
    marginBottom: 8,
  },
  investmentRate: {
    fontSize: 14,
    color: "#FF5F00",
    fontWeight: "500",
  },
  benefitsSection: {
    marginBottom: 20,
  },
  benefitCards: {
    flexDirection: "row",
    gap: 12,
    marginTop: 16,
  },
  benefitCard: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },
  benefitTitle: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 4,
  },
  benefitAmount: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#FF5F00",
  },
});

export default Home;
