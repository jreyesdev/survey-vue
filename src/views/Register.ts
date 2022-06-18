import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';
import { LockClosedIcon } from '@heroicons/vue/solid';

import { store } from '../store';
import {
  ErrorUserRegister,
  UserFormRegister,
} from '../interfaces/UserInterface';

export default defineComponent({
  name: 'Register',
  components: {
    LockClosedIcon,
  },
  setup: () => {
    const router = useRouter();
    let errors = ref<ErrorUserRegister>();

    const user: UserFormRegister = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
    };

    async function register(e: any) {
      e.preventDefault();
      try {
        const resp = await store.dispatch('register', user);
        router.push({
          name: 'Dashboard',
        });
      } catch (e: any) {
        errors.value = e.response.data.errors;
      }
    }

    return {
      errors,
      user,
      register,
    };
  },
});
