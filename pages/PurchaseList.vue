<template>
  <div>
    <HeadTitle class="mb-3" title="รายการซื้อ" />

    <b-row class="mb-3">
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="ชื่อสินค้า"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="ตำแหน่ง"
          aria-label="Last name"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="รุ่นรถยนต์"
        />
      </div>
      <div class="col">
        <input
          type="text"
          class="form-control"
          placeholder="โฉมรถ"
        />
      </div>
      <div class="col">
        <b-button class="w-50" variant="info">ค้นหา</b-button>
      </div>
    </b-row>

    <b-table
      striped
      hover
      show-empty
      :items="dataSet"
      :fields="columsName"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      :current-page="currentPage"
      :per-page="perPage"
      ref="table"
    >
      <template v-slot:cell(id)="data">
        <b-button class="w-100" variant="warning" @click="addCart(data.item)"
          >ซื้อสินค้า</b-button
        >
      </template>
      <template #empty> ไม่มีข้อมูลในระบบ </template>
    </b-table>

    <b-row class="overflow-auto d-flex justify-content-center p-4 res">
      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
  </div>
</template>
<script>
import HeadTitle from '@/components/TopComponents/HeadTitle'

export default {
  layout: 'content',
  components: { HeadTitle },

  data() {
    return {
      dataSet: [],
      columsName: [
        {
          key: 'ProductCode',
          label: 'รหัสสินค้า',
          sortable: false,
          class: 'text-center align-middle',
        },
        {
          key: 'Product',
          label: 'สินค้า',
          sortable: false,
          class: 'text-center align-middle',
        },
        {
          key: 'Detail',
          label: 'รายละเอียด',
          sortable: false,
          class: 'text-center align-middle',
        },
        {
          key: 'unit',
          label: 'หน่วย',
          sortable: false,
          class: 'text-center align-middle',
        },
        {
          key: 'PricePerPiece',
          label: 'ราคาต่อชิ้น',
          sortable: false,
          class: 'text-center align-middle',
        },
        {
          key: 'id',
          label: '',
          sortable: false,
          class: 'text-center align-middle',
        },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      sortBy: '',
      sortDesc: false,
      filter: null,
      isBusy: false,
    }
  },
  mounted() {
    this.getdata()
  },
  methods: {
    getdata() {
      let tempdata = [
        {
          ProductCode: '0001',
          Product: 'a1',
          Detail: 'Detail1',
          unit: 'หน่วย',
          PricePerPiece: 40.0,
          Qty: 1,
          id: '01',
        },
        {
          ProductCode: '0002',
          Product: 'a2',
          Detail: 'Detail2',
          unit: 'หน่วย',
          PricePerPiece: 40.0,
          Qty: 1,
          id: '02',
        },
        {
          ProductCode: '0003',
          Product: 'a3',
          Detail: 'Detail1',
          unit: 'หน่วย',
          PricePerPiece: 40.0,
          Qty: 1,
          id: '03',
        },
        {
          ProductCode: '0004',
          Product: 'a4',
          Detail: 'Detail1',
          unit: 'หน่วย',
          PricePerPiece: 40.0,
          Qty: 1,
          id: '01',
        },
        {
          ProductCode: '0005',
          Product: 'a5',
          Detail: 'Detail4',
          unit: 'หน่วย',
          PricePerPiece: 50.0,
          Qty: 1,
          id: '02',
        }
      ]
      this.dataSet = tempdata
    },
    addCart(item) {
      let cart = []
      cart.push(item)
      this.$store.dispatch('addcart', cart)
      // console.log(cart);
    },
  },
}
</script>
