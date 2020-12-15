<template>
  <div>
    <table style="width: 100%" class="">
      <tr class="sbcomponent_table_th">
        <th class="sbcomponent_table_th">รายการสินค้า</th>
        <th class="sbcomponent_table_th">รายละเอียด</th>
        <th class="sbcomponent_table_th">ราคาต่อชิ้น</th>
        <th class="text-center sbcomponent_table_th" style="width: 10%">จำนวน</th>
        <th class="sbcomponent_table_th">ราคารวม </th>
        <th class="sbcomponent_table_th" v-if="Cart.length != 0"></th>
      </tr>
      <tr class="sbcomponent_table_th" v-for="(item, i) in Cart" :key="i">
        <td class="sbcomponent_table_th">{{ item.Product }}</td>
        <td class="sbcomponent_table_th">{{ item.Detail }}</td>
        <td class="sbcomponent_table_th">{{ item.PricePerPiece }}</td>
        <td class="sbcomponent_table_th">
          <div class="input-group d-flex justify-content-center ml-2">
            <input
              type="button"
              @click="down(item)"
              value="-"
              class="button-minus"
              data-field="quantity"
            />
            <input
              type="number"
              step="1"
              max=""
              v-model="item.Qty"
              name="quantity"
              class="quantity-field"
            />
            <input
              type="button"
              @click="Up(item)"
              value="+"
              class="button-plus"
              data-field="quantity"
            />
          </div>
        </td>
        <td class="sbcomponent_table_th">{{ Totalprice(item) }} บาท</td>
        <td class="text-center sbcomponent_table_th">
          <b-button variant="danger" @click="dropitem(item)">ลบ</b-button>
        </td>
      </tr>
    </table>
    <div class="sbcomponent_table_th w-100 col-12 pr-0">
      <div class="row text-mid">
          <div class="col-9 text-right">
               ยอดรวมสินค้า
          </div>
          <div class="col-3 text-right">
             {{summoney(Cart)}}  บาท
          </div> 
      </div>
               <hr class="row hrborder_bottom">
      <div class="row  text-mid">
          <div class="col-9 text-right">
               ยอดรวมสินค้าสุทธิ(VAT)
          </div>
          <div class="col-3 text-right">
             {{summoney(Cart)}}  บาท
          </div> 
      </div>
                <hr class="row hrborder_bottom">
        <div class="row  text-mid">
          <div class="col-10 pr-0">

          </div>
          <div class="col-1 pl-0 pr-0 text-center">
            <button class="btn-delete-product" @click="dropallitem(Cart)">ล้างรายการ</button>
          </div>
          <div class="col-1 pl-0 pr-0 text-center">
              <button class="btn-delete" @click="confirmProduct(Cart)">สั่งซื้อสินค้า</button>
          </div> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import Swal from "sweetalert2";
export default {
  data() {
    return {
      localcart: [],
    };
  },
  computed: {
    ...mapState({
      Cart: (state) => state.Cart.cart,
    }),
    ...mapGetters({
      sumcart: "sumcart",
    }),
  },
  mounted() {
    // this.localcart = [...this.Cart]
  },
  methods: {
    Up(item) {
      this.$store.commit("Cart/updatedUp", item);
    },
    down(item) {
      if (item.Qty == 1) {
        Swal.fire({
          icon: "warning",
          title: "ลบลบลบ",
          text: "ลบลบลบ",
          confirmButtonText: "ตกลง",
          denyButtonText: `ไม่`,
          showDenyButton: true,
          allowOutsideClick: false,
        }).then((result) => {
          if (result.value) {
            this.$store.commit("Cart/updatedDown", item);
          }
        });
      } else {
        this.$store.commit("Cart/updatedDown", item);
      }
    },
    dropitem(item) {
      Swal.fire({
        icon: "warning",
        title: "ลบลบลบ",
        text: "ลบลบลบ",
        confirmButtonText: "ตกลง",
        denyButtonText: `ไม่`,
        showDenyButton: true,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.value) {
          this.$store.commit("Cart/dropitem", item);
        }
      });
    },
    dropallitem(item){
         Swal.fire({
        icon: "warning",
        title: "ลบลบลบ",
        text: "ลบลบลบ",
        confirmButtonText: "ตกลง",
        denyButtonText: `ไม่`,
        showDenyButton: true,
        allowOutsideClick: false,
      }).then((result) => {
        if (result.value) {
          // console.log("asc");
          this.$store.commit("Cart/dropAllitem");
        }
      });
    },
    Totalprice(item) {
      // console.log(item.Qty * item.PricePerPiece);
      return item.Qty * item.PricePerPiece;
    },
    summoney(item){
      let sums = item.map((item) => {
           return item.PricePerPiece * item.Qty
      })

      const result = sums.reduce((sum,number) => {
        return sum+number
      }, 0)
      return result
    },
  
    confirmProduct(item){
      let maindata = []
            item.forEach(values => {  
                    let data  = {id:values.id,
                                  ProductCode :values.ProductCode,
                                  Product :values.Product,
                                  PricePerPiece :values.PricePerPiece,
                                  Detail :values.Detail,
                                  Totalprice :this.Totalprice(values),
                                 }
                        maindata.push(data) 
            });
              console.log(maindata);
    }
  },
};
</script>

<style>
.text-mid{
   height: 100px;
  line-height: 100px;
  text-align: center;
}
.sbcomponent_table_th {
  border: 2px solid #eaeaea;
}
.hrborder_bottom {
   border-bottom: 2px solid #eaeaea;
}   
input,
textarea {
  border: 1px solid #eeeeee;
  box-sizing: border-box;
  margin: 0;
  outline: none;
  padding: 10px;
}

input[type="button"] {
  -webkit-appearance: button;
  cursor: pointer;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.input-group {
  clear: both;
  margin: 15px 0;
  position: relative;
}

.input-group input[type="button"] {
  background-color: #ffffff;
  min-width: 38px;
  width: auto;
  transition: all 300ms ease;
}

.input-group input[type="button"]:active {
  background-color: #e4e4e4;
  min-width: 38px;
  width: auto;
  transition: all 300ms ease;
}

.input-group .button-minus,
.input-group .button-plus {
  font-weight: bold;
  height: 38px;
  padding: 0;
  width: 38px;
  position: relative;
}

.input-group .quantity-field {
  position: relative;
  height: 38px;
  left: -6px;
  text-align: center;
  width: 62px;
  display: inline-block;
  font-size: 13px;
  margin: 0 0 5px;
  resize: vertical;
}

.button-plus {
  left: -13px;
}

input[type="number"] {
  -moz-appearance: textfield;
  -webkit-appearance: none;
}
</style>
