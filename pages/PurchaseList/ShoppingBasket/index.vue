<template>
  <div>
    <HeadTitle title="รายการซื้อสิ้นค้าของคุณ" />
    <ShoppingBasket />
  </div>
</template>

<script>
import ShoppingBasket from '@/components/PurchaseListComponents/ShoppingBasketComponent/index.vue'
export default {
  layout: 'content',
  components: { ShoppingBasket },
}
</script>

<style></style>
