<template>
  <MainHeader />
  <div>

    <main class="container">
      <h5 class="text-center mb-4">Hubungi Kami</h5>

      <div class="row">
        <div class="col-md-6">
          <h5>Informasi Kontak</h5>
          <p><strong>Alamat:</strong> Jl. Raya Puspitek, Buaran, Kec. Pamulang, Kota Tangerang Selatan, Banten 15310</p>
          <p><strong>Telepon:</strong> (+62) 81319310355</p>
          <p><strong>Email:</strong> adammiftahul@unpam.ac.id</p>

          <div class="mt-4">
            <h5>Lokasi Kami</h5>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.100935171518!2d106.72063817504199!3d-6.249788361243663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69ef1f9cfb92b3%3A0xc46c92837cb09f1e!2sJl.%20Raya%20Puspitek%2C%20Buaran%2C%20Kec.%20Pamulang%2C%20Kota%20Tangerang%20Selatan%2C%20Banten%2015310!5e0!3m2!1sid!2sid!4v1712657394393!5m2!1sid!2sid"
              width="100%" height="250" style="border:0;" allowfullscreen="" loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <div class="col-md-6">
          <h5>Formulir Kontak</h5>
          <form @submit.prevent="submitForm">
            <div class="mb-3">
              <label for="nama" class="form-label">Nama</label>
              <input v-model="form.nama" type="text" class="form-control" id="nama" required />
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input v-model="form.email" type="email" class="form-control" id="email" required />
            </div>
            <div class="mb-3">
              <label for="pesan" class="form-label">Pesan</label>
              <textarea v-model="form.pesan" class="form-control" id="pesan" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Kirim Pesan</button>
          </form>
        </div>
      </div>
    </main>

  </div>
  <TheFooter />
</template>

<script>
import MainHeader from '@/components/MainHeader.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
  name: "ContactView",
  components: {
    MainHeader,
    TheFooter
  },
  data() {
    return {
      form: {
        nama: '',
        email: '',
        pesan: ''
      }
    };
  },
  methods: {
    submitForm() {
      alert(`Terima kasih, ${this.form.nama}! Pesanmu telah dikirim.`);
      this.form.nama = '';
      this.form.email = '';
      this.form.pesan = '';
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin-top: 80px;
  margin-bottom: 80px;
  font-size: 12px;
}
iframe {
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
}
</style>
