<template>
  <div>
    <MainHeader/>

    <!-- KHS & KRS Section -->
    <div class="container">
      <h2 class="text-center mb-4" style="font-size: 20px;">📊 Kartu Hasil Studi (KHS) dan Kartu Rencana Studi (KRS) </h2>

      <!-- Tabs for KHS and KRS -->
      <div class="d-flex justify-content-center mb-1">
        <button class="btn btn-outline-primary me-2" @click="activeTab = 'khs'" :class="{ 'active-tab': activeTab === 'khs' }" style="width: 80px;">
          KHS
        </button>
        <button class="btn btn-outline-primary" @click="activeTab = 'krs'" :class="{ 'active-tab': activeTab === 'krs' }" style="width: 80px;">
          KRS
        </button>
      </div>

      <!-- KHS Tab -->
      <div v-if="activeTab === 'khs'" class="tab-content">
        <div class="table-responsive " style="text-transform: uppercase;">
          <table class="table table-bordered table-hover text-white">
            <thead class="table-dark">
              <tr>
                <th>Kode Mata Kuliah</th>
                <th>Mata Kuliah</th>
                <th>Nilai</th>
                <th>SKS</th>
              </tr>
            </thead>
              <tbody>
                <tr v-for="(khs, index) in khs" :key="index">
                  <td>{{ khs.kode }}</td>
                  <td>{{ khs.mataKuliah }}</td>
                  <td>{{ khs.nilai }}</td>
                  <td>{{ khs.sks }}</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>

      <!-- KRS Tab -->
      <div v-if="activeTab === 'krs'" class="tab-content">
        <div class="table-responsive">
          <table class="table table-bordered table-hover text-white">
            <thead class="table-dark">
              <tr>
                <th>Kode Mata Kuliah</th>
                <th>Mata Kuliah</th>
                <th>SKS</th>
                <th>Dosen Pengampu</th>
              </tr>
            </thead>
            <tbody>
                <tr v-for="(krs, index) in krs" :key="index">
                  <td>{{ krs.kode }}</td>
                  <td>{{ krs.mataKuliah }}</td>
                  <td>{{ krs.sks }}</td>
                  <td>{{ krs.dosen }}</td>
                </tr>
              </tbody>
          </table>
        </div>
      </div>
    </div>

    <TheFooter/>
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: "KhsKrsView",
  components: {
    MainHeader,
    TheFooter
  },
  data() {
    return {
      activeTab: 'khs', 
      khs: [
        { kode: "22TIF2012", mataKuliah: "SISTEM PENDUKUNG KEPUTUSAN", nilai: "B", sks: "2" },
        { kode: "22TIF0342", mataKuliah: "TEKNOLOGI INTERNET OF THINGS", nilai: "A", sks: "2" },
        { kode: "22TIF3012", mataKuliah: "TEKNIK KOMPILASI", nilai: "A", sks: "2" },
        { kode: "22TIF0363", mataKuliah: "BASIS DATA II", nilai: "A", sks: "3" },
        { kode: "22TIF0353", mataKuliah: "PEMROGRAMAN II", nilai: "A", sks: "3" },
        { kode: "22TIF0323", mataKuliah: "REKAYASA PERANGKAT LUNAK", nilai: "A", sks: "3" },
        { kode: "22TIF0332", mataKuliah: "KERJA PRAKTEK", nilai: "B", sks: "2" },
        { kode: "22TIF0443", mataKuliah: "MOBILE PROGRAMMING", nilai: "A", sks: "3" }
      ],
      krs: [
        { kode: "22TIF2012", mataKuliah: "SISTEM PENDUKUNG KEPUTUSAN", sks: "2", dosen: "IIS AISYAH" },
        { kode: "22TIF0342", mataKuliah: "TEKNOLOGI INTERNET OF THINGS", sks: "2", dosen: "RENGGA ERLANGGA" },
        { kode: "22TIF3012", mataKuliah: "TEKNIK KOMPILASI", sks: "2", dosen: "AFIANI AGUS ABDILLAH" },
        { kode: "22TIF0363", mataKuliah: "BASIS DATA II", sks: "3", dosen: "ICHSAN RAMDHANI" },
        { kode: "22TIF0353", mataKuliah: "PEMROGRAMAN II", sks: "3", dosen: "YULIANTI" },
        { kode: "22TIF0323", mataKuliah: "REKAYASA PERANGKAT LUNAK", sks: "3", dosen: "YESKARWANI GULO" },
        { kode: "22TIF0332", mataKuliah: "KERJA PRAKTEK", sks: "2", dosen: "HADI ZAKARIA" },
        { kode: "22TIF0443", mataKuliah: "MOBILE PROGRAMMING", sks: "3", dosen: "TOMI HIDAYAT" }
      ]
    };
  }
}
</script>

<style scoped>
.container {
  margin: 80px auto;
}
.tab-content {
  background-color: #f8f9fa;
  border-radius: 5px;
  font-size: 14px;
}

button.active-tab {
  background-color: var(--bs-primary);
  color: white;
}

.table td {
  color: black;
  vertical-align: middle;
}

.table {
  background-color: rgba(255, 255, 255, 0.1);
}

.table-responsive {
  margin-top: 20px;
}

h2 {
  font-size: 24px;
  font-weight: bold;
}
</style>
