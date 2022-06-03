export type OrderType = {
  distance: number
  location: {
    latitude: number
    longitude: number
  }
  menus: {
    count: number
    menuId: number
  }[]

  storeId: number
}

export type BasketType = {
  menuId: number
  menuCount: number
  menuName: string
  pictureUrl: string
  menuPrice: number
  menuTotal: number
}

export type BossOrderListType = {
  createTime: Date
  memberId: number
  orderId: number
  orderMenus: {
    count: number
    menuId: number
    menuName: string
    price: number
  }[]

  orderStatus: 'PREPARING'
  totalPrice: number
}
