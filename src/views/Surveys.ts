import { computed, defineComponent } from 'vue';
import PageComponent from '../components/PageComponent.vue';
import { Survey } from '../interfaces/SurveyInterface';
import { store } from '../store';

export default defineComponent({
  name: 'Surveys',
  components: {
    PageComponent,
  },
  setup: () => {
    const surveys = computed(() => store.state.surveys);

    async function deleteSurvey(survey: Survey) {
      if (confirm('Are you sure you want to delete this survey?')) {
        //
      }
    }

    return {
      deleteSurvey,
      surveys,
    };
  },
});
