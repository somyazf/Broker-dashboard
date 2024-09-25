<script setup>
import { ref, reactive } from "vue";
import AddModal from "./AddModal.vue";

const openModal = ref(false);
const portfolios = reactive([]);
function closeModal() {
  openModal.value = false;
}
function addToList(portfolio) {
  portfolios.value = portfolios.push(portfolio)
  openModal.value = false;
}
const totalPrice = computed(() => {
  return portfolios.reduce((acc, curr) => acc + Number(curr.price), 0)
})
</script>
<template>
  <div class="overflow-y-auto" style="height: 396px;">
    <div class="pb-6 pt-4 px-5">
      <p class="pb-1">وارد‌ کردن نماد‌های پورتفوی</p>
      <p class="text-sm text-gray-500">
        لطفا نماد‌های پورتفوی خود را با انتخاب گزینه زیر وارد نمایید
      </p>
    </div>
    <div
      class="flex items-center justify-center gap-1 border rounded-lg border-dashed border-purple-800 py-5 mx-5"
      @click="openModal = true"
    >
      <svg
        class="w-5 h-5 text-purple-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 7.757v8.486M7.757 12h8.486M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
      <span class="text-sm text-purple-800"> افزودن نماد پرتفوی </span>
    </div>
    <div v-if="portfolios.length" class="pt-6 px-5">
      <p>لیست نماد‌های پورتفوی</p>
      <div class="flex items-center justify-between pb-2 pt-2 w-full">
        <p class="text-semibold text-sm" style="opacity: 0.75">مجموع ارزش دارایی</p>
        <p class="" style="opacity: 0.75">{{ totalPrice }} ریال</p>
      </div>
      <div class="grid gap-3 ">
        <div
          v-for="portfo in portfolios"
          :key="portfo.id"
          class="flex items-center gap-4 rounded-xl bg-slate-50 p-3"
        >
          <div
            class="flex-grow grid"
            style="
              grid-template-columns: repeat(1, minmax(0px, 1fr));
              gap: 15px;
            "
          >
            <div
              style="display: flex; align-items: center; gap: 5px"
              class="flex items-center gap-4"
            >
              <p class="text-semibold">{{ portfo.name }}</p>
            </div>
            <div
              style="display: flex; align-items: center; gap: 5px"
              class="flex items-center gap-4 text-sm"
            >
              <p class="" style="opacity: 0.75">{{ portfo.count }} سهم :</p>
              <p class="text-semibold">{{ portfo.price }} ریال</p>
            </div>
          </div>
          <div
            style="
              display: grid;
              grid-template-columns: repeat(1, minmax(0px, 1fr));
              gap: 10px;
            "
          >
            <p>
              <svg
                class="w-5 h-5 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                />
              </svg>
            </p>
            <p>
              <svg
                class="w-5 h-5 text-gray-400 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"
                />
              </svg>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-white bottom-24 fixed mb-2 pt-2 px-5 w-full">
      <button
        type="button"
        class="w-full focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-3.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 dark:hover:shadow-purple-500/50"
        @click="acceptAndContinue"
      >
        تایید و ادامه
      </button>
    </div>
    <AddModal v-if="openModal" @closeModal="closeModal" @addToList="addToList" />
  </div>
</template>
