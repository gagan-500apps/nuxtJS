

 <template>
  <div class="login-container">
    
    <FormComponents :arrayData="arrayData" />
    <p>Don't have account? <button @click="goToSignup" class="signup-link">Signup</button></p>
  </div>
</template> 


<script setup>
import FormComponents from '~/components/FormComponents.vue';
import { useRouter } from 'vue-router';
import login from '~/middleware/login';
const router = useRouter();

const arrayData = [
  { id: 1, name: "email", placeholder: "Enter your email", type: "text", formName: "login", submit:"Login", text: "Enter your Email" },
  { id: 2, name: "password", placeholder: "Enter your password", type: "password", formName: "login", submit:"Login", text: "Enter your Password" },
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

.signup-link:hover {
  background-color: #15ce34;
  color: #e4e0e0;
}

p {
  display: flex;
  justify-content: center;

  margin-left: 45%;
}

.signup-link {
  color: #038ce7;
 
}

</style> 
  