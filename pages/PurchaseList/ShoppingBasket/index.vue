<template>
  <div>
    <HeadTitle class="border-bottom-0" title="รายการซื้อสิ้นค้าของคุณ" />
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
