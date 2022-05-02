import React, { useCallback, useState } from 'react'

import { RegisterStoreScreen } from '@/screens/boss'
import {
  BusinessHoursType,
  LocationType,
  RegisterMenuType,
} from '@/types/storeType'

export const RegisterStoreApp = () => {
  const [category, setCategory] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [description, setdescription] = useState<string>('')
  const [location, setLocation] = useState<LocationType>({
    longitude: 0,
    latitude: 0,
  })
  const [businessHours, setBusinessHours] = useState<BusinessHoursType[]>([])
  const [menu, setMenu] = useState<RegisterMenuType[]>([])
  const [pictureUrl, setPictureUrl] = useState<string>('')
  const [paymentMethods, setPaymentMethods] = useState<string[]>([])
  const storeProps = {
    data: {
      name: name,
      description: description,
      category: category,
      location: location,
      businessHours: businessHours,
      menus: menu,
      pictureUrl: pictureUrl,
      paymentMethods: paymentMethods,
    },
    handle: {
      handleCategory: useCallback((data: string) => setCategory(data), []),
      handleName: useCallback((data: string) => setName(data), []),
      handleDescription: useCallback(
        (data: string) => setdescription(data),
        [],
      ),
      handleLocation: useCallback(
        (data: LocationType) => setLocation(data),
        [],
      ),
      handleBusinessHours: useCallback(
        (data: BusinessHoursType[]) => setBusinessHours(data),
        [],
      ),
      handleMenu: useCallback((data: RegisterMenuType[]) => setMenu(data), []),
      handlePictureUrl: useCallback((data: string) => setPictureUrl(data), []),
      handlePaymentMethods: useCallback(
        (data: string[]) => setPaymentMethods(data),
        [],
      ),
    },
  }

  return <RegisterStoreScreen storeProps={storeProps} />
}
