import { setLocale } from 'yup';

export default defineNuxtPlugin(() => {
  setLocale({
    mixed: {
      required: '필수 입력 항목입니다.', // 필수 값
      oneOf: ({ values }) => `다음 값 중 하나여야 합니다: ${values}`, // 특정 값 중 하나여야 할 때
      notOneOf: ({ values }) => `다음 값 중 하나가 아니어야 합니다: ${values}`, // 특정 값 제외
      notType: ({ type }) => {
        if (type === 'number') {
          return '숫자로 입력해주세요';
        }
        if (type === 'string') {
          return '문자로 입력해주세요';
        }
        return '유효하지 않은 형식입니다';
      },
    },
    string: {
      length: ({ length }) => `${length} 글자여야 합니다.`,
      min: ({ min }) => `최소 ${min} 글자 이상이어야 합니다.`,
      max: ({ max }) => `최대 ${max} 글자 이하여야 합니다.`,
      matches: ({ regex }) => `"${regex}" 패턴과 일치해야 합니다.`,
      email: '유효한 이메일 형식이어야 합니다.',
      url: '유효한 URL 형식이어야 합니다.',
      trim: '공백을 제거해야 합니다.',
      lowercase: '소문자만 포함해야 합니다.',
      uppercase: '대문자만 포함해야 합니다.',
    },
    number: {
      min: ({ min }) => `최소 ${min} 이상이어야 합니다.`,
      max: ({ max }) => `최대 ${max} 이하여야 합니다.`,
      lessThan: ({ less }) => `${less}보다 작아야 합니다.`,
      moreThan: ({ more }) => `${more}보다 커야 합니다.`,
      positive: '양수여야 합니다.',
      negative: '음수여야 합니다.',
      integer: '정수여야 합니다.',
    },
    date: {
      min: ({ min }) => `${min} 이후여야 합니다.`,
      max: ({ max }) => `${max} 이전이어야 합니다.`,
    },
    array: {
      min: ({ min }) => `최소 ${min}개 이상이어야 합니다.`,
      max: ({ max }) => `최대 ${max}개 이하여야 합니다.`,
    },
  });
});
