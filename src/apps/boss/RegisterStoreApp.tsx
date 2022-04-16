import React, { useState } from 'react'

import { RegisterStoreScreen } from '@/screens/boss'

export type BusinessHoursType = {
  day: string
  endTime: {
    hour: string
    minute: string
    nano: number
    second: string
  }
  startTime: {
    hour: string
    minute: string
    nano: number
    second: string
  }
}

export type MenuType = {
  amount: number
  name: string
  pictureUrl: string
  price: number
}
export const RegisterStoreApp = () => {
  const [category, setCategory] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [loaction, setLocation] = useState<string>('')
  const [businessHours, setBusinessHours] = useState<BusinessHoursType[]>([])
  const [menu, setMenu] = useState<MenuType[]>([])
  const [pictureUrl, setPictureUrl] = useState<string>('')

  const storeProps = {
    category: category,
    handleSetCategory: (data: string) => setCategory(data),
    name: name,
    handleSetName: (data: string) => setName(data),
    desc: desc,
    handleSetDesc: (data: string) => setDesc(data),
    loaction: loaction,
    handleSetLocation: (data: string) => setLocation(data),
    businessHours: businessHours,
    handleSetBusinessHours: (data: BusinessHoursType[]) =>
      setBusinessHours(data),
    menu: menu,
    handleSetMenu: (data: MenuType[]) => setMenu(data),
    pictureUrl: pictureUrl,
    handleSetPictureUrl: (data: string) => setPictureUrl(data),
  }

  return <RegisterStoreScreen storeProps={storeProps} />
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
