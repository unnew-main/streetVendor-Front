import { Alert } from 'react-native'

export const goAlert = (
  title: string,
  subTitle?: string,
  double?: boolean,
  handleComfirm?: () => void,
  handleCancel?: () => void,
) =>
  double
    ? // 예 | 아니오 버튼
      Alert.alert(
        title, // 첫번째 text: 타이틀 제목
        subTitle ? subTitle : '', // 두번째 text: 그 밑에 작은 제목
        [
          {
            text: '확인',
            onPress: handleComfirm !== undefined ? handleComfirm : () => {},
          },
          {
            text: '취소',
            onPress: handleCancel !== undefined ? handleCancel : () => {},
          },
        ],
        { cancelable: true },
      )
    : // 확인 버튼
      Alert.alert(
        title, // 첫번째 text: 타이틀 제목
        subTitle ? subTitle : '', // 두번째 text: 그 밑에 작은 제목
        [
          {
            text: '확인',
            onPress: handleComfirm !== undefined ? handleComfirm : () => {},
          },
        ],
        { cancelable: false },
      )
