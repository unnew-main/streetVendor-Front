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
  nickName: string
  orderMenus: {
    count: number
    menuId: number
    menuName: string
    price: number
  }[]

  orderStatus: OrderStatusType
  totalPrice: number
}

export type OrderStatusType = 'PREPARING' | 'REQUEST' | 'READY_TO_PICK_UP'

export type UserOrderCheckListType = {
  orderId: number
  request: {
    memberId: number
    orderHistoryMenuResponses: [
      {
        count: number
        menu: {
          count: number
          createdAt: Date
          id: number
          menuName: string
          orderHistory: {
            createdAt: Date
            id: number
            memberId: number
            menus: [null]
            orderId: number
            storeInfo: {
              description: string
              locationDescription: string
              name: string
              storeId: number
            }
            updatedAt: Date
          }
          pictureUrl: string
          price: number
          updatedAt: Date
        }
        menuCount: number
        menuName: string
        pictureUrl: string
        price: number
        totalPrice: number
      },
    ]
    orderId: number
    orderMenuResponses: [
      {
        count: number
        menuId: number
        menuName: string
        price: number
      },
    ]
    orderStatus: OrderStatusType
    statusCanceled: 'ACTIVE'
    storeId: number
  }
}
