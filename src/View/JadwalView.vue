<template>
  <MainHeader/>
  <div class="jadwal-container">
    <h2 class="text-center mb-4" style="font-size: 20px;">📅 JADWAL KULIAH MAHASISWA </h2>

    <table class="table table-bordered table-hover" style="text-transform: uppercase;">
      <thead class="table-dark">
        <tr>
          <th>Kode Mata Kuliah</th>
          <th>Hari</th>
          <th>Mata Kuliah</th>
          <th>Jam</th>
          <th>Ruangan</th>
          <th>Dosen</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(jadwal, index) in jadwalKuliah" :key="index">
          <td>{{ jadwal.kode }}</td>
          <td>{{ jadwal.hari }}</td>
          <td>{{ jadwal.mataKuliah }}</td>
          <td>{{ jadwal.jam }}</td>
          <td>{{ jadwal.ruangan }}</td>
          <td>{{ jadwal.dosen }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <TheFooter/>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
  name: "JadwalView",
  components: {
    MainHeader,
    TheFooter
  },
  data() {
    return {
      jadwalKuliah: [
        { kode: "22TIF2012", hari: "Senin", mataKuliah: "SISTEM PENDUKUNG KEPUTUSAN", jam: "08:50 - 10:30", ruangan: "VIKTOR, V.530", dosen: "IIS AISYAH" },
        { kode: "22TIF0342", hari: "Senin", mataKuliah: "TEKNOLOGI INTERNET OF THINGS", jam: "10:30 - 12:10", ruangan: "VIKTOR, V.530", dosen: "RENGGA ERLANGGA" },
        { kode: "22TIF3012", hari: "Senin", mataKuliah: "TEKNIK KOMPILASI", jam: "13:00 - 14:40", ruangan: "VIKTOR, V.530", dosen: "AFIANI AGUS ABDILLAH" },
        { kode: "22TIF0363", hari: "Selasa", mataKuliah: "BASIS DATA II", jam: "08:50 - 10:30", ruangan: "VIKTOR, V.530", dosen: "ICHSAN RAMDHANI" },
        { kode: "22TIF0353", hari: "Selasa", mataKuliah: "PEMROGRAMAN II", jam: "10:30 - 12:10", ruangan: "VIKTOR, V.530", dosen: "YULIANTI" },
        { kode: "22TIF0323", hari: "Rabu", mataKuliah: "REKAYASA PERANGKAT LUNAK", jam: "08:50 - 10:30", ruangan: "VIKTOR, V.530", dosen: "YESKARWANI GULO" },
        { kode: "22TIF0332", hari: "Jumat", mataKuliah: "KERJA PRAKTEK", jam: "10:30 - 12:10", ruangan: "VIKTOR, V.530", dosen: "HADI ZAKARIA" },
        { kode: "22TIF0443", hari: "Jumat", mataKuliah: "MOBILE PROGRAMMING", jam: "14:40 - 16:20", ruangan: "VIKTOR, V.530", dosen: "TOMI HIDAYAT" }
      ]
    };
  }
};
</script>

<style scoped>
.jadwal-container {
  max-width: 900px;
  margin: 80px auto;
  border-radius: 16px;
  color: white;
  font-size: 14px;
}

h2 {
  color: black;
}

.table {
  background-color: rgba(255, 255, 255, 0.1);
}


.table td {
  color: black;
  vertical-align: middle;
}
</style>
