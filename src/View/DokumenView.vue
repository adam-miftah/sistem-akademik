<template>
  <div>
    <MainHeader />

    <div class="container" style="margin: 80px auto; text-transform: uppercase;">
      <h2 class="text-center mb-4" style="font-size: 20px;">📄 Daftar Dokumen Mahasiswa </h2>

      <div class="table-responsive">
        <table class="table table-bordered table-hover text-white">
          <thead class="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama Dokumen</th>
              <th scope="col">Keterangan</th>
              <th scope="col" class="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dokumen, index) in dokumenList" :key="index">
              <th scope="row">{{ index + 1 }}</th>
              <td>{{ dokumen.judul }}</td>
              <td>{{ dokumen.keterangan }}</td>
              <td class="text-center">
                <a :href="dokumen.link" target="_blank" class="btn btn-sm btn-primary me-2">Lihat</a>
                <button class="btn btn-sm btn-outline-secondary" @click="unduhDokumen(dokumen)">Unduh</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <TheFooter />
  </div>
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import TheFooter from '@/components/TheFooter.vue'

export default {
  name: 'DokumenView',
  components: {
    MainHeader,
    TheFooter
  },
  data() {
    return {
      dokumenList: [
        {
          judul: 'Surat Aktif Kuliah',
          keterangan: 'Dokumen resmi menyatakan mahasiswa aktif',
          link: '/dokumen/surat-aktif.pdf'
        },
        {
          judul: 'Transkrip Nilai',
          keterangan: 'Daftar nilai seluruh mata kuliah',
          link: '/dokumen/transkrip.pdf'
        },
        {
          judul: 'KHS Semester Ganjil',
          keterangan: 'Kartu Hasil Studi semester ganjil',
          link: '/dokumen/khs-ganjil.pdf'
        },
        {
          judul: 'Surat Cuti Kuliah',
          keterangan: 'Surat pengajuan cuti akademik',
          link: '/dokumen/cuti.pdf'
        },
        {
          judul: 'Surat Cuti Kuliah',
          keterangan: 'Surat pengajuan cuti akademik',
          link: '/dokumen/cuti.pdf'
        },
        {
          judul: 'Surat Cuti Kuliah',
          keterangan: 'Surat pengajuan cuti akademik',
          link: '/dokumen/cuti.pdf'
        },
        {
          judul: 'Surat Cuti Kuliah',
          keterangan: 'Surat pengajuan cuti akademik',
          link: '/dokumen/cuti.pdf'
        },
        {
          judul: 'Surat Cuti Kuliah',
          keterangan: 'Surat pengajuan cuti akademik',
          link: '/dokumen/cuti.pdf'
        },
        {
          judul: 'Surat Cuti Kuliah',
          keterangan: 'Surat pengajuan cuti akademik',
          link: '/dokumen/cuti.pdf'
        },
        {
          judul: 'Surat Cuti Kuliah',
          keterangan: 'Surat pengajuan cuti akademik',
          link: '/dokumen/cuti.pdf'
        }
      ]
    }
  },
  methods: {
    unduhDokumen(dokumen) {
      const link = document.createElement('a')
      link.href = dokumen.link
      link.download = dokumen.judul + '.pdf'
      link.click()
    }
  }
}
</script>

<style scoped>

.table-responsive {
  font-size: 14px;
}
h2 {
  font-weight: bold;
}

.table td {
  color: black;
  vertical-align: middle;
}

.table td .btn {
  min-width: 70px;
}
</style>
