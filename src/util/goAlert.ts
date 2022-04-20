import { Alert } from 'react-native'

export const goAlert = (title: string, subTitle?: string) =>
  Alert.alert(
    // 말그대로 Alert를 띄운다
    title, // 첫번째 text: 타이틀 제목
    subTitle ? subTitle : '', // 두번째 text: 그 밑에 작은 제목
    [
      // 버튼 배열

      { text: '확인', onPress: () => console.log('그렇다는데') }, //버튼 제목
      // 이벤트 발생시 로그를 찍는다
    ],
    { cancelable: false },
  )
