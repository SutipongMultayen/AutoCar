// state เอาไว้ประกาศตัวแปร
export const state = () => ({
  cart: null,
})

// mutations เหมือน methods Function
export const mutations = {
  addcart(state, value) {
    if (state.cart == null) {
      state.cart = value
    } else {
      const index = state.cart.findIndex(
        (item) => item.ProductCode === value[0].ProductCode
      )
      // console.log(index);
      if (index == -1) {
        state.cart.push(value[0])
      } else {
        // state.cart[index].PricePerPiece = value[0].PricePerPiece
        state.cart[index].Qty++
      }
    }
  },
  updatedUp(state, items) {
    const index = state.cart.findIndex(
      (item) => item.ProductCode == items.ProductCode
    )
    if (index == 0) {
      state.cart[index].Qty++
    } else {
      state.cart[index].Qty++
    }
  },
  updatedDown(state, items) {
    const index = state.cart.findIndex(
      (item) => item.ProductCode == items.ProductCode
    )
    if (index == 0) {
      state.cart[index].Qty--
      if (state.cart[index].Qty <= 0) {
        state.cart.splice(index, 1)
      }
    } else {
      state.cart[index].Qty--
      if (state.cart[index].Qty <= 0) {
        state.cart.splice(index, 1)
      }
    }
  },
  dropitem(state, items) {
    const index = state.cart.findIndex(
      (item) => item.ProductCode == items.ProductCode
    )
    if (index == 0) {
      state.cart.splice(index, 1)
    } else {
      state.cart.splice(index, 1)
    }
  },
  dropAllitem(state){
     state.cart.splice(0)
  }
}

// ตัวผ่านเพื่อความปลอดภัยหรือ ไว้คำนวน
export const getters = {
  sumcart(cart) {
    // console.log(cart);
  },
}

// เข้า actions เป็นอันดับแรก
export const actions = {
  addcart(context, value) {
    context.commit('addcart', value)
  },
}

/*
  state ตัวแปร
  actions เรียกจากหน้า page และจะเรียก mutations อีกที
  mutations เป็นเหมือน methods Function ไว้ทำอะไรสักอย่าง
  getters เป็นตัวแสดงหรือตัวผ่านเพื่อความปลอดภัย
  
  */
