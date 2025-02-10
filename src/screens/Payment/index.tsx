import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TabViewLayout from '@/src/shared/components/TabViewLayout';
import TabHeader from '@/src/shared/components/TabHeader';

const Payment: React.FC = () => {
  const quickMenus = [
    { id: '1', name: '송금·충전', icon: 'sync-alt', color: '#FFB300' },
    { id: '2', name: '멤버십', icon: 'card-membership', color: '#4CAF50' },
    { id: '3', name: '쿠폰함', icon: 'local-offer', color: '#F44336' },
    { id: '4', name: '결제내역', icon: 'receipt-long', color: '#2196F3' },
  ];

  const recentPayment = {
    amount: '20,000원',
    title: '결제 완료',
    description: '3분 전 · 카카오프렌즈샵',
  };

  const benefitInfo = {
    title: '매장결제 적립',
    benefits: [
      { rate: '3%', type: '최애매장', icon: 'favorite' },
      { rate: '2%', type: '모든매장', icon: 'store' },
    ],
    points: '15,600원',
    period: '최근 30일 간',
  };

  return (
    <TabViewLayout>
      <TabHeader />

      <ScrollView style={styles.scrollView}>
        {/* 상단 퀵메뉴 */}
        <View style={styles.quickMenuContainer}>
          {quickMenus.map((menu) => (
            <TouchableOpacity key={menu.id} style={styles.quickMenuItem}>
              <View style={[styles.iconCircle, { backgroundColor: menu.color }]}>
                <MaterialIcons name={menu.icon as any} size={24} color="#FFF" />
              </View>
              <Text style={styles.quickMenuText}>{menu.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 바로결제 섹션 */}
        <View style={styles.paymentSection}>
          <View style={styles.paymentHeader}>
            <MaterialIcons name="bolt" size={20} color="#FFB300" />
            <Text style={styles.paymentTitle}>바로 결제</Text>
            <Text style={styles.paymentAmount}>
              미니+포인트 <Text style={styles.amountHighlight}>280,000</Text>원
            </Text>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </View>

          {/* 바코드 영역 */}
          <View style={styles.barcodeContainer}>
            <Image source={require('@/src/shared/assets/images/bar_code.png')} style={styles.barcode} />
            <Image source={require('@/src/shared/assets/images/qr_code.png')} style={styles.qrCode} />
          </View>
        </View>

        {/* 최근 결제 내역 */}
        {recentPayment && (
          <TouchableOpacity style={styles.recentPayment}>
            <View style={styles.recentPaymentContent}>
              <MaterialIcons name="receipt-long" size={20} color="#2196F3" />
              <View style={styles.recentPaymentInfo}>
                <Text style={styles.recentPaymentAmount}>
                  {recentPayment.amount} {recentPayment.title}
                </Text>
                <Text style={styles.recentPaymentDescription}>{recentPayment.description}</Text>
              </View>
            </View>
            <MaterialIcons name="chevron-right" size={24} color="#666" />
          </TouchableOpacity>
        )}

        {/* 매장결제 혜택 정보 */}
        <View style={styles.benefitSection}>
          <View style={styles.benefitHeader}>
            <MaterialIcons name="settings" size={20} color="#666" />
            <Text style={styles.benefitTitle}>{benefitInfo.title}</Text>
          </View>
          <View style={styles.benefitContent}>
            <View style={styles.benefitRates}>
              {benefitInfo.benefits.map((benefit, index) => (
                <View key={index} style={styles.benefitRate}>
                  <Text style={styles.rateText}>{benefit.rate}</Text>
                  <MaterialIcons name={benefit.icon as any} size={20} color="#666" />
                  <Text style={styles.rateType}>{benefit.type}</Text>
                </View>
              ))}
            </View>
            <View style={styles.pointsInfo}>
              <Text style={styles.periodText}>{benefitInfo.period}</Text>
              <Text style={styles.pointsText}>페이포인트 {benefitInfo.points} 받았어요!</Text>
            </View>
          </View>
        </View>

        {/* 더 많은 결제혜택 버튼 */}
        <TouchableOpacity style={styles.moreBenefitsButton}>
          <Text style={styles.moreBenefitsText}>더 많은 결제혜택 찾아보기</Text>
          <MaterialIcons name="expand-more" size={24} color="#000" />
        </TouchableOpacity>
      </ScrollView>

      {/* 결제하기 버튼 - position: absolute로 변경 */}
      <View style={styles.payButtonContainer}>
        <TouchableOpacity style={styles.payButton}>
          <Text style={styles.payButtonText}>결제하기</Text>
        </TouchableOpacity>
      </View>
    </TabViewLayout>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginBottom: 74, // 하단 버튼 높이만큼 여백 추가
  },
  quickMenuContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingVertical: 16,
    paddingHorizontal: 8,
  },
  quickMenuItem: {
    flex: 1,
    alignItems: 'center',
  },
  iconCircle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  quickMenuText: {
    fontSize: 12,
    color: '#333',
  },
  paymentSection: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 8,
  },
  paymentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  paymentTitle: {
    fontSize: 14,
    marginLeft: 4,
    marginRight: 8,
  },
  paymentAmount: {
    flex: 1,
    fontSize: 14,
    color: '#666',
  },
  amountHighlight: {
    color: '#000',
    fontWeight: 'bold',
  },
  barcodeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 26,
  },
  barcode: {
    width: 170,
    height: 106,
    resizeMode: 'contain',
  },
  qrCode: {
    width: 100,
    height: 100,
  },
  recentPayment: {
    backgroundColor: '#FFF',
    padding: 16,
    marginTop: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  recentPaymentContent: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  recentPaymentInfo: {
    marginLeft: 12,
  },
  recentPaymentAmount: {
    fontSize: 14,
    fontWeight: '500',
  },
  recentPaymentDescription: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  benefitSection: {
    backgroundColor: '#FFF',
    padding: 20,
    marginTop: 8,
  },
  benefitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  benefitTitle: {
    fontSize: 14,
    marginLeft: 8,
  },
  benefitContent: {
    backgroundColor: '#F8F9FA',
    padding: 16,
    borderRadius: 8,
  },
  benefitRates: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  benefitRate: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  rateText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rateType: {
    fontSize: 14,
    color: '#666',
  },
  pointsInfo: {
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    paddingTop: 16,
  },
  periodText: {
    fontSize: 12,
    color: '#666',
  },
  pointsText: {
    fontSize: 14,
    fontWeight: '500',
    marginTop: 4,
  },
  moreBenefitsButton: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    marginTop: 8,
  },
  moreBenefitsText: {
    fontSize: 14,
    fontWeight: '500',
  },
  payButtonContainer: {
    position: 'absolute',
    bottom: 50,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  payButton: {
    backgroundColor: '#FFE100',
    padding: 16,
    alignItems: 'center',
    borderRadius: 8,
  },
  payButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Payment;
