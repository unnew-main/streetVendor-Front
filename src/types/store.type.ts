export type RegisterStorePropsType = {
  category: StoreCategoryType
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
      handleCategory: (data: StoreCategoryType) => void
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

export type StoreCategoryType =
  | 'BUNG_EO_PPANG'
  | 'TAKOYAKI'
  | 'TTEOK_BOKKI'
  | 'HO_DDEOK'
  | 'EGG_BREAD'
  | 'SUNDAE'
  | 'OTHER_MEAL'
  | 'OTHER_DESSERT'

export type DayType = 'MON' | 'TUE' | 'WED' | 'THU' | 'FRI' | 'SAT' | 'SUN'

export type StoreListType = {
  storeName: string
  locationDescription: string
  storeId: number
  salesStatus: 'CLOSED' | 'OPEN'
}

export type StoreMenuType = {
  menuId: number
  menuCount: number
  menuName: string
  pictureUrl: string
  menuPrice: number
  menuSalesStatus: 'SOLD_OUT' | 'ON_SALE'
}

export type StoreDetailType = {
  bossNumber: string
  category: StoreCategoryType
  storeDescription: string
  menuList: StoreMenuType[]
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

export type StorePinType = {
  category: StoreCategoryType
  storeName: string
  salesStatus: 'CLOSED' | 'OPEN'
  storeId: number
  location: LocationType
}
