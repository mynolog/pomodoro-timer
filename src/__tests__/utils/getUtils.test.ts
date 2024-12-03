import { getRandomMessage } from '../../utils/getUtils'
import { POMODORO_MESSAGES, BREAK_MESSAGES } from '../../constants/messages'

describe('랜덤 메시지 출력 함수', () => {
  let randomMock: jest.SpyInstance
  beforeEach(() => {
    // Math.random 메서드를 스파이하여 항상 0.3을 반환하도록 모킹
    randomMock = jest.spyOn(Math, 'random').mockReturnValue(0.3)
  })
  // Math.random 메서드 복원
  afterEach(() => {
    randomMock.mockRestore()
  })

  test('pomodoro 메시지를 반환한다.', () => {
    const result = getRandomMessage('pomodoro')
    expect(result).toBe('💯 작업 완료! 휴식 후 더 잘 할 수 있어요!')
  })
  test('break 메시지를 반환한다.', () => {
    // Math.random 메서드를 스파이하여 한번만 0.8을 반환하도록 모킹
    randomMock.mockReturnValueOnce(0.8)
    const result = getRandomMessage('break')
    expect(result).toBe('👀 이제 눈을 뜨고, 목표를 향해 한 걸음 더 나아가자!')
  })

  test('올바른 인덱스 범위에서 메시지를 반환한다.', () => {
    const pomodoroResult = getRandomMessage('pomodoro')
    const breakResult = getRandomMessage('break')
    expect(POMODORO_MESSAGES).toContain(pomodoroResult)
    expect(BREAK_MESSAGES).toContain(breakResult)
  })
})
