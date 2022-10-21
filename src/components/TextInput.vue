<template>
    <div>
        <input v-model="inputValue" type="text" @keydown.enter="updateValue"><button :disabled="inputValue.length == 10"
            @click="updateValue">{{props.btnLabel}}</button>
    </div>

</template>
<script setup>
import { ref } from "vue";

const props = defineProps({
    btnLabel: {
        type: String,
        default: "Ajouter"
    }
});
const inputValue = ref("test");

const emit = defineEmits(['newValue']);

function updateValue(argument) {
    // massurer que il y a des donnes 
    if (inputValue.value.length == 0) return;
    // emettre un event vers le parent
    emit("newValue", inputValue.value)
    //vider le champs texte
    inputValue.value = "";

}


</script>
<style scoped lang='scss'>
div {
    display: flex;

    input {
        flex-basis: 70%;
    }

    button {
        flex-basis: 30%;
    }
}
</style>