import { useNavigate } from 'react-router'
import { TbError404Off, TbHome, TbArrowBack } from 'react-icons/tb'
import Button from '../../components/common/Button/Button'

const NotFound = () => {
  const navigate = useNavigate()

  const handleGoHome = () => {
    navigate('/', { replace: true })
  }

  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div className="w-[600px] h-screen flex flex-col justify-center items-center font-degital gap-5">
      <TbError404Off className="text-8xl text-gray-700" />
      <div className="flex flex-col justify-center items-center text-gray-700 mt-5">
        <h2 className="text-3xl mb-3">요청하신 페이지를 찾을 수 없습니다</h2>
        <p>
          페이지의 주소가 잘못 입력되었거나, 페이지 주소 변경, 삭제 등의 사유로
          현재 접근할 수 없습니다.
        </p>
        <p>페이지 주소를 확인 후 다시 입력해주세요.</p>
      </div>
      <div className="flex gap-3">
        <Button bgColor="bg-gray-900" onClick={handleGoHome}>
          <TbHome className="text-3xl" />
        </Button>
        <Button bgColor="bg-gray-900" onClick={handleGoBack}>
          <TbArrowBack className="text-3xl" />
        </Button>
      </div>
    </div>
  )
}

export default NotFound
