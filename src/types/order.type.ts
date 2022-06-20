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

export type OrderStatusType = 'REQUEST' | 'PREPARING' | 'READY_TO_PICK_UP'

export type UserOrderCheckListType = {
  //주문 ID
  orderId: number
  // 주문 내용
  request: {
    //사용자 ID?
    memberId: number
    orderHistoryMenuResponses: {
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
      //메뉴 안에있는 것들과 차이는..?
      //붕어빵 3개 = 1000
      //menuCount: 3
      menuCount: number
      menuName: string
      pictureUrl: string
      price: number
      totalPrice: number
    }[]

    //맨위에 있는 orderId와 차이점은 뭔가여..??
    orderId: number
    //위에 orderHistoryMenuResponses 와의 차이점은 뭔가여?
    // orderMenuResponses: [
    //   {
    //     count: number
    //     menuId: number
    //     menuName: string
    //     price: number
    //   },
    // ]
    orderStatus: OrderStatusType

    //ACTIVE 말고 따른 상태값은 뭐가 있난요?
    //ACTIVE | CANCELED
    statusCanceled: 'ACTIVE'
    storeId: number
  }
}
