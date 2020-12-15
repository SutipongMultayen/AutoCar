<template>
  <div>
    <!-- components HeadTitle -->
    <HeadTitle title="รายการขาย" />

    <!-- Responsive -->
    <TopFormInput class="resHide" />
    <CardComponents class="resHide" />
sd
    <SaleItems />
  </div>
</template>

<script>
import HeadTitle from '@/components/TopComponents/HeadTitle'
import TopFormInput from '@/components/SaleItemsComponents/Tablet/TopFormInput'
import SaleItems from '@/components/SaleItemsComponents/Wabsite/'

export default {
  layout: 'content',
  components: { HeadTitle, TopFormInput, SaleItems },
}
</script>

<style lang="scss">
@import '@/globalStyles/default.scss';

@include respond-to($tablet) {
  .resHide {
    display: block !important;
  }
}

.resHide {
  display: none;
}
</style>
