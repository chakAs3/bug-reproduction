<script setup lang="ts">
import { PropType } from 'vue';
import { ColumnSettings } from '../types/ColumnSettings';
import { TPDataGridValidator } from '../validators/TPDataGrid';

const props = defineProps({
  columns: {
    type: Object as PropType<ColumnSettings[]>,
    required: true,
    validator: TPDataGridValidator
  },
});
</script>

<template>
  <div class="data-grid">
    <div class="grid-container">
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>