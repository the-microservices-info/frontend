<template>
  <div>
    <p class="italic text-sm font-bold">
      {{ statement }}
    </p>
    <div class="flex justify-between items-end">
      <div
        v-for="{ label, id } in agreements"
        :key="label"
        class="w-1/5 flex flex-col items-center"
      >
        <label class="text-xs text-center mb-2" :for="id">
          {{ label }}
        </label>
        <input
          :id="getId(stid, id)"
          :v-model="getModel(stid, id)"
          type="radio"
        />
      </div>
    </div>
  </div>
</template>
