<template>
  <div class="navbar">
    <b-row>
      <b-col class="HoverItem">
        <nuxt-link to="/SaleItems">
          <div>
            <img
              src="@/assets/icon/box.png"
              class="center mt-2 d-none"
            />
            <img
              src="@/assets/icon/iconMenuFooter/box.png"
              class="center mt-2 d-block"
            />
          </div>
          <div class="text-center my-2">รายการขาย</div>
        </nuxt-link>
      </b-col>
      <b-col class="HoverItem">
        <nuxt-link to="/PurchaseList">
          <div>
            <img
              src="@/assets/icon/shopping-cart.png"
              class="center mt-2 d-none"
            />
            <img
              src="@/assets/icon/iconMenuFooter/shopping-cart.png"
              class="center mt-2 d-block"
            />
          </div>
          <div class="text-center my-2">รายการซื้อ</div>
        </nuxt-link>
      </b-col>
      <b-col class="HoverItem">
        <nuxt-link to="/Warehouse">
          <div>
            <img
              src="@/assets/icon/warehouse.png"
              class="center mt-2 d-none"
            />
            <img
              src="@/assets/icon/iconMenuFooter/warehouse.png"
              class="center mt-2 d-block"
            />
          </div>
          <div class="text-center my-2">คลังสินค้า</div>
        </nuxt-link>
      </b-col>
      <b-col class="HoverItem">
        <nuxt-link to="/Finance">
          <div>
            <img
              src="@/assets/icon/loan.png"
              class="center mt-2 d-none"
            />
            <img
              src="@/assets/icon/iconMenuFooter/loan.png"
              class="center mt-2 d-block"
            />
          </div>
          <div class="text-center my-2">การเงิน</div>
        </nuxt-link>
      </b-col>
      <b-col class="HoverItem">
        <nuxt-link to="/Directory">
          <div>
            <img
              src="@/assets/icon/photo-album.png"
              class="center mt-2 d-none"
            />
            <img
              src="@/assets/icon/iconMenuFooter/photo-album.png"
              class="center mt-2 d-block"
            />
          </div>
          <div class="text-center my-2">สมุดรายชื่อ</div>
        </nuxt-link>
      </b-col>
      <b-col class="HoverItem">
        <nuxt-link to="/Settings">
          <div>
            <img
              src="@/assets/icon/tools.png"
              class="center mt-2 d-none"
            />
            <img
              src="@/assets/icon/iconMenuFooter/tools.png"
              class="center mt-2 d-block"
            />
          </div>
          <div class="text-center my-2">ตั้งค่า</div>
        </nuxt-link>
      </b-col>
    </b-row>
  </div>
</template>

<style lang="scss" scoped>

a:link,
a:visited {
  color: #C1C1C1;
  text-decoration: none;
}

// .HoverItem:hover {
//     background-color: #6d6d6d;
// }

.HoverItem a:hover,
.HoverItem a:active,
.HoverItem a.nuxt-link-active {
  color: rgb(0, 0, 0);
  .d-none {
    display: block !important;
  }
  .d-block {
    display: none !important;
  }
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 40%;
}

.navbar {
  overflow: hidden;
  background-color: white;
  position: fixed;
  padding: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
}

.row {
  margin-left: 0;
  margin-right: 0;

  .col {
    border-right: 1px solid #dbdbdb;
    border-top: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
  }
}
</style>
