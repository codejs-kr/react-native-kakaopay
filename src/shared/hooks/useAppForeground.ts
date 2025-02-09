import { useEffect, useRef, useState } from 'react';
import { AppState, AppStateStatus } from 'react-native';

/**
 * 앱 백그라운드에서 포그라운드로 복귀시 콜백 함수를 실행합니다.
 * ex) 데이터 갱신 처리 등
 */
export const useAppForeground = (callback: VoidFunction) => {
  const [isForeground, setIsForeground] = useState(true);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const handleAppStateChange = (nextAppState: AppStateStatus) => {
      if (appState.current.match(/inactive|background/) && nextAppState === 'active') {
        setIsForeground(true);
        callback();
      } else {
        setIsForeground(false);
      }
      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener('change', handleAppStateChange);

    return () => {
      subscription.remove();
    };
  }, [callback]);

  return {
    isForeground,
  };
};
