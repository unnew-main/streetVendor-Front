import { BusinessHoursType, MenuType } from '@/apps/boss/RegisterStoreApp'

export type StackRegisterStoreList = {
  Intro: undefined
  SetCND: undefined
  SetStoreName: undefined
  SetLocation: undefined
  SetOpenTime: undefined
  SetMenu: undefined
  SetPicture: undefined
  Outtro: undefined
}
export type RegisterStoreScreenProps = {
  storeProps: {
    category: string
    handleSetCategory: (data: string) => void
    name: string
    handleSetName: (data: string) => void
    desc: string
    handleSetDesc: (data: string) => void
    loaction: string
    handleSetLocation: (data: string) => void
    businessHours: BusinessHoursType[]
    handleSetBusinessHours: (data: BusinessHoursType[]) => void
    menu: MenuType[]
    handleSetMenu: (data: MenuType[]) => void
    pictureUrl: string
    handleSetPictureUrl: (data: string) => void
  }
}
