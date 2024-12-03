import { formatTimeUnit } from '../../utils/formatUtils'

describe('시간 포맷 함수', () => {
  test('한자리 숫자 앞에 0을 붙여서 두자리 숫자로 맞춘다.', () => {
    expect(formatTimeUnit(5)).toBe('05')
  })

  test('두자리 숫자는 변환없이 그대로 유지한다.', () => {
    expect(formatTimeUnit(12)).toBe('12')
  })

  test('0은 00으로 변환한다.', () => {
    expect(formatTimeUnit(0)).toBe('00')
  })
})
