import React, { useCallback, useState } from 'react'

import {
  BusinessHoursType,
  LocationType,
  RegisterMenuType,
  StoreCategory,
} from '@/types/store.type'
import { RegisterStoreStack } from '@/navigates'

export const RegisterStore = () => {
  const [category, setCategory] = useState<StoreCategory['value']>(
    'BUNG_EO_PPANG',
  )
  const [name, setName] = useState<string>('')
  const [storeDescription, setStoreDescription] = useState<string>('')
  const [location, setLocation] = useState<LocationType>({
    longitude: 0,
    latitude: 0,
  })
  const [businessHours, setBusinessHours] = useState<BusinessHoursType[]>([])
  const [menu, setMenu] = useState<RegisterMenuType[]>([])
  const [pictureUrl, setPictureUrl] = useState<string>('')
  const [paymentMethods, setPaymentMethods] = useState<string[]>([])
  const [locationDescription, setLocationDescription] = useState<string>('')
  const storeProps = {
    data: {
      name: name,
      storeDescription: storeDescription,
      category: category,
      location: location,
      businessHours: businessHours,
      menus: menu,
      pictureUrl: pictureUrl,
      paymentMethods: paymentMethods,
      locationDescription: locationDescription,
    },
    handle: {
      handleCategory: useCallback(
        (data: StoreCategory['value']) => setCategory(data),
        [],
      ),
      handleName: useCallback((data: string) => setName(data), []),
      handleDescription: useCallback(
        (data: string) => setStoreDescription(data),
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
      handleLocationDescription: useCallback(
        (data: string) => setLocationDescription(data),
        [],
      ),
    },
  }

  return <RegisterStoreStack storeProps={storeProps} />
}
