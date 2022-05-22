export type RegisterStorePropsType = {
  category: string
  name: string
  storeDescription: string
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
  menuCount: number
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

export type StoreCategory = {
  label:
    | '붕어빵'
    | '타코야키'
    | '떡볶이'
    | '호떡'
    | '계란빵'
    | '순대'
    | '기타 음식'
    | '기타 디저트'
  value:
    | 'BUNG_EO_PPANG'
    | 'TAKOYAKI'
    | 'TTEOK_BOKKI'
    | 'HO_DDEOK'
    | 'EGG_BREAD'
    | 'SUNDAE'
    | 'OTHER_MEAL'
    | 'OTHER_DESSERT'
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
  storeDescription: string
  menuList: [
    {
      menuCount: number
      menuName: string
      menuPrice: number
      pictureUrl: string
    },
  ]
  businessHours: [
    {
      days: string
      endTime: string
      startTime: string
    },
  ]
  location: LocationType
  locationDescription: string

  storeId: number
  storeName: string
  payments: string[]
  pictureUrl: string
  salesStatus: 'CLOSED' | 'OPEN'
}