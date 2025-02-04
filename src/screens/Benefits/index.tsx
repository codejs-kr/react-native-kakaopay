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

const Benefits: React.FC = () => {
  const dummyBenefits = [
    {
      id: "1",
      period: "3개월간",
      amount: "1,250,534",
      type: "혜택",
    },
  ];

  const dummyServices = [
    {
      id: "1",
      title: "자동차보험",
      description: "자동차보험료 계산 시\n페이포인트 지급!",
      tag: "즉시적립",
      tagColor: "#4C9EFF",
      points: "1원",
      image: "https://via.placeholder.com/60",
    },
    {
      id: "2",
      title: "춘식이팜",
      description: "고구마 심고 3만p받기",
      isNew: true,
      image: "https://via.placeholder.com/60",
    },
    {
      id: "3",
      title: "출석체크",
      description: "매일매일 포인트 받기",
      image: "https://via.placeholder.com/60",
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* 페이포인트 섹션 */}
        <TouchableOpacity style={styles.pointSection}>
          <View style={styles.pointHeader}>
            <Image
              source={{ uri: "https://via.placeholder.com/30" }}
              style={styles.pointIcon}
            />
            <Text style={styles.pointTitle}>페이포인트</Text>
          </View>
          <View style={styles.pointAmount}>
            <Text style={styles.amount}>597,894원</Text>
            <MaterialIcons name="chevron-right" size={24} color="#000" />
          </View>
        </TouchableOpacity>

        {/* 혜택 요약 섹션 */}
        <View style={styles.benefitSummary}>
          {dummyBenefits.map((benefit) => (
            <TouchableOpacity key={benefit.id} style={styles.benefitCard}>
              <Text style={styles.benefitPeriod}>
                {benefit.period}{" "}
                <Text style={styles.benefitAmount}>{benefit.amount}원</Text>{" "}
                {benefit.type} 받았어요
              </Text>
              <Text style={styles.benefitPage}>1 / 2</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 쉽게 얻는 혜택 섹션 */}
        <View style={styles.easyBenefits}>
          <Text style={styles.sectionTitle}>쉽게 얻는 혜택</Text>
          {dummyServices.map((service) => (
            <TouchableOpacity key={service.id} style={styles.serviceCard}>
              <View style={styles.serviceInfo}>
                <View style={styles.serviceHeader}>
                  <Text style={styles.serviceTitle}>{service.title}</Text>
                  {service.isNew && (
                    <View style={styles.newBadge}>
                      <Text style={styles.newBadgeText}>N</Text>
                    </View>
                  )}
                </View>
                <Text style={styles.serviceDescription}>
                  {service.description}
                </Text>
                {service.tag && (
                  <View
                    style={[styles.tag, { backgroundColor: service.tagColor }]}
                  >
                    <Text style={styles.tagText}>{service.tag}</Text>
                    {service.points && (
                      <Text style={styles.tagPoints}>{service.points}</Text>
                    )}
                  </View>
                )}
              </View>
              <Image
                source={{ uri: service.image }}
                style={styles.serviceImage}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* 크게 얻는 혜택 버튼 */}
        <TouchableOpacity style={styles.bigBenefitButton}>
          <Text style={styles.bigBenefitText}>크게 얻는 혜택</Text>
          <MaterialIcons name="expand-more" size={24} color="#000" />
        </TouchableOpacity>

        {/* 출석 체크 프로그레스 */}
        <View style={styles.attendanceProgress}>
          <View style={styles.progressHeader}>
            <MaterialIcons name="event-available" size={20} color="#4C9EFF" />
            <Text style={styles.progressText}>오늘 출석 참여</Text>
          </View>
          <View style={styles.progressBar}>
            <View style={styles.progressDots}>
              {[...Array(5)].map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.progressDot,
                    index === 0 && styles.progressDotActive,
                  ]}
                />
              ))}
            </View>
            <Text style={styles.progressCount}>0 / 5일</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F6F7",
  },
  scrollView: {
    flex: 1,
  },
  pointSection: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    marginBottom: 8,
  },
  pointHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  pointIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  pointTitle: {
    fontSize: 14,
    color: "#666",
  },
  pointAmount: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 8,
  },
  amount: {
    fontSize: 24,
    fontWeight: "bold",
  },
  benefitSummary: {
    padding: 16,
  },
  benefitCard: {
    backgroundColor: "#FFFFFF",
    padding: 20,
    borderRadius: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  benefitPeriod: {
    fontSize: 16,
    color: "#333",
  },
  benefitAmount: {
    color: "#4C9EFF",
    fontWeight: "bold",
  },
  benefitPage: {
    color: "#999",
    fontSize: 14,
  },
  easyBenefits: {
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  serviceCard: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  serviceInfo: {
    flex: 1,
  },
  serviceHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "500",
  },
  newBadge: {
    backgroundColor: "#FF5F00",
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  newBadgeText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },
  serviceDescription: {
    fontSize: 14,
    color: "#666",
    marginTop: 4,
    lineHeight: 20,
  },
  serviceImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  tag: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginTop: 8,
  },
  tagText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "500",
  },
  tagPoints: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
    marginLeft: 4,
  },
  bigBenefitButton: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    marginVertical: 8,
  },
  bigBenefitText: {
    fontSize: 16,
    fontWeight: "500",
  },
  attendanceProgress: {
    backgroundColor: "#FFFFFF",
    padding: 20,
  },
  progressHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  progressText: {
    fontSize: 14,
    color: "#666",
  },
  progressBar: {
    marginTop: 16,
  },
  progressDots: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  progressDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#E5E5E5",
  },
  progressDotActive: {
    backgroundColor: "#4C9EFF",
  },
  progressCount: {
    textAlign: "right",
    fontSize: 12,
    color: "#666",
  },
});

export default Benefits;
