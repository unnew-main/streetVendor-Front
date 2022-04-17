export type StackRegisterStoreList = {
  Intro: undefined
  SetCND: undefined
  SetStoreName: undefined
  SetLocation: undefined
  SetBusinessHours: undefined
  SetMenu: undefined
  SetPicture: undefined
  Outtro: undefined
}
export type RegisterStorePropsType = {
  category: string
  name: string
  description: string
  location: string
  businessHours: BusinessHoursType[]
  menu: MenuType[]
  pictureUrl: string
}
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

export type RegisterStoreScreenProps = {
  storeProps: {
    data: RegisterStorePropsType
    handle: {
      handleCategory: (data: string) => void
      handleName: (data: string) => void
      handleDescription: (data: string) => void
      handleLocation: (data: string) => void
      handleBusinessHours: (data: BusinessHoursType) => void
      handleMenu: (data: MenuType) => void
      handlePictureUrl: (data: string) => void
    }
  }
}
