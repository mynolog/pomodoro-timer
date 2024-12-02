import { useState } from 'react'
import { render, screen, fireEvent, within } from '@testing-library/react'
import Clock from './Clock'

const TestWrapper = () => {
  const [clockMode, setClockMode] = useState<'12' | '24'>('12')
  return <Clock clockMode={clockMode} setClockMode={setClockMode} />
}

describe('Clock Component', () => {
  test('초기 렌더링 시 시계가 12시간 형식으로 표시되어야 한다.', () => {
    render(<TestWrapper />)

    // 콜론(:)이 화면에 있어야 함
    expect(screen.getByText(/:/)).toBeInTheDocument()
    // AM/PM이 나타나야 함
    expect(screen.getByText(/am|pm/i)).toBeInTheDocument()
  })

  test('토글 버튼 클릭 시 시계가 24시간 형식으로 변경되어야 한다.', () => {
    render(<TestWrapper />)

    // 24시간 모드로 전환 버튼 클릭
    fireEvent.click(screen.getByRole('button'))

    // 24시간 형식으로 변경되었을 때, AM/PM이 표시되지 않아야 함
    const amPmText = screen.queryByText(/am|pm/i)
    expect(amPmText).toBeNull()
  })

  test('시계 모드를 전환 토글 버튼의 아이콘이 정상적으로 표시되어야 한다. ', () => {
    render(<TestWrapper />)

    // 초기 12시간 모드일 때 12시간 모드 버튼 아이콘이 맞는지 확인
    const button = screen.getByRole('button')
    // <TbClock12 data-testid="clock-icon-12" />
    const clockIcon12 = within(button).getByTestId('clock-icon-12')
    expect(clockIcon12).toBeInTheDocument()

    // 24시간 모드로 전환하는 버튼 클릭
    fireEvent.click(button)

    // 24시간 모드로 변경되었을 때 24시간 모드 버튼 아이콘 바뀌었는지 확인
    // <TbClock24 data-testid="clock-icon-24" />
    const clockIcon24 = within(button).getByTestId('clock-icon-24')
    expect(clockIcon24).toBeInTheDocument()
  })
})
