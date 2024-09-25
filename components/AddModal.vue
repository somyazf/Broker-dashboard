<script setup>
import { reactive } from "vue";
const emit = defineEmits(['closeModal', 'addToList']);
const portfolio = reactive({})
const stockList = reactive([{
  id: 1,
  name: 'خودرو'
},
{
  id: 2,
  name: 'خودکفا'
}
])
</script>
<template>
  <!-- Main modal -->
  <div
    class="relative z-20"
    aria-labelledby="modal-title"
    role="dialog"
    aria-modal="true"
  >
    <div
      class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
      aria-hidden="true"
    ></div>
    <div class="fixed inset-0 z-50 w-screen overflow-y-auto">
      <div
        class="flex min-h-full items-end justify-center text-center sm:items-center sm:p-0"
      >
        <div class="overlay-close" @click="emit('closeModal')">
          <svg
            class="w-6 h-6 text-white dark:text-white"
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
              d="M6 18 17.94 6M18 18 6.06 6"
            />
          </svg>
        </div>
        <div
          class="w-full relative transform overflow-hidden rounded-t-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
        >
          <!-- Modal header -->
          <div class="p-4 md:p-5">
            <p
              class="text-center font-semibold text-gray-900 dark:text-white pt-4"
            >
              نام سهم و تعداد آن را وارد کنید
            </p>
          </div>
          <!-- Modal body -->
          <div class="p-4 md:p-5">
            <div class="relative">
              <div class="relative pb-5 flex flex-col">
                <div class="peer-focus:backdrop-blur-md"></div>
                <input
                  v-model="portfolio.name"
                  @keyup.delete="portfolio.name = ''"
                  type="text"
                  id="floating_outlined"
                  class="block px-2.5 pb-2.5 pt-4 w-full text-gray-600 rounded-lg border border-1 border-gray-200 appearance-none focus:border-blue-500 focus:outline focus:outline-4 focus:outline-blue-500/25 peer"
                />
                <label
                  for="floating_outlined"
                  class="absolute peer-focus:text-gray-500 peer-focus:scale-75 peer-focus:text-sm peer-focus:translate-y-0 rtl:peer-focus:translate-x-1 rtl:peer-focus:left-auto"
                  :class="portfolio.name ? ' translate-x-1 translate-y-0 text-sm text-gray-500 scale-75 left-auto  ' : ' peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 text-lg text-gray-500 duration-300 transform -translate-y-1 scale-75 top-4 z-10'"
                  >نام سهم مورد نظر</label
                >
                <div class="hidden w-full pt-2 px-2 mt-2 text-sm text-right text-gray-900 rounded-lg bg-gray-100 peer-focus:block absolute top-12 z-20">
                  <ul>
                    <li class="pb-2" v-for="stock in stockList" :key="stock">{{ stock.name }}</li>
                  </ul>
                </div>
                <div v-if="portfolio.name" class="absolute left-0 pl-2 text-sm top-4" @click="portfolio.name = ''">
                    <svg class="w-5 h-5 text-gray-600 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18 17.94 6M18 18 6.06 6"/>
                  </svg>
                </div>
              </div>
              <div class="relative">
                <input
                  v-model="portfolio.count"
                  type="text"
                  id="filled_success"
                  aria-describedby="filled_success_help"
                  class="appearance-none block rounded-t-lg border border-1 border-gray-200 focus:border-blue-500 focus:outline focus:outline-4 focus:outline-blue-500/25 pb-2.5 peer pt-6 px-2.5 rounded-t-lg text-gray-600 w-full"
                  placeholder="تعداد را وارد نمایید"
                />
                <label
                  data-v-09e27e41=""
                  for="filled_success"
                  class="absolute peer-placeholder-shown:translate-y-0 start-2.5 text-sm text-gray-400 top-1 transform z-10"
                  >تعداد واحد
                </label>
              </div>
              <div class="relative pb-5 flex items-center">
                  <input
                    v-model="portfolio.price"
                    type="text"
                    id="filled_success"
                    aria-describedby="filled_success_help"
                    class="appearance-none block border border-1 border-gray-200 focus:border-blue-500 focus:outline focus:outline-4 focus:outline-blue-500/25 pb-2.5 peer pt-6 px-2.5 rounded-b-lg text-gray-600 w-full"
                    placeholder="مبلغ را وارد نمایید"
                  />
                  <label
                    data-v-09e27e41=""
                    for="filled_success"
                    class="absolute peer-placeholder-shown:translate-y-0 start-2.5 text-sm text-gray-400 top-1 transform z-10"
                    >سرمایه</label
                  >
                  <div class="absolute left-0 pl-4 text-sm text-gray-400">ریال</div>
              </div>
              <div
                class="convert-icon absolute z-1 bg-purple-800 rounded-md p-1"
              >
                <svg
                  class="w-5 h-5 text-purple-800 bg-white rounded-md dark:text-white"
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
                    d="M8 20V10m0 10-3-3m3 3 3-3m5-13v10m0-10 3 3m-3-3-3 3"
                  />
                </svg>
              </div>
            </div>
            <button
              type="submit"
              class="w-full text-white bg-purple-800 hover:shadow hover:shadow-current focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-base leading-6 p-3 text-center dark:bg-blue-600"
              @click="emit('addToList', portfolio)"
            >
              اضافه کردن
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.overlay-close {
  display: flex;
  height: 42px;
  left: 48%;
  position: absolute;
  bottom: 390px;
  width: 42px;
  z-index: 1;
  align-items: center;
  background-color: rgb(245, 54, 89);
  border-radius: 9999px;
  cursor: pointer;
  justify-content: center;
  box-shadow: 0 10px 15px -3px rgba(245, 54, 48, 0.5);
}
.convert-icon {
  top: 115px;
  left: 24px;
}
</style>
