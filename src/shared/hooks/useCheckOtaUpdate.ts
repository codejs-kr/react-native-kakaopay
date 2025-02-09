import { Alert } from 'react-native';
import * as Updates from 'expo-updates';

import { useMemo } from 'react';
import { getThrottleFunc } from '../helpers/throttle';
import { isDev } from '../constants/env';

/**
 * 패치 업데이트 여부 확인
 */
export const useCheckOtaUpdate = () => {
  async function fetchUpdate() {
    await Updates.fetchUpdateAsync();
    // 업데이트 적용 후 앱을 재로드합니다.
    await Updates.reloadAsync();
  }

  const checkOtaUpdates = useMemo(
    () =>
      getThrottleFunc(async () => {
        if (isDev) {
          console.log('[OTA] checkOtaUpdates development 환경에성 동작하지 않습니다.');
          return;
        }

        try {
          const update = await Updates.checkForUpdateAsync();

          if (update.isAvailable) {
            Alert.alert('패치 정보가 있어요!', '간편 업데이트를 위해 앱을 재시작합니다.', [
              { text: '나중에' },
              { text: '업데이트', onPress: fetchUpdate },
            ]);
          }
        } catch (error) {
          console.error('Error checking for updates:', error);
        }
      }, 3_000),
    []
  );

  return {
    checkOtaUpdates,
  };
};
