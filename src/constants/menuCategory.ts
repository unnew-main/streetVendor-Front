import { ListType } from '@/types/common.type'
import { DayType, StoreCategoryType } from '@/types/store.type'

export const categoryData: ListType<StoreCategoryType>[] = [
  { label: '타코야키', value: 'TAKOYAKI' },
  { label: '떡볶이', value: 'TTEOK_BOKKI' },
  { label: '호떡', value: 'HO_DDEOK' },
  { label: '계란빵', value: 'EGG_BREAD' },
  { label: '순대', value: 'SUNDAE' },
  { label: '기타 음식', value: 'OTHER_MEAL' },
  { label: '기타 디저트', value: 'OTHER_DESSERT' },
]

export const days: ListType<DayType>[] = [
  { label: '월', value: 'MON' },
  { label: '화', value: 'TUE' },
  { label: '수', value: 'WED' },
  { label: '목', value: 'THU' },
  { label: '금', value: 'FRI' },
  { label: '토', value: 'SAT' },
  { label: '일', value: 'SUN' },
]
