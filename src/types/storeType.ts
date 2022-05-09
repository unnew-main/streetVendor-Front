export type RegisterStorePropsType = {
  category: string
  name: string
  description: string
  location: LocationType
  businessHours: BusinessHoursType[]
  menus: RegisterMenuType[]
  pictureUrl: string
  paymentMethods: string[]
  locationDescription: string
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
      handleLocationDescription: (data: string) => void
    }
  }
}

export type StoreListType = {
  storeName: string
  locationDescription: string
  storeId: number
  salesStatus: 'CLOSED' | 'OPEN'
}

export type StoreMenuType = {
  menuId: number
  menuCount: number
  name: string
  pictureUrl: string
  price: number
  salesStatus: 'SOLD_OUT' | 'ON_SALE'
}

export type StoreDetailType = {
  bossNumber: string
  category: string
  description: string
  menuList: [
    {
      menuCount: number
      menuName: string
      menuPrice: number
      pictureUrl: string
    },
  ]
  openingTime: [
    {
      days: string
      endTime: string
      startTime: string
      storeId: string
    },
  ]
  storeId: number
  storeName: string
}
