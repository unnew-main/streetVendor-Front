export type RegisterStorePropsType = {
  category: string
  name: string
  description: string
  location: LocationType
  businessHours: BusinessHoursType[]
  menus: RegisterMenuType[]
  pictureUrl: string
  paymentMethods: string[]
}
export type BusinessHoursType = {
  days: string
  endTime: string
  startTime: string
}
export type LocationType = {
  latitude: number
  longitude: number
}
export type RegisterMenuType = {
  amount: number
  name: string
  pictureUrl: string
  price: string
}
export type RegisterStoreScreenProps = {
  storeProps: {
    data: RegisterStorePropsType
    handle: {
      handleCategory: (data: string) => void
      handleName: (data: string) => void
      handleDescription: (data: string) => void
      handleLocation: (data: LocationType) => void
      handleBusinessHours: (data: BusinessHoursType[]) => void
      handleMenu: (data: RegisterMenuType[]) => void
      handlePictureUrl: (data: string) => void
      handlePaymentMethods: (data: string[]) => void
    }
  }
}

// {"bossId": 1,
//  "businessHours": [{"days": "MON", "endTime": "08:01:00", "startTime": "08:00:00"},
//                    {"days": "TUE", "endTime": "15:00:00", "startTime": "10:00:00"}],
//  "category": "BUNG_EO_PPANG",
//   "description": "가게 설명",
//   "location": {"latitude": 14.23232, "longitude": 30.2323},
//    "menus": [{"menuCount": 2, "menuId": 1, "name": "팥 붕어빵", "pictureUrl": "https://menu.com/", "price": 2000, "salesStatus": "ON_SALE"},
//             {"menuCount": 5, "menuId": 2, "name": "슈크림", "pictureUrl": "https://menu.com/", "price": 2000, "salesStatus": "ON_SALE"}],
//    "name": "황금잉어",
//    "paymentMethods": ["CASH", "ACCOUNT_TRANSFER"],
//    "pictureUrl": "https://store.com/",
//     "storeId": 1}

export type StoreType = {
  storeName: string
  locationDescription: string
  storeId: number
}

export type StoreMenuType = {
  menuId: number
  menuCount: number
  name: string
  pictureUrl: string
  price: number
  salesStatus: 'SOLD_OUT' | 'ON_SALE'
}

// {
//   "code": "",
//   "message": "",
//   "data": [
//       {
//           "storeId": 1,
//           "bossId": 1,
//           "name": "황금잉어",
//           "pictureUrl": "https://store.com/",
//           "location": {
//               "latitude": 14.23232,
//               "longitude": 30.2323
//           },
//           "description": "가게 설명",
//           "businessHours": [
//               {
//                   "days": "MON",
//                   "startTime": "08:00:00",
//                   "endTime": "08:01:00"
//               },
//               {
//                   "days": "TUE",
//                   "startTime": "10:00:00",
//                   "endTime": "15:00:00"
//               }
//           ],
//           "category": "BUNG_EO_PPANG",
//           "paymentMethods": [
//               "CASH",
//               "ACCOUNT_TRANSFER"
//           ],
//           "menus": [
//               {
//                   "menuId": 1,
//                   "name": "팥 붕어빵",
//                   "menumenuCount": 0,
//                   "price": 2000,
//                   "pictureUrl": "https://menu.com/",
//                   "salesStatus": "ON_SALE"
//               },
//               {
//                   "menuId": 2,
//                   "name": "슈크림",
//                   "menumenuCount": 0,
//                   "price": 2000,
//                   "pictureUrl": "https://menu.com/",
//                   "salesStatus": "ON_SALE"
//               }
//           ]
//       }
//   ]
// }
