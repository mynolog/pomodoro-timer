export const requestNotificationPermission = () => {
  if (Notification.permission === 'default')
    Notification.requestPermission()
      .then((permission) => {
        if (permission === 'granted') {
          console.log('알림 권한이 허용되었습니다.')
        } else {
          console.log('알림 권한이 거부되었습니다.')
        }
      })
      .catch((e) => {
        console.error('알림 권한 요청 오류: ', e)
      })
}
