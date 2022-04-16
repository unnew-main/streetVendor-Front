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
    data: {
      name: name,
      desc: desc,
      category: category,
      loaction: loaction,
      businessHours: businessHours,
      menu: menu,
      pictureUrl: pictureUrl,
    },
    handle: {
      handleCategory: (data: string) => setCategory(data),
      handleName: (data: string) => setName(data),
      handleDesc: (data: string) => setDesc(data),
      handleLocation: (data: string) => setLocation(data),
      handleBusinessHours: (data: BusinessHoursType) =>
        setBusinessHours(businessHours.concat(data)),
      handleMenu: (data: MenuType) => setMenu(menu.concat(data)),
      handlePictureUrl: (data: string) => setPictureUrl(data),
    },
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
