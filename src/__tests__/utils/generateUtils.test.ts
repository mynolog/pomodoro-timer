import { generateTimestamp } from '../../utils/generateUtils'

describe('타임스탬프 생성 유틸 함수', () => {
  beforeAll(() => {
    // Mocking 된 타이머 사용으로 변경
    jest.useFakeTimers()
    // Mock 현재 시간 설정
    jest.setSystemTime(new Date('2024-12-03T09:00:00Z'))
  })

  afterAll(() => {
    // 실제 타이머 사용으로 복원
    jest.useRealTimers()
  })

  test('현재 시간을 기준으로 타임스탬프를 생성한다.', () => {
    const received = generateTimestamp(1500)
    const expected = new Date('2024-12-03T09:25:00Z')
    expect(received.getTime()).toBe(expected.getTime())
  })
})
