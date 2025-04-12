<template>
  <div class="body">
    <div class="container ">
      <div class="formlogin">
        <h1 class="text-center fw-bold mb-4">Login</h1>

        <form @submit.prevent="login" method="post">
          <div class="mb-3">
            <label for="exampleInputNIM" class="form-label">NIM</label>
            <input v-model="nim" type="text" class="form-control" id="exampleInputNIM" 
                  placeholder="Masukkan NIM Anda" required 
                  pattern="[0-9]{8,12}" title="Masukkan NIM yang valid (8-12 digit angka)" />
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label">Password</label>
            <input v-model="password" type="password" class="form-control" 
                  id="exampleInputPassword1" placeholder="Password" required />
          </div>
          <div class="mb-3 form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1">
            <label class="form-check-label" for="exampleCheck1">Remember me</label>
          </div>
          <button type="submit" class="btn btn-primary w-100">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import 'animate.css';

export default {
  name: 'LoginView',
  data() {
    return {
      nim: '',
      password: ''
    };
  },
  methods: {
    login() {
      if (this.nim === '221011400961' && this.password === '123') {
        Swal.fire({
          title: 'Login Sukses!',
          icon: 'success',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timer: 1500,
          showConfirmButton: false
        });

        setTimeout(() => {
          this.$router.push('/home');
        }, 1600); // lebih dari timer biar smooth
      } else {
        Swal.fire({
          title: 'Login Gagal!',
          text: 'NIM atau password salah!',
          icon: 'error',
          showClass: {
            popup: 'animate__animated animate__shakeX'
          },
          hideClass: {
            popup: 'animate__animated animate__fadeOutUp'
          },
          timer: 2000,
          showConfirmButton: false
        });
      }
    }
  }
};
</script>


<style scoped>
.body{
  background-image: url('@/assets/background.jpg');
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.formlogin {
  max-width: 400px;
  width: 100%;
  margin: auto;
  margin-top: 70px;
  color: white;
  border: 2px solid white;
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5);
  background: rgba(255, 255, 255, 0.1);
}

input.form-control {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.5); 
  border-radius: 8px; 
  padding: 10px;
  font-size: 16px;
}

input.form-control:focus {
  border-color: white; 
  box-shadow: 0 0 10px #007bff, 0 0 8px rgba(0, 91, 187, 0.5);
}

button.btn {
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
  font-size: 18px;
  box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.5);
}

.container {
  width: 100%;
}

.w-25 {
  width: 100%;
}
</style>