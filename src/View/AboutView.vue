<template>
  <MainHeader/>
  <div class="about-container">
    <h1 class="title">Tentang SITIKIMAK</h1>
    <p class="description">
      SITIKIMAK (Sistem Informasi Teknik Informatika Mahasiswa Akademik UNPAM) adalah platform yang dirancang untuk
      membantu mahasiswa dalam mengakses informasi akademik dengan mudah dan efisien.
    </p>

    <div class="vision-mission">
      <h2>Visi</h2>
      <p class="description">Menjadi sistem informasi akademik unggulan yang mendukung kemajuan teknologi pendidikan di lingkungan Teknik Informatika UNPAM.</p>
      
      <h2>Misi</h2>
      <ul>
        <li>✅ Menyediakan akses informasi akademik yang cepat dan akurat</li>
        <li>✅ Meningkatkan keterlibatan mahasiswa dengan teknologi informasi</li>
        <li>✅ Meningkatkan efisiensi layanan akademik secara digital</li>
      </ul>
    </div>

    <div class="purpose">
      <h2>Tujuan Pengembangan</h2>
      <p class="description">
        SITIKIMAK dikembangkan sebagai solusi digital untuk mempermudah mahasiswa dalam mengakses jadwal kuliah, nilai, informasi keuangan, dan informasi akademik lainnya secara mandiri tanpa perlu datang langsung ke kampus.
      </p>
    </div>

    <div class="features">
      <h2>Fitur Utama</h2>
      <ul>
        <li>📌 Informasi jadwal kuliah dan ujian</li>
        <li>📌 Informasi KHS & KRS mahasiswa</li>
        <li>📌 Informasi akademik mahasiswa</li>
        <li>📌 Informasi keuangan mahasiswa</li>
        <li>📌 Profil pengguna yang dapat disesuaikan</li>
        <li>📌 Informasi dosen</li>
      </ul>
    </div>

    <div class="technologies">
      <h2>Teknologi yang Digunakan</h2>
      <ul>
        <li>💻 Vue.js untuk antarmuka pengguna</li>
        <li>🗄️ MySQL sebagai basis data</li>
        <li>🔗 API untuk integrasi data akademik</li>
        <li>🎨 Bootstrap / TailwindCSS untuk styling</li>
      </ul>
    </div>

    <div class="team">
      <h2>Pengembang</h2>
      <p style="font-size: 14px;">ADAM MIFTAHUL FALAH - 221011400961</p>
      <p style="font-size: 14px;">Email: adammiftahul@unpam.ac.id</p>
    </div>
  </div>
  <TheFooter/>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
export default {
  name: "AboutView",
  components: {
    MainHeader,
    TheFooter
  }
};
</script>

<style scoped>
.about-container {
  max-width: 800px;
  overflow-x: hidden;
  margin: 70px auto 30px auto;
  padding: 20px;
  text-align: center;
}

.title {
  font-size: 20px;
  font-weight: bold;
  color: #1B0357;
  margin-bottom: 10px;
}

.description {
  font-size: 14px;
  color: #444;
  line-height: 1.6;
  margin-bottom: 20px;
}

.features h2,
.vision-mission h2,
.purpose h2,
.technologies h2,
.team h2 {
  font-size: 20px;
  color: #1B0357;
  margin-top: 20px;
}

.features ul,
.vision-mission ul,
.technologies ul {
  list-style: none;
  padding: 0;
}

.features li,
.vision-mission li,
.technologies li {
  font-size: 14px;
  color: #333;
  margin: 5px 0;
}

.team ul {
  list-style: none;
  padding: 0;
  margin-top: -12px;
}

.team li {
  font-size: 14px;
  color: #333;
  margin: 5px 0;
}
</style>
