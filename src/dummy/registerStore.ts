import { RegisterStorePropsType } from '@/types/store.type'

export const dummyRegisterStore1: RegisterStorePropsType = {
  businessHours: [{ days: 'MON', endTime: '12:00', startTime: '12:00' }],
  category: 'BUNG_EO_PPANG',
  location: { latitude: 37.78639644286615, longitude: 126.40572677813645 },
  locationDescription: '가게위치설명',
  menus: [
    {
      menuCount: 1,
      name: '메뉴1',
      pictureUrl:
        'file:///Users/unnew/Library/Developer/CoreSimulator/Devices/64EBDF31-BE43-40B4-BF11-73ADA7165F36/data/Containers/Data/Application/857E79E4-3016-45A9-ABF1-59F3D72F1787/tmp/83E006BA-17DE-46A4-BE23-0B7D288C079D.jpg',
      price: '1000',
    },
    {
      menuCount: 3,
      name: '메뉴2',
      pictureUrl:
        'file:///Users/unnew/Library/Developer/CoreSimulator/Devices/64EBDF31-BE43-40B4-BF11-73ADA7165F36/data/Containers/Data/Application/857E79E4-3016-45A9-ABF1-59F3D72F1787/tmp/83E006BA-17DE-46A4-BE23-0B7D288C079D.jpg',
      price: '2000',
    },
  ],
  name: '가게이름',
  paymentMethods: ['CASH', 'ACCOUNT_TRANSFER'],
  pictureUrl:
    'file:///Users/unnew/Library/Developer/CoreSimulator/Devices/64EBDF31-BE43-40B4-BF11-73ADA7165F36/data/Containers/Data/Application/857E79E4-3016-45A9-ABF1-59F3D72F1787/tmp/C5935FBD-EC64-47F5-8FC8-BF34E5C3F1FB.jpg',
  storeDescription: '가게설명',
}

export const dummyRegisterStore2: RegisterStorePropsType = {
  businessHours: [{ days: 'MON', endTime: '12:00', startTime: '12:00' }],
  category: 'BUNG_EO_PPANG',
  location: { latitude: 37.78707193372723, longitude: 126.40790473175485 },
  locationDescription: '가게위치설명2',
  menus: [
    {
      menuCount: 1,
      name: '메뉴1',
      pictureUrl:
        'file:///Users/unnew/Library/Developer/CoreSimulator/Devices/64EBDF31-BE43-40B4-BF11-73ADA7165F36/data/Containers/Data/Application/857E79E4-3016-45A9-ABF1-59F3D72F1787/tmp/83E006BA-17DE-46A4-BE23-0B7D288C079D.jpg',
      price: '1000',
    },
  ],
  name: '가게이름2',
  paymentMethods: ['CASH', 'ACCOUNT_TRANSFER'],
  pictureUrl:
    'file:///Users/unnew/Library/Developer/CoreSimulator/Devices/64EBDF31-BE43-40B4-BF11-73ADA7165F36/data/Containers/Data/Application/857E79E4-3016-45A9-ABF1-59F3D72F1787/tmp/C5935FBD-EC64-47F5-8FC8-BF34E5C3F1FB.jpg',
  storeDescription: '가게설명2',
}
