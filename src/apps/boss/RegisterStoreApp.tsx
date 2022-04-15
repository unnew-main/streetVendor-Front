import React from 'react'

import { RegisterStoreScreen } from '@/screens/boss'

export const RegisterStoreApp = () => {
  return <RegisterStoreScreen />
}
// 판매 카테고리 지정
// 가게이름, 가게설명작성
// 장소 지정
// 영업시간 및 날짜 지정
// 메뉴 지정
// 가게 사진을 등록(나중에 지정 가능?)

// {
//   "businessHours": [
//     {
//       "days": "FRI",
//       "endTime": {
//         "hour": "string",
//         "minute": "string",
//         "nano": 0,
//         "second": "string"
//       },
//       "startTime": {
//         "hour": "string",
//         "minute": "string",
//         "nano": 0,
//         "second": "string"
//       }
//     }
//   ],
//   "category": "BUNG_EO_PPANG",
//   "description": "string",
//   "location": "string",
//   "menus": [
//     {
//       "amount": 0,
//       "name": "string",
//       "pictureUrl": "string",
//       "price": 0
//     }
//   ],
//   "name": "string",
//   "paymentMethods": [
//     "ACCOUNT_TRANSFER"
//   ],
//   "pictureUrl": "string"
// }
