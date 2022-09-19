import { computed, defineComponent, ref } from 'vue';
import type { PropType } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { store } from '../../store';
import {
  OptionsDataQuestion,
  QuestionSurvey,
} from '../../interfaces/QuestionInterface';

export default defineComponent({
  name: 'QuestionEditor',
  emits: ['change', 'addQuestion', 'deleteQuestion'],
  props: {
    index: Number as PropType<number>,
    question: Object as PropType<QuestionSurvey>,
  },
  setup: (props, { emit }) => {
    const model = ref<QuestionSurvey>(props.question as QuestionSurvey);
    // Get question types from vuex
    const questionTypes = computed(() => store.state.questionTypes);

    function upperCaseFirst(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }

    function getOptions(): OptionsDataQuestion[] {
      return model.value.data.options || [];
    }

    function setOptions(options: OptionsDataQuestion[]) {
      model.value.data.options = options;
    }

    // Check if the question should have options
    function shouldHaveOptions() {
      return ['select', 'radio', 'checkbox'].includes(model.value.type);
    }

    // Add option
    function addOption() {
      setOptions([...getOptions(), { uuid: uuidv4(), text: '' }]);
      dataChange();
    }

    // Remove option
    function removeOption(op: OptionsDataQuestion) {
      setOptions(getOptions().filter((opt) => opt !== op));
      dataChange();
    }

    function typeChange() {
      if (shouldHaveOptions()) {
        setOptions(getOptions());
      }
      dataChange();
    }

    // Emit the data change
    function dataChange() {
      const data: QuestionSurvey = model.value;
      if (!shouldHaveOptions()) {
        data.data.options = [];
      }
      emit('change', data);
    }

    function addQuestion() {
      console.log(props);
      emit('addQuestion', (props.index as number) + 1);
    }

    function deleteQuestion() {
      emit('deleteQuestion', props.question);
    }

    return {
      addOption,
      addQuestion,
      dataChange,
      deleteQuestion,
      model,
      questionTypes,
      removeOption,
      shouldHaveOptions,
      typeChange,
      upperCaseFirst,
    };
  },
});
