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
  location: LocationType
  businessHours: BusinessHoursType[]
  menu: MenuType[]
  pictureUrl: string
  paymentMethods: string[]
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
export type LocationType = {
  latitude: number
  longitude: number
}
export type MenuType = {
  amount: number
  name: string
  pictureUrl: string
  price: number
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
      handleMenu: (data: MenuType[]) => void
      handlePictureUrl: (data: string) => void
      handlePaymentMethods: (data: string[]) => void
    }
  }
}
