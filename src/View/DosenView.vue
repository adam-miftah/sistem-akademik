<template>
  <MainHeader />
  <div class="container" style="margin: 80px auto; font-size: 14px;">
    <h2 class="text-center mb-4 fw-bold" style="font-size: 20px;">👨‍🏫 DAFTAR DOSEN</h2>

    <!-- Tabel Daftar Dosen -->
    <div v-if="dosenList.length > 0" class="mb-5">
      <table class="table table-bordered table-striped" style="text-transform: uppercase;">
        <thead class="table-dark text-center">
          <tr>
            <th>No</th>
            <th>Nama Dosen</th>
            <th>NIDN</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(dosen, index) in dosenList" :key="dosen.nidn" class="text-center">
            <td>{{ index + 1 }}</td>
            <td>{{ dosen.nama }}</td>
            <td>{{ dosen.nidn }}</td>
            <td>{{ dosen.email }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="text-center text-muted">
      <p>Belum ada data dosen.</p>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: "DaftarDosenView",
  components: {
    MainHeader,
    TheFooter
  },
  data() {
    return {
      dosenList: [
        {
          nidn: "123456789",
          nama: "Dr. Andi Wijaya",
          email: "andi.wijaya@unpam.ac.id"
        },
        {
          nidn: "987654321",
          nama: "Prof. Siti Aisyah",
          email: "siti.aisyah@unpam.ac.id"
        },
        {
          nidn: "111223344",
          nama: "Dr. Budi Santoso",
          email: "budi.santoso@unpam.ac.id"
        },
        {
          nidn: "123456789",
          nama: "Dr. Andi Wijaya",
          email: "andi.wijaya@unpam.ac.id"
        },
        {
          nidn: "987654321",
          nama: "Prof. Siti Aisyah",
          email: "siti.aisyah@unpam.ac.id"
        },
        {
          nidn: "111223344",
          nama: "Dr. Budi Santoso",
          email: "budi.santoso@unpam.ac.id"
        },
        {
          nidn: "123456789",
          nama: "Dr. Andi Wijaya",
          email: "andi.wijaya@unpam.ac.id"
        },
        {
          nidn: "987654321",
          nama: "Prof. Siti Aisyah",
          email: "siti.aisyah@unpam.ac.id"
        },
        {
          nidn: "111223344",
          nama: "Dr. Budi Santoso",
          email: "budi.santoso@unpam.ac.id"
        },
        {
          nidn: "123456789",
          nama: "Dr. Andi Wijaya",
          email: "andi.wijaya@unpam.ac.id"
        },
        {
          nidn: "987654321",
          nama: "Prof. Siti Aisyah",
          email: "siti.aisyah@unpam.ac.id"
        },
        {
          nidn: "111223344",
          nama: "Dr. Budi Santoso",
          email: "budi.santoso@unpam.ac.id"
        },
        // Tambahkan lebih banyak data dosen sesuai kebutuhan
      ]
    };
  },
};
</script>

<style scoped>
.table {
  font-size: 14px;
}
.table th, .table td {
  vertical-align: middle;
}
.badge {
  font-size: 0.9rem;
  padding: 5px 10px;
}
</style>
