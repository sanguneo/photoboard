/**
 * "00:00" 부터 "23:30"까지 30분 간격으로 시간을 생성
 * @returns string[]
 */
export const generateTimeData = (): string[] => {
  const times: string[] = [];

  for (let hour = 0; hour < 24; hour += 1) {
    for (let minute = 0; minute < 60; minute += 30) {
      // 2자리 형식으로 시간을 추가
      const time = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      times.push(time);
    }
  }

  return times;
};

// 시간에 따라서 오전/오후 구분
export const getTimePeriod = (hour: string|number): string => {
  let changeHour = hour;
  if (typeof changeHour === 'string'){
    changeHour = Number(changeHour);
  }
  return changeHour < 12 ? 'AM' : 'PM';
};

/**
 * 현재 시간을 'HH:mm' 형식으로 받아서 현재시간이 30분 간격으로 지난 시간으로 새로 세팅
 * ex) 현재시간 11:22 > 11:30 반환
 *     현재시간 12:34 > 13:00 반환
 * @param currentTime HH:mm
 * @returns
 */
export const findNext30MinTime = (currentTime: string): string => {
  // 현재 시간을 'HH:mm' 형식으로 받아서, 시와 분을 분리
  const [currentHour, currentMinute] = currentTime.split(':').map(Number);

  // 다음 30분을 찾기 위한 변수
  let nextHour = currentHour;
  let nextMinute = 0;

  // 분이 30분 미만이면 그 시간의 30분을 선택
  if (currentMinute < 30) {
    nextMinute = 30;
  } else {
    // 분이 30분 이상이면 그 다음 시간의 00분을 선택
    nextHour = (currentHour + 1) % 24;  // 24시가 되지 않도록 모듈러 연산
    nextMinute = 0;
  }

  // 결과를 'HH:mm' 형식으로 반환
  return `${String(nextHour).padStart(2, '0')}:${String(nextMinute).padStart(2, '0')}`;
};
