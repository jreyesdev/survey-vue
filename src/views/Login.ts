import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { LockClosedIcon } from '@heroicons/vue/solid';

import { store } from '../store';
import { ErrorUserLogin, UserFormLogin } from '../interfaces/UserInterface';

export default defineComponent({
  name: 'Login',
  components: {
    LockClosedIcon,
  },
  setup: () => {
    const router = useRouter();

    let errors = ref<ErrorUserLogin>();

    const user: UserFormLogin = {
      email: '',
      password: '',
      remember: false,
    };

    async function login(e: any) {
      e.preventDefault();
      try {
        const resp = await store.dispatch('login', user);
        router.push({
          name: 'Dashboard',
        });
      } catch (e: any) {
        errors.value = e.response.data.errors;
      }
    }

    return {
      user,
      errors,
      login,
    };
  },
});
