import { goAlert } from './goAlert'

export const ReportError = (errorString: string, navigator: any) => {
  if (errorString.lastIndexOf('401') !== -1) {
    goAlert('세션이 만료되었습니다.', '다시 로그인해주세요.', false, () =>
      navigator?.reset({ routes: [{ name: 'Login' }] }),
    )
  } else if (errorString.lastIndexOf('500') !== -1) {
    goAlert(
      '서버에 문제가 발생했습니다.',
      '처음 화면으로 돌아갑니다.',
      false,
      // () => navigator?.reset({ routes: [{ name: 'Splash' }] }),
    )
  } else {
    goAlert(errorString)
  }
}
