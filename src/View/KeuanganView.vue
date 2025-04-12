<template>
  <MainHeader />
  <div class="container" style="margin: 80px auto; font-size: 14px;">
    <h2 class="text-center mb-4" style="font-size: 18px;">💰 INFORMASI KEUANGAN MAHASISWA </h2>

    <!-- Filter -->
    <div class="row mb-4" style="font-size: 14px;">
      <div class="col-md-4 mb-2">
        <label for="tahun" class="form-label">Pilih Tahun</label>
        <select class="form-select" v-model="selectedTahun">
          <option disabled value="">-- Pilih Tahun --</option>
          <option v-for="tahun in tahunList" :key="tahun" :value="tahun">
            {{ tahun }}
          </option>
        </select>
      </div>
      <div class="col-md-4 mb-2">
        <label for="semester" class="form-label">Pilih Semester</label>
        <select class="form-select" v-model="selectedSemester">
          <option disabled value="">-- Pilih Semester --</option>
          <option value="Ganjil">Ganjil</option>
          <option value="Genap">Genap</option>
        </select>
      </div>
      <div class="col-md-2 d-flex align-items-end">
        <button class="btn btn-primary mb-2" @click="cetakSemua">Cetak</button>
      </div>
    </div>

    <!-- Tabel Keuangan -->
    <div v-if="filtered.length > 0" class="mb-5">
      <h5 class="text-center mb-3" style="font-size: 18px;">Tahun {{ selectedTahun }} - Semester {{ selectedSemester }}</h5>

      <table class="table table-bordered table-striped" ref="tableToPrint" style="text-transform: uppercase;">
        <thead class="table-dark text-center">
          <tr>
            <th>No</th>
            <th>Nomor Tagihan</th>
            <th>Deskripsi</th>
            <th>Jumlah</th>
            <th>Status</th>
            <th>Tanggal Bayar</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in filtered" :key="index" class="text-center">
            <td>{{ index + 1 }}</td>
            <td>{{ item.nomorTagihan }}</td>
            <td>{{ item.deskripsi }}</td>
            <td>Rp {{ formatRupiah(item.jumlah) }}</td>
            <td>
              <span :class="{
                  'badge bg-success': item.status === 'Lunas',
                  'badge bg-danger': item.status === 'Belum Lunas'
                }">
                {{ item.status }}
              </span>
            </td>
            <td>{{ item.status === 'Lunas' ? item.tanggalBayar : '-' }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-else class="text-center text-muted">
      <p>Silakan pilih tahun dan semester untuk melihat data keuangan.</p>
    </div>
  </div>
  <TheFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheFooter from '@/components/TheFooter.vue';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default {
  name: "KeuanganView",
  components: {
    MainHeader,
    TheFooter
  },
  data() {
    return {
      selectedTahun: "",
      selectedSemester: "",
      tahunList: ["2023", "2024", "2025"],
      semuaData: [
      {
          tahun: "2024",
          semester: "Ganjil",
          nomorTagihan: "TG001",
          deskripsi: "Registrasi",
          jumlah: 400000,
          status: "Lunas",
          tanggalBayar: "2024-09-10"
        },
        {
          tahun: "2024",
          semester: "Ganjil",
          nomorTagihan: "TG002",
          deskripsi: "Angsuran Ke-2",
          jumlah: 200000,
          status: "Belum Lunas",
          tanggalBayar: ""
        },
        {
          tahun: "2024",
          semester: "Ganjil",
          nomorTagihan: "TG003",
          deskripsi: "Angsuran Ke-3",
          jumlah: 200000,
          status: "Belum Lunas",
          tanggalBayar: ""
        },
        {
          tahun: "2024",
          semester: "Ganjil",
          nomorTagihan: "TG004",
          deskripsi: "UTS",
          jumlah: 250000,
          status: "Lunas",
          tanggalBayar: "2024-11-01"
        },
        {
          tahun: "2024",
          semester: "Ganjil",
          nomorTagihan: "TG005",
          deskripsi: "Angsuran Ke-4",
          jumlah: 200000,
          status: "Belum Lunas",
          tanggalBayar: ""
        },
        {
          tahun: "2024",
          semester: "Ganjil",
          nomorTagihan: "TG006",
          deskripsi: "Angsuran Ke-5",
          jumlah: 200000,
          status: "Belum Lunas",
          tanggalBayar: ""
        },
        {
          tahun: "2024",
          semester: "Ganjil",
          nomorTagihan: "TG007",
          deskripsi: "Angsuran Ke-6",
          jumlah: 200000,
          status: "Belum Lunas",
          tanggalBayar: ""
        },
        {
          tahun: "2024",
          semester: "Ganjil",
          nomorTagihan: "TG008",
          deskripsi: "Praktek",
          jumlah: 100000,
          status: "Belum Lunas",
          tanggalBayar: ""
        },
        {
          tahun: "2024",
          semester: "Ganjil",
          nomorTagihan: "TG009",
          deskripsi: "UAS",
          jumlah: 250000,
          status: "Lunas",
          tanggalBayar: "2025-01-05"
        }
      ],
      filtered: [],
    };
  },
  methods: {
    filterData() {
      if (this.selectedTahun && this.selectedSemester) {
        this.filtered = this.semuaData.filter(
          item => item.tahun === this.selectedTahun && item.semester === this.selectedSemester
        );
      } else {
        this.filtered = [];
      }
    },
    formatRupiah(angka) {
      return angka.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    cetakTagihan(item) {
      alert(`Mencetak tagihan: ${item.deskripsi} - Nomor: ${item.nomorTagihan}`);
    },
    bayarTagihan(item) {
      if (item.status === "Lunas") {
        alert("Tagihan sudah lunas.");
      } else {
        alert(`Menuju halaman pembayaran untuk: ${item.deskripsi} - Nomor: ${item.nomorTagihan}`);
      }
    },
    cetakSemua() {
      const doc = new jsPDF();
      const table = this.$refs.tableToPrint;

      if (table) {
        autoTable(doc, { html: table }); // gunakan fungsi dari plugin yang di-import
        doc.save('Tagihan_Pembayaran.pdf');
      } else {
        alert('Tabel tidak ditemukan.');
      }
    },
  },
  watch: {
    selectedTahun() {
      this.filterData();
    },
    selectedSemester() {
      this.filterData();
    }
  }
};
</script>

<style scoped>
.badge {
  font-size: 0.9rem;
  padding: 5px 10px;
}
</style>
