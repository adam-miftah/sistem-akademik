<template>
  <MainHeader />
  <div class="container" style="margin: 70px auto; max-width: 900px;">
    <div class="card shadow p-4">
      <div class="row">
        <!-- FOTO PROFIL -->
        <div class="col-md-4 text-center mb-4 mb-md-0 d-flex flex-column align-items-center">
          <img :src="user.foto || require('@/assets/Profil.jpeg')" alt="Profil" class="rounded-circle mb-3"
            style="width: 130px; height: 130px; object-fit: cover;">
          <h5 class="fw-bold" style="font-size: 14px;">{{ user.nama }}</h5>
          <p class="text-muted mb-0" style="font-size: 10px;">{{ user.email }}</p>
        </div>

        <!-- INFORMASI PROFIL -->
        <div class="col-md-8">
          <div class="row mb-2">
            <div class="col-5 fw-bold">Awal Kuliah</div>
            <div class="col-7">{{ user.awal_kuliah }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5 fw-bold">NIM</div>
            <div class="col-7">{{ user.id }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5 fw-bold">Tanggal Lahir</div>
            <div class="col-7">{{ user.tanggal_lahir }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5 fw-bold">Program Studi</div>
            <div class="col-7">{{ user.prodi }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5 fw-bold">Prog. Perkuliahan</div>
            <div class="col-7">{{ user.prog_perkuliahan }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5 fw-bold">Kelas</div>
            <div class="col-7">{{ user.kelas }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5 fw-bold">Email</div>
            <div class="col-7">{{ user.email }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5 fw-bold">No. HP</div>
            <div class="col-7">{{ user.hp }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5 fw-bold">Alamat</div>
            <div class="col-7">{{ user.alamat }}</div>
          </div>
          <div class="row mb-2">
            <div class="col-5 fw-bold">Status Mahasiswa</div>
            <div class="col-7">{{ user.status_mahasiswa }}</div>
          </div>
        </div>
      </div>

      <div class="text-end mt-4">
        <router-link to="/home" class="btn btn-secondary">← Kembali</router-link>
      </div>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: "DetailProfile",
  components: {
    MainHeader,
    TheFooter
  },
  data() {
    return {
      user: {
        awal_kuliah: "2022",
        nama: "ADAM MIFTAHUL FALAH",
        id: "221011400961",
        tanggal_lahir: "2001-01-01",
        prodi: "Teknik Informatika",
        prog_perkuliahan: "Reguler A",
        kelas: "06TPLP009",
        email: "adammiftah196@gmail.com",
        hp: "081319310355",
        alamat: "Jl. Teknologi No. 42, Tangerang Selatan",
        status_mahasiswa: "Aktif"
      }
    };
  }
};
</script>

<style scoped>
.card {
  background: #fff;
  border-radius: 10px;
}

@media (max-width: 768px) {
  .card .row > div {
    text-align: center;
  }

  .card .row .col-5,
  .card .row .col-7 {
    text-align: left;
  }
}
</style>
