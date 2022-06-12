import { InjectionKey } from 'vue';
import { createStore, Store, useStore as baseStore } from 'vuex';

import { UserFormLogin, UserFormRegister } from '../interfaces/UserInterface';
import axiosClient from '../axios';
import { Survey } from '../interfaces/SurveyInterface';
import { TypeQuestion } from '../interfaces/QuestionInterface';

export type User = {
  name: string;
  email: string;
  imageUrl: string;
};

export type UserAuth = {
  data: User | {};
  token: string | null;
};

export type StoreApp = {
  user: UserAuth;
  surveys: Survey[] | [];
  questionTypes: TypeQuestion[];
};

export const key: InjectionKey<Store<StoreApp>> = Symbol();

export function useStore() {
  return baseStore(key);
}

export const store = createStore<StoreApp>({
  state: {
    user: {
      data: {},
      token: sessionStorage.getItem('TOKEN'),
    },
    questionTypes: ['checkbox', 'radio', 'select', 'text'],
    surveys: [
      {
        id: 1,
        title: 'TheCodeholic YouTube channel content',
        slug: 'thecodeholic-youtube-channel-content',
        status: 'draft',
        image:
          'https://pbs.twimg.com/profile_images/1118059535003017221/9ZwEYqj2_400x400.png',
        description:
          'My name is Zura.<br>I am Web Developer with 9+ years of experience, free educational content creator, CTO, Lecturer and father of two wonderful daughters.<br><br>The purpose of the channel is to share my several years of experience with beginner developers.<br>Teach them what I know and make my experience as a lesson for others.',
        created_at: '2021-12-20 18:00:00',
        updated_at: '2021-12-20 18:00:00',
        expire_date: '2021-12-31 18:00:00',
        questions: [
          {
            id: 1,
            type: 'select',
            question: 'Select your country?',
            description: null,
            data: {
              multiple: false,
              options: [
                { uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea', text: 'USA' },
                {
                  uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440',
                  text: 'Georgia',
                },
                {
                  uuid: 'b5c09733-a49e-460a-ba8a-526863010729',
                  text: 'Germany',
                },
                { uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513', text: 'India' },
                {
                  uuid: '8d14341b-ec2b-4924-9aea-bda6a53b51fc',
                  text: 'United Kingdom',
                },
              ],
            },
          },
          {
            id: 2,
            type: 'checkbox',
            question: 'Which language videos do you want to see on my channel?',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
            data: {
              options: [
                {
                  uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea',
                  text: 'JavaScript',
                },
                { uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'PHP' },
                {
                  uuid: 'b5c09733-a49e-460a-ba8a-526863010729',
                  text: 'HTML + CSS',
                },
                {
                  uuid: 'b5c09733-a49e-460a-ba8a-526863010729',
                  text: 'All of the above',
                },
                {
                  uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513',
                  text: 'Everything Zura thinks will be good',
                },
              ],
            },
          },
          {
            id: 3,
            type: 'checkbox',
            question:
              'Which PHP framework videos do you want to see on my channel?',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
            data: {
              options: [
                {
                  uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea',
                  text: 'Laravel',
                },
                { uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440', text: 'Yii2' },
                {
                  uuid: 'b5c09733-a49e-460a-ba8a-526863010729',
                  text: 'Codeigniter',
                },
                {
                  uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513',
                  text: 'Symfony',
                },
              ],
            },
          },
          {
            id: 4,
            type: 'radio',
            question: 'Which Laravel Framework do you love most?',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
            data: {
              options: [
                {
                  uuid: '31132230-29e0-4857-84ed-417542c7c8dd',
                  text: 'Laravel 5',
                },
                {
                  uuid: '0ab85f86-15ee-4ec0-ba42-793daf243a5d',
                  text: 'Laravel 6',
                },
                {
                  uuid: '748fd679-d983-4d73-8d7b-7bb4abd22254',
                  text: 'Laravel 7',
                },
                {
                  uuid: 'f1864724-1009-4bed-94a1-3cfe93dfb82a',
                  text: 'Laravel 8',
                },
              ],
            },
          },
          {
            id: 5,
            type: 'checkbox',
            question:
              'What type of projects do you want to see on my channel built with Laravel?',
            description:
              'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda cumque earum eos esse est ex facilis, iure laboriosam maiores neque nesciunt nulla placeat praesentium quae quos ratione, recusandae totam velit!',
            data: {
              options: [
                {
                  uuid: 'f8af96f2-1d80-4632-9e9e-b560670e52ea',
                  text: 'REST API',
                },
                {
                  uuid: '201c1ff5-23c9-42f9-bfb5-bbc850536440',
                  text: 'E-commerce',
                },
                {
                  uuid: 'b5c09733-a49e-460a-ba8a-526863010729',
                  text: 'Real Estate',
                },
                {
                  uuid: '2abf1cee-f5fb-427c-a220-b5d159ad6513',
                  text: 'All of the above',
                },
              ],
            },
          },
          {
            id: 6,
            type: 'text',
            question: 'What do you think about TheCodeholic channel?',
            description: 'Write your honest opinion. Everything is anonymous.',
            data: null,
          },
        ],
      },
      {
        id: 2,
        title: 'Laravel 8',
        slug: 'laravel-8',
        status: 'draft',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/1200px-Laravel.svg.png',
        description: `Laravel is a web application framework with expressive, elegant syntax. We’ve already laid the foundation — freeing you to create without sweating the small things.`,
        created_at: '2021-12-20 18:00:00',
        updated_at: '2021-12-20 18:00:00',
        expire_date: '2021-12-31 18:00:00',
      },
      {
        id: 3,
        title: 'Vue 3',
        slug: 'vue-3',
        status: 'active',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1184px-Vue.js_Logo_2.svg.png',
        description: `Vue (pronounced /vjuː/, like view) is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable.`,
        created_at: '2021-12-21 17:00:00',
        updated_at: '2021-12-21 17:00:00',
        expire_date: '2021-12-31 00:00:00',
      },
      {
        id: 4,
        title: 'Tailwind 3',
        slug: 'tailwind-3',
        status: 'active',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png',
        description: `A utility-first CSS framework packed with classes like <code>flex</code>, <code>pt-4</code>, <code>text-center</code> and <code>rotate-90</code> that can be composed to build any design, directly in your markup.`,
        created_at: '2021-12-21 14:00:00',
        updated_at: '2021-12-21 14:00:00',
        expire_date: '2021-12-31 00:00:00',
      },
    ],
  },
  getters: {},
  actions: {
    async register({ commit }, user: UserFormRegister) {
      try {
        const { data } = await axiosClient.post('/register', user);
        commit('setUser', data);
        return data;
      } catch (e) {
        throw e;
      }
    },
    async login({ commit }, user: UserFormLogin) {
      try {
        const { data } = await axiosClient.post('/login', user);
        commit('setUser', data);
        return data;
      } catch (e) {
        throw e;
      }
    },
    async logout({ commit }) {
      try {
        const { data } = await axiosClient.post('/logout');
        commit('logout');
        return data;
      } catch (e) {
        throw e;
      }
    },
  },
  modules: {},
  mutations: {
    logout: (s) => {
      s.user.data = {};
      s.user.token = null;
      sessionStorage.removeItem('TOKEN');
    },
    setUser: (state, response) => {
      state.user.data = response.user;
      state.user.token = response.token;
      sessionStorage.setItem('TOKEN', response.token);
    },
  },
});
