import React, { useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DUMMY_IMAGES } from '@/src/shared/constants/dummy';
import TabViewLayout from '@/src/shared/components/TabViewLayout';
import TabHeader from '@/src/shared/components/TabHeader';

const Securities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'전체' | '한국' | '미국'>('전체');

  const quickActions = [
    { id: '1', name: '연금', icon: 'trending-up', color: '#FF5722' },
    {
      id: '2',
      name: `주식모으기\n수수료0%`,
      icon: 'show-chart',
      color: '#4CAF50',
    },
    { id: '3', name: '매일이자받기', icon: 'attach-money', color: '#FFC107' },
  ];

  const accountInfo = {
    name: '보유주식 주식계좌',
    totalAmount: 15825191,
    profitRate: 1.23,
    profitAmount: 193615,
    investmentAmount: 15631575,
  };

  const menuItems = [
    { id: '1', name: '주문내역', icon: 'receipt-long' },
    { id: '2', name: '매매일지', icon: 'analytics' },
    { id: '3', name: '받은 배당', icon: 'payments' },
    { id: '4', name: '모으기', icon: 'add-circle-outline' },
  ];

  const stocks = [
    {
      id: '1',
      name: '애플',
      country: '미국',
      amount: 1582519,
      profitRate: 1.23,
      profitAmount: 193615,
      image: DUMMY_IMAGES['100'],
    },
    {
      id: '2',
      name: '엔비디아',
      country: '미국',
      amount: 1582519,
      profitRate: -2.5,
      profitAmount: -41235,
      image: DUMMY_IMAGES['100'],
    },
    {
      id: '3',
      name: '마이크로소프트',
      country: '미국',
      amount: 2992519,
      profitRate: 16.5,
      profitAmount: 401235,
      image: DUMMY_IMAGES['100'],
    },
    {
      id: '4',
      name: '아마존',
      country: '미국',
      amount: 3582519,
      profitRate: 12.3,
      profitAmount: 301235,
      image: DUMMY_IMAGES['100'],
    },
    {
      id: '5',
      name: '테슬라',
      country: '미국',
      amount: 1582519,
      profitRate: 10.1,
      profitAmount: 151235,
      image: DUMMY_IMAGES['100'],
    },
    // 더 많은 주식 데이터...
  ];

  return (
    <TabViewLayout style={styles.container}>
      <TabHeader />

      <ScrollView style={styles.content}>
        {/* 상단 탭 */}
        <View style={styles.tabs}>
          <TouchableOpacity
            style={[styles.tab, activeTab === '전체' && styles.activeTab]}
            onPress={() => setActiveTab('전체')}
          >
            <Text style={styles.tabText}>증권홈</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === '한국' && styles.activeTab]}
            onPress={() => setActiveTab('한국')}
          >
            <Text style={styles.tabText}>관심</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.tab, activeTab === '미국' && styles.activeTab]}
            onPress={() => setActiveTab('미국')}
          >
            <Text style={styles.tabText}>발견</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tab}>
            <Text style={styles.tabText}>계좌관리</Text>
          </TouchableOpacity>
        </View>

        {/* 프로모션 배너 */}
        <View style={styles.promotionBanner}>
          <View>
            <Text style={styles.promotionTitle}>열흘 동안 이자 없이</Text>
            <Text style={styles.promotionTitle}>신용 거래 이자율 0%</Text>
          </View>
          <Image source={{ uri: DUMMY_IMAGES['300'] }} style={styles.promotionImage} />
        </View>

        {/* 퀵 액션 버튼들 */}
        <View style={styles.quickActions}>
          {quickActions.map((action) => (
            <TouchableOpacity key={action.id} style={styles.quickActionButton}>
              <MaterialIcons name={action.icon as any} size={20} color="#666" />
              <Text style={styles.quickActionText}>{action.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 계좌 정보 */}
        <View style={styles.accountSection}>
          <Text style={styles.accountTitle}>보유주식 주식계좌 ▼</Text>
          <Text style={styles.accountAmount}>{accountInfo.totalAmount.toLocaleString()}원</Text>
          <Text style={styles.profitInfo}>
            <Text style={styles.profitRate}>
              +{accountInfo.profitRate}% ({accountInfo.profitAmount.toLocaleString()}원)
            </Text>
          </Text>
          <Text style={styles.investmentAmount}>총 투자금 {accountInfo.investmentAmount.toLocaleString()}원</Text>
        </View>

        {/* 메뉴 아이템 그리드 */}
        <View style={styles.menuGrid}>
          {menuItems.map((item) => (
            <TouchableOpacity key={item.id} style={styles.menuItem}>
              <MaterialIcons name={item.icon as any} size={24} color="#666" />
              <Text style={styles.menuItemText}>{item.name}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* 보유 주식 목록 */}
        <View style={styles.stocksList}>
          <View style={styles.stocksHeader}>
            <Text>전체 {stocks.length}</Text>
            <View style={styles.stocksTabs}>
              <Text style={[styles.stocksTab, styles.activeStocksTab]}>한국 0</Text>
              <Text style={styles.stocksTab}>미국 {stocks.length}</Text>
            </View>
          </View>
          {stocks.map((stock) => (
            <View key={stock.id} style={styles.stockItem}>
              <View style={styles.stockInfo}>
                <Image source={{ uri: stock.image }} style={styles.stockImage} />
                <View>
                  <Text style={styles.stockName}>{stock.name}</Text>
                  <Text style={styles.stockAmount}>{stock.amount.toLocaleString()}원</Text>
                </View>
              </View>
              <View style={styles.stockProfitInfo}>
                <Text style={[styles.stockProfitRate, { color: stock.profitRate > 0 ? '#F44336' : '#2196F3' }]}>
                  {stock.profitRate > 0 ? '+' : ''}
                  {stock.profitRate}%
                </Text>
                <Text style={styles.stockProfitAmount}>{stock.profitAmount.toLocaleString()}원</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </TabViewLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    marginBottom: 80,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  logo: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  flagIcon: {
    width: 16,
    height: 16,
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 16,
  },
  content: {
    flex: 1,
  },
  tabs: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  tab: {
    flex: 1,
    paddingVertical: 12,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  tabText: {
    fontSize: 14,
  },
  promotionBanner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#F5F6F7',
  },
  promotionTitle: {
    fontSize: 16,
    lineHeight: 24,
  },
  promotionImage: {
    width: 60,
    height: 60,
  },
  quickActions: {
    flexDirection: 'row',
    padding: 16,
    gap: 8,
  },
  quickActionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F6F7',
    padding: 8,
    borderRadius: 8,
    gap: 4,
  },
  quickActionText: {
    fontSize: 12,
  },
  accountSection: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  accountTitle: {
    fontSize: 14,
    marginBottom: 8,
  },
  accountAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  profitInfo: {
    marginBottom: 4,
  },
  profitRate: {
    color: '#F44336',
  },
  investmentAmount: {
    fontSize: 12,
    color: '#666',
  },
  menuGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  menuItem: {
    width: '25%',
    alignItems: 'center',
    paddingVertical: 8,
  },
  menuItemText: {
    fontSize: 12,
    marginTop: 4,
  },
  stocksList: {
    padding: 16,
  },
  stocksHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  stocksTabs: {
    flexDirection: 'row',
    gap: 16,
  },
  stocksTab: {
    fontSize: 14,
    color: '#666',
  },
  activeStocksTab: {
    color: '#000',
    fontWeight: 'bold',
  },
  stockItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  stockInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  stockImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  stockName: {
    fontSize: 16,
    marginBottom: 4,
  },
  stockAmount: {
    fontSize: 14,
    color: '#666',
  },
  stockProfitInfo: {
    alignItems: 'flex-end',
  },
  stockProfitRate: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  stockProfitAmount: {
    fontSize: 14,
    color: '#666',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  footerText: {
    fontSize: 14,
  },
  footerButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  currencyButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    backgroundColor: '#F5F6F7',
  },
  activeButton: {
    backgroundColor: '#000',
  },
});

export default Securities;
