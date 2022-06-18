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
  //주문 ID
  orderId: number
  // 주문 내용
  request: {
    //사용자 ID?
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
        //메뉴 안에있는 것과 차이는..?
        menuCount: number
        menuName: string
        pictureUrl: string
        price: number
        totalPrice: number
      },
    ]
    //주문ID 2?
    orderId: number
    //위에 orderHistoryMenuResponses 와의 차이점은..?
    orderMenuResponses: [
      {
        count: number
        menuId: number
        menuName: string
        price: number
      },
    ]
    orderStatus: OrderStatusType

    //이거말고 따른 상태값은?
    statusCanceled: 'ACTIVE'
    storeId: number
  }
}
