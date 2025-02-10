import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { DUMMY_IMAGES } from '@/src/shared/constants/dummy';
import TabViewLayout from '@/src/shared/components/TabViewLayout';
import TabHeader from '@/src/shared/components/TabHeader';

const Assets: React.FC = () => {
  const accounts = [
    {
      id: '1',
      name: '카뱅 주계좌',
      balance: 109020,
      type: 'bank',
      icon: DUMMY_IMAGES['100'],
    },
    {
      id: '2',
      name: '신한주계좌',
      balance: 70682,
      type: 'bank',
      icon: DUMMY_IMAGES['100'],
    },
    {
      id: '3',
      name: '종합계좌',
      balance: 43005,
      type: 'pay',
      icon: DUMMY_IMAGES['100'],
    },
    {
      id: '4',
      name: '저축예금',
      balance: 1302965,
      type: 'bank',
      icon: DUMMY_IMAGES['100'],
    },
    {
      id: '11',
      name: '새마을 정기예금',
      balance: 10302965,
      type: 'bank',
      icon: DUMMY_IMAGES['100'],
    },
    {
      id: '12',
      name: '새마을 저축예금',
      balance: 332965,
      type: 'bank',
      icon: DUMMY_IMAGES['100'],
    },
    {
      id: '13',
      name: '하나 저축예금',
      balance: 1302965,
      type: 'bank',
      icon: DUMMY_IMAGES['100'],
    },
    {
      id: '5',
      name: '생활비계좌',
      balance: 5131691,
      type: 'bank',
      icon: DUMMY_IMAGES['100'],
    },
    {
      id: '6',
      name: '마이홈플랜 주택청약 종합저축',
      balance: 18500000,
      type: 'savings',
      icon: DUMMY_IMAGES['100'],
    },
    {
      id: '7',
      name: '주식·펀드',
      balance: 15553735,
      rate: -4.53,
      type: 'investment',
      icon: DUMMY_IMAGES['100'],
    },
  ];

  return (
    <TabViewLayout>
      <TabHeader />

      <ScrollView style={styles.scrollView}>
        {/* 정기 점검 알림 */}
        <View style={styles.maintenanceNotice}>
          <MaterialIcons name="campaign" size={20} color="#666" />
          <Text style={styles.maintenanceText}>정기 점검 안내(~00:30)</Text>
        </View>

        {/* 자주 쓰는 */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>자주 쓰는</Text>
          <View style={styles.accountsList}>
            {accounts.map((account) => (
              <TouchableOpacity key={account.id} style={styles.accountItem}>
                <View style={styles.accountInfo}>
                  <Image source={{ uri: account.icon }} style={styles.accountIcon} />
                  <View style={styles.accountDetails}>
                    <Text style={styles.accountName}>{account.name}</Text>
                    <View style={styles.balanceContainer}>
                      <Text style={styles.balance}>{account.balance.toLocaleString()}원</Text>
                      {account.rate && (
                        <Text style={[styles.rate, { color: account.rate < 0 ? '#2196F3' : '#F44336' }]}>
                          {account.rate > 0 ? '+' : ''}
                          {account.rate}%
                        </Text>
                      )}
                    </View>
                  </View>
                </View>
                <TouchableOpacity style={styles.transferButton}>
                  <Text style={styles.transferButtonText}>송금</Text>
                </TouchableOpacity>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </TabViewLayout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  scrollView: {
    flex: 1,
  },
  maintenanceNotice: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 16,
    gap: 8,
  },
  maintenanceText: {
    fontSize: 14,
    color: '#666',
  },
  section: {
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    padding: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  accountsList: {
    gap: 24,
  },
  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  accountIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  accountDetails: {
    flex: 1,
  },
  accountName: {
    fontSize: 14,
    marginBottom: 4,
  },
  balanceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  balance: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  rate: {
    fontSize: 14,
  },
  transferButton: {
    backgroundColor: '#F2F3F4',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
  },
  transferButtonText: {
    fontSize: 14,
    color: '#333',
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  pointIcon: {
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  pointTitle: {
    fontSize: 14,
    color: '#666',
  },
});

export default Assets;
