<script setup>
import { ref } from "vue";
import InvestmentPortfolio from "~/components/InvestmentPortfolio.vue";

const cashIncome = ref();
const goToInvestmentPortfolio = ref(false);
function acceptAndContinue() {
  if (cashIncome.value) goToInvestmentPortfolio.value = true;
}
</script>
<template>
  <div>
    <div
      class="container mx-auto max-w-screen-sm min-w-32"
      v-if="!goToInvestmentPortfolio"
    >
      <p class="px-5 py-5">
        لطفا در صورت تمایل به افزودن آورده نقدی مبلغ آورده خود را وارد نمایید.
      </p>
      <p class="block text-gray-700 text-sm font-bold mb-2 px-5" for="username">
        ارزش آورده نقد
      </p>
      <div class="relative px-5">
        <input
          type="text"
          id="floating_outlined"
          class="block px-2 pb-2.5 pt-4 w-full text-gray-900 rounded-lg border border-1 border-gray-200 appearance-none focus:border-blue-500 focus:outline focus:outline-4 focus:outline-blue-500/25 peer"
          v-model="cashIncome"
        />
        <label
          for="floating_outlined"
          class="absolute text-lg text-gray-500 duration-300 transform -translate-y-1 scale-75 top-4 z-10 origin-[0] start-2.5 peer-focus:text-gray-500 translate-x-1.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:text-sm peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >مبلغ بر حسب ریال</label
        >
      </div>
      <div class="flex items-center mb-4 px-5 pt-4">
        <input
          id="default-checkbox"
          type="checkbox"
          value=""
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        />
        <label
          for="default-checkbox"
          class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >دارایی نقد ندارم.</label
        >
      </div>
      <div class="w-full fixed bottom-24 mb-2 px-5">
        <button
          type="button"
          class="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-3.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:hover:shadow-purple-500/50"
          @click="acceptAndContinue"
        >
          تایید و ادامه
        </button>
      </div>
    </div>
    <div v-else><InvestmentPortfolio /></div>
  </div>
</template>
