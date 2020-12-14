<template>
  <div>
    <table style="width: 100%" class="">
      <tr class="sbcomponent_table_th">
        <th class="sbcomponent_table_th">รายการสินค้า</th>
        <th class="sbcomponent_table_th">รายละเอียด</th>
        <th class="sbcomponent_table_th">ราคาต่อชิ้น</th>
        <th class="sbcomponent_table_th">จำนวน</th>
        <th class="sbcomponent_table_th">ราคารวมxx</th>
        <th class="sbcomponent_table_th"></th>
      </tr>
      <tr class="sbcomponent_table_th" v-for="(item, i) in Cart" :key="i">
        <td class="sbcomponent_table_th">{{ item.Product }}</td>
        <td class="sbcomponent_table_th">{{ item.Detail }}</td>
        <td class="sbcomponent_table_th">{{ item.PricePerPiece }}</td>
        <td class="sbcomponent_table_th">
          <div class="col-12">
            <div class="row">
              <div class="col-4">
                <b-button variant="danger" @click="down(item)">ลง</b-button>
              </div>
              <div class="col-4">
                <b-form-input v-model="item.Qty"></b-form-input>
              </div>
              <div class="col-4">
                <b-button variant="danger" @click="Up(item)">ขึ้น</b-button>
              </div>
            </div>
          </div>
        </td>
        <td class="sbcomponent_table_th">{{ Totalprice(item) }} บาท</td>
        <td class="text-center sbcomponent_table_th">
          <b-button variant="danger" @click="dropitem(item)">ลบ</b-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import Swal from 'sweetalert2'
export default {
  data() {
    return {
      localcart: [],
    }
  },
  computed: {
    ...mapState({
      Cart: (state) => state.cart,
    }),
    ...mapGetters({
      sumcart: 'sumcart',
    }),
  },
  mounted() {
    // this.localcart = [...this.Cart]
  },
  methods: {
    Up(item) {
      this.$store.commit('updatedUp', item)
    },
    down(item) {
      if (item.Qty == 1) {
        Swal.fire({
          icon: 'warning',
          title: 'ลบลบลบ',
          text: 'ลบลบลบ',
          confirmButtonText: 'ตกลง',
          denyButtonText: `ไม่`,
          showDenyButton: true,
          allowOutsideClick: false,
        }).then((result) => {
          if (result.value) {
            this.$store.commit('updatedDown', item)
          }
        })
      } else {
        this.$store.commit('updatedDown', item)
      }
    },
    dropitem(item) {
      Swal.fire({
        icon: 'warning',
        title: 'ลบลบลบ',
        text: 'ลบลบลบ',
        confirmButtonText: 'ตกลง',
        denyButtonText: `ไม่`,
        showDenyButton: true,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.value) {
          this.$store.commit('dropitem', item)
        }
      })

      // console.log(item);
    },
    Totalprice(item) {
      // console.log(item.Qty * item.PricePerPiece);
      return item.Qty * item.PricePerPiece
    },
  },
}
</script>

<style>
.sbcomponent_table_th {
  border: 2px solid #eaeaea;
}
</style>
