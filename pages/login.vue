

 <template>
  <div class="login-container">
    <h1>Login</h1>
    <FormComponents :arrayData="arrayData" />
    <p>Don't have account? <span @click="goToSignup" class="signup-link">Signup</span></p>
  </div>
</template> 


<script setup>
import FormComponents from '~/components/FormComponents.vue';
import { useRouter } from 'vue-router';
const router = useRouter();


const arrayData = [
  { id: 1, name: "email", placeholder: "Enter your email", type: "text", formName: "login", text: "Enter your Email" },
  { id: 2, name: "password", placeholder: "Enter your password", type: "password", formName: "login", text: "Enter your Password" },
]

function goToSignup() {
  router.push('/signup');
}
</script>

  
<style scoped>
.login-container>h1 {
  padding: 10px 20px;
  text-align: center;
  font-size: 2rem;
}

.form_submit {
  background-color: #fff;
  color: #3498db;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 47%;
}

.form_submit,
.signup-link:hover {
  background-color: #15ce34;
  color: #fff;
}

p {
  display: flex;
  justify-content: center;
}

.signup-link {
  color: #038ce7;
  margin-left: 5px;
}

</style> 
  