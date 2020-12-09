<template>
  <div>
    <!-- components HeadTitle -->
    <HeadTitle title="รายการขาย" />

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

    <!-- table table-bordered -->
    <!-- <table class="table table-bordered res">
      <thead>
        <tr>
          <th scope="col">เลขที่ใบสั่งขาย (SO number)</th>
          <th scope="col">วันที่</th>
          <th scope="col">เวลา</th>
          <th scope="col">ลูกค้า</th>
          <th scope="col">สถานะ</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td width="22%">0919-0010</td>
          <td>12/01/2562</td>
          <td>10:49:31</td>
          <td width="22%">ร้าน cc อะไหล่ยนต์ Autopair</td>
          <td><b-button class="Btnstatus">รีเซท</b-button></td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td><b-button class="Btnstatus">รีเซท</b-button></td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </table> -->

    <!-- <b-table
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
      <template v-slot:cell(Status)="data">
        {{ data.item.Status == 1 ? 'ขายได้' : 'เลิกขาย' }}
      </template>
    </b-table> -->

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
      :sort-direction="sortDirection"
    >
      <template #cell(name)="row">
        {{ row.value.first }} {{ row.value.last }}
      </template>

      <template #cell(actions)="row">
        <b-button
          size="sm"
          @click="info(row.item, row.index, $event.target)"
          class="mr-1"
        >
          Info modal
        </b-button>
      </template>
    </b-table>

    <b-row>
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

    <!-- <div class="overflow-auto d-flex justify-content-center p-4 res">
      Use text in props
      <b-pagination
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
      ></b-pagination>
    </div> -->
  </div>
</template>

<script>
import HeadTitle from '@/components/TopComponents/HeadTitle'
import TopFormInput from '@/components/TabletComponents/TopFormInput'

export default {
  layout: 'content',
  components: { HeadTitle, TopFormInput },

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
          isActive: true,
          age: 40,
          name: { first: 'Dickerson', last: 'Macdonald' },
        },
        { isActive: false, age: 21, name: { first: 'Larsen', last: 'Shaw' } },
        {
          isActive: false,
          age: 9,
          name: { first: 'Mini', last: 'Navarro' },
        },
        { isActive: false, age: 89, name: { first: 'Geneva', last: 'Wilson' } },
        { isActive: true, age: 38, name: { first: 'Jami', last: 'Carney' } },
        { isActive: false, age: 27, name: { first: 'Essie', last: 'Dunlap' } },
        { isActive: true, age: 40, name: { first: 'Thor', last: 'Macdonald' } },
        {
          isActive: true,
          age: 87,
          name: { first: 'Larsen', last: 'Shaw' },
        },
        { isActive: false, age: 26, name: { first: 'Mitzi', last: 'Navarro' } },
        {
          isActive: false,
          age: 22,
          name: { first: 'Genevieve', last: 'Wilson' },
        },
        { isActive: true, age: 38, name: { first: 'John', last: 'Carney' } },
        { isActive: false, age: 29, name: { first: 'Dick', last: 'Dunlap' } },
      ],
      fields: [
        {
          key: 'name',
          label: 'Person full name',
          sortable: false,
          sortDirection: 'desc',
        },
        {
          key: 'age',
          label: 'Person age',
          sortable: false,
          class: 'text-center',
        },
        {
          key: 'isActive',
          label: 'Is Active',
          formatter: (value, key, item) => {
            return value ? 'Yes' : 'No'
          },
          sortable: false,
        },
        { key: 'actions', label: 'Actions' },
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 10,
      sortBy: '',
      sortDesc: false,
      sortDirection: 'asc',
      filter: null,
      infoModal: {
        id: 'info-modal',
        title: '',
        content: '',
      },
    }
  },
  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length
  },
  methods: {
    info(item, index, button) {
      console.log("ควย")
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
