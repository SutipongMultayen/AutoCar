<template>
  <div>
    <HeadTitle class="mb-3" title="รายการซื้อ" />
    <PurchaseList />
  </div>
</template>
<script>
import HeadTitle from '@/components/TopComponents/HeadTitle'
import PurchaseList from '@/components/PurchaseListComponents'

export default {
  layout: 'content',
  components: { HeadTitle, PurchaseList},
}
</script>
