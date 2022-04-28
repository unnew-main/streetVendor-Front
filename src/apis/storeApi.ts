import { RegisterStorePropsType } from '@/screens/boss/RegisterStoreScreen.type'
import api from './common'

export const storeApi = {
  getStore: async () => {
    return api.getAuth('/api/v1/my-stores', {})
  },
  createStore: async (props: RegisterStorePropsType) => {
    return api.postAuth('/api/v1/store', props)
  },
}

const dummy = {
  businessHours: [
    {
      days: 'FRI',
      endTime: {
        hour: '2',
        minute: '1',
        nano: 0,
        second: '2',
      },
      startTime: {
        hour: '3',
        minute: '3',
        nano: 0,
        second: '3',
      },
    },
  ],
  category: 'BUNG_EO_PPANG',
  description: 'hello',
  location: {
    latitude: 37.786551891077465,
    longitude: -122.40619884706501,
  },
  menus: [
    {
      amount: 2,
      name: 'ohmenu',
      pictureUrl:
        'file:///Users/unnew/Library/Developer/CoreSimulator/Devices/64EBDF31-BE43-40B4-BF11-73ADA7165F36/data/Containers/Data/Application/B0597BD0-5E7C-4A3F-A5B6-82143F8B5860/tmp/976FE0DA-FA62-4F0E-A30F-073CA4B2141D.jpg',
      price: 2000,
    },
  ],
  name: 'storename',
  paymentMethods: ['ACCOUNT_TRANSFER'],
  pictureUrl:
    'file:///Users/unnew/Library/Developer/CoreSimulator/Devices/64EBDF31-BE43-40B4-BF11-73ADA7165F36/data/Containers/Data/Application/B0597BD0-5E7C-4A3F-A5B6-82143F8B5860/tmp/976FE0DA-FA62-4F0E-A30F-073CA4B2141D.jpg',
}
