import { throttle } from 'lodash-es';

const REPEAT_HOLD_TIME = 1000;
const THROTTLE_OPTIONS = {
  trailing: false, // throttle 후행 이벤트 발동 설정
};

/**
 * 이벤트 쓰로틀이 적용된 함수를 반환합니다.
 * @param func
 * @returns throttle function
 */
export const getThrottleFunc = <T extends (...args: any) => any>(func: T, holdTime: number = REPEAT_HOLD_TIME) => {
  return throttle(func, holdTime, THROTTLE_OPTIONS);
};
