<template>
  <b-navbar toggleable="lg">
    <!-- <b-navbar-brand href="#">NavBar</b-navbar-brand> -->
    <b-img
      class="responsive"
      src="@/assets/img/logo-autopair-blue.png"
      alt="Responsive image"
    ></b-img>

    <!-- <b-navbar-toggle target="nav-collapse"></b-navbar-toggle> -->

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <div class="mr-5">
          <b-row>
            <nuxt-link
              to="/ShoppingBasket"
              class="cart position-relative d-inline-flex mr-3"
            >
              <b-img
                class="mr-1"
                height="30%"
                src="@/assets/icon/shopping-cart-top.png"
                alt="Responsive image"
              ></b-img>
              <span
                class="cart-basket d-flex align-items-center justify-content-center"
              >
                <span v-if="countCart != null">{{ countCart.length }}</span>
                <span v-else>0</span>
              </span>
            </nuxt-link>

            <nuxt-link to="/home"><h6 class="m-2">หน้าหลัก</h6></nuxt-link>
          </b-row>
        </div>

        <div class="mr-5 border-left pl-4">
          <b-img
            class="mr-1"
            width="35%"
            src="@/assets/img/facebook.png"
            alt="Responsive image"
          ></b-img>
          <b-img
            width="35%"
            src="@/assets/img/line.png"
            alt="Responsive image"
          ></b-img>
        </div>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      countCart: (state) => state.cart,
    }),
  },
}
</script>

<style lang="scss" scoped>
@import '~/globalStyles/responsive.scss';

a.cart .cart-basket {
  font-size: 0.8rem;
  position: absolute;
  top: -6px;
  right: -5px;
  width: 20px;
  height: 20px;
  color: #fff;
  background-color: #e22828;
  border-radius: 50%;
}

.navbar {
  border-bottom: 4.5px solid #176492;
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
}

.responsive {
  width: 10%;
  margin-left: 3rem;
}
a {
  color: #000;
}
a:hover {
  color: #0056b3;
  text-decoration: none;
}

@include respond-to($tablet) {
  .responsive {
    width: 30%;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
