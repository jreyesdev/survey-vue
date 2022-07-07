import { defineComponent, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { v4 as uuidV4 } from 'uuid';

import PageComponent from '../components/PageComponent.vue';
import QuestionEditor from '../components/editor/QuestionEditor.vue';

import { store } from '../store';
import { Survey } from '../interfaces/SurveyInterface';
import { QuestionSurvey } from '../interfaces/QuestionInterface';

export default defineComponent({
  name: 'SurveyView',
  components: { PageComponent, QuestionEditor },
  setup: () => {
    const router = useRouter();

    const route = useRoute();

    const model = ref<Partial<Survey>>({
      title: '',
      status: false,
      image: '',
      description: '',
      expire_date: '',
      questions: [],
    });

    if (route.params.id) {
      const survey = store.state.surveys.find(
        (s) => s.id === Number(route.params.id)
      );
      if (survey) {
        model.value = survey;
      }
    }

    async function addQuestion(index: number) {
      const newQuestion: QuestionSurvey = {
        id: uuidV4(),
        type: 'text',
        question: '',
        description: null,
        data: null,
      };
      model.value.questions?.splice(index, 0, newQuestion);
    }

    function deleteQuestion(question: QuestionSurvey) {
      model.value.questions = model.value.questions?.filter(
        (q) => q !== question
      );
    }

    function questionChange(question: QuestionSurvey) {
      // Important to explicitelly assign question.data.options, because otherwise it is a Proxy object
      // and it is lost in JSON.stringify()
      if (question.data?.options) {
        question.data.options = [...question.data.options];
      }
      model.value.questions = model.value.questions?.map((q) => {
        if (q.id === question.id) {
          return JSON.parse(JSON.stringify(question));
        }
        return q;
      });
    }

    /**
     * Create or update survey
     */
    async function saveSurvey() {
      try {
        let action = model.value.id ? 'updated' : 'created';

        const { id } = await store.dispatch('saveSurvey', { ...model.value });
        // store.commit('notify', {
        //   type: 'success',
        //   message: 'The survey was successfully ' + action,
        // });
        router.push({
          name: 'SurveyView',
          params: { id },
        });
      } catch (e) {
        console.log('saveSurvey', e);
      }
    }

    async function deleteSurvey() {
      if (
        confirm(
          `Are you sure you want to delete this survey? Operation can't be undone!!`
        )
      ) {
        try {
          await store.dispatch('deleteSurvey', model.value.id);
          router.push({
            name: 'Surveys',
          });
        } catch (e) {
          console.log('deleteSurvey', e);
        }
      }
    }

    return {
      addQuestion,
      deleteSurvey,
      deleteQuestion,
      model,
      saveSurvey,
      questionChange,
    };
  },
});
