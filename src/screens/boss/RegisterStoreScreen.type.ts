import { BusinessHoursType, MenuType } from '@/apps/boss/RegisterStoreApp'

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
  desc: string
  loaction: string
  businessHours: BusinessHoursType[]
  menu: MenuType[]
  pictureUrl: string
}
export type RegisterStoreScreenProps = {
  storeProps: {
    data: RegisterStorePropsType
    handle: {
      handleCategory: (data: string) => void
      handleName: (data: string) => void
      handleDesc: (data: string) => void
      handleLocation: (data: string) => void
      handleBusinessHours: (data: BusinessHoursType) => void
      handleMenu: (data: MenuType) => void
      handlePictureUrl: (data: string) => void
    }
  }
}
