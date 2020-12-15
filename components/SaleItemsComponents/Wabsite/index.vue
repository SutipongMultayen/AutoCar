<template>
  <div>
    <!-- Form -->
    <b-row class="mx-0 my-3 res">
      <b-col class="col-md-5">
        <b-row>
          <b-col class="pl-0">
            <b-form-group label="เลขที่ใบสั่งขาย">
              <b-form-input placeholder="-- เลขที่ใบสั่งขาย --"></b-form-input>
            </b-form-group>
          </b-col>
          <b-col class="pl-0">
            <b-form-group label="สถานะ">
              <b-form-select
                v-model="selected"
                :options="options"
              ></b-form-select>
            </b-form-group>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="absoluteL col-md-3 pl-0">
        <b-button class="reset">รีเซท</b-button>
      </b-col>
      <b-col class="absolute col-md-4">
        <b-row>
          <b-col>
            <b-button class="print">
              <b-row class="mx-2">
                <img class="mx-2" src="@/assets/icon/printer.png" alt="" />
                พิมพ์ภาษีขาย
              </b-row>
            </b-button>
          </b-col>

          <b-col class="pl-0">
            <b-button class="add ml-3">
              <b-row class="mx-2">
                <img class="mx-2" src="@/assets/icon/add.png" alt="" />
                เพิ่มรายการซื้อ
              </b-row>
            </b-button>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      hover
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
      class="res"
    >
      <template #cell(status)="row">
        <b-button
          size="md"
          @click="info(row.item, row.index, $event.target)"
          class="mr-1 w-100"
        >
          รอชำระเงิน
        </b-button>
      </template>
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
export default {
  data() {
    return {
      selected: null,
      options: [
        { value: null, text: '-- สถานะ --' },
        { value: 'a', text: 'This is First option' },
        { value: 'b', text: 'Selected Option' },
        { value: { C: '3PO' }, text: 'This is an option with object value' },
        { value: 'd', text: 'This one is disabled', disabled: true },
      ],
      items: [
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
        {
          SONumber: '0919-0010',
          date: '12/01/2565',
          time: '10:49:31',
          customer: 'ร้าน cc อะไหล่ยนต์',
          status: '',
        },
      ],
      fields: [
        {
          key: 'SONumber',
          label: 'เลขที่ใบสั่งขาย (SO Number)',
        },
        { key: 'date', label: 'วันที่' },
        {
          key: 'time',
          label: 'เวลา',
        },
        { key: 'customer', label: 'ลูกค้า' },
        { key: 'status', label: 'สถานะ' },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      sortBy: '',
      sortDesc: false,
      filter: null,
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    info(item, index, button) {
      // console.log("ควย")
      // this.infoModal.title = `Row index: ${index}`
      // this.infoModal.content = JSON.stringify(item, null, 2)
      // this.$root.$emit('bv::show::modal', this.infoModal.id, button)
    },
  },
}
</script>

<style lang="scss">
@import '@/globalStyles/default.scss';

@include respond-to($tablet) {
  .res {
    display: none !important;
  }

  .resHide {
    display: block !important;
  }
}

.resHide {
  display: none;
}

tbody tr {
  text-align: center;
  td {
    padding: 0.5rem;
  }

  .table th,
  .table td {
    vertical-align: middle;
  }
}
.Btnstatus {
  background-color: $statusReject;
  width: 100%;
  border: 0;
}

.reset {
  background-color: $statusReject;
  width: 65%;
  border: 0;
}

// input {
//   margin-right: 5rem;
// }

.form-group {
  margin-right: 4%;
}

.absolute {
  // margin-top: 1.4%;
  margin-top: 1.4rem;
  text-align: right;
  padding: 0;

  .btn {
    height: 3rem;
    border: 0;
    width: 100%;
  }
  .print {
    background-color: #0e2340;
  }
  .add {
    background-color: $statusDone;
  }
  img {
    height: auto;
    width: 13%;
  }
}
.absoluteL {
  // margin-top: 2.1%;
  margin-top: 2rem;
  // margin-left: -3%;
}
</style>
