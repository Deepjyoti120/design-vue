<template>
  <header class="sticky top-0 bg-white border-b border-gray-200 z-30">
    <div class="px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-start h-16 -mb-px">
        <!-- Header: Left side -->
        <div class="flex">
          <!-- Hamburger button -->
          <button
            @click="dropMenuWOrk()"
            class="duration-200 text-gray-500 hover:text-gray-600 lg:hidden"
            @click.stop="$emit('toggle-sidebar')"
            aria-controls="sidebar"
            :aria-expanded="sidebarOpen"
          >
            <span class="sr-only">Open sidebar</span>
            <svg
              class="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="4" y="5" width="16" height="2" />
              <rect x="4" y="11" width="16" height="2" />
              <rect x="4" y="17" width="16" height="2" />
            </svg>
          </button>
        </div>

        <!-- Header: Right side -->
        <div class="flex items-center space-x-3">
          <button
            class="
              w-8
              h-8
              flex
              items-center
              justify-center
              bg-gray-100
              hover:bg-gray-200
              transition
              duration-150
              rounded-full
              ml-3
            "
            :class="{ 'bg-gray-200': searchModalOpen }"
            @click="dropDown()"
            @click.stop="searchModalOpen = true"
            aria-controls="search-modal"
          >
           <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
</svg>
          </button>
          <!-- <SearchModal id="search-modal" searchId="search" :modalOpen="searchModalOpen" @open-modal="searchModalOpen = true" @close-modal="searchModalOpen = false" /> -->
          <Notifications align="right" />
          <Help align="right" />
          <!-- Divider -->
          <hr class="w-px h-6 bg-gray-200" />
          <UserMenu align="right" />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { ref } from "vue";

// import SearchModal from '../components/ModalSearch.vue'
// import Notifications from '../components/DropdownNotifications.vue'
// import Help from '../components/DropdownHelp.vue'
import UserMenu from "../components/DropdownProfile.vue";

export default {
  name: "Header",
  props: ["sidebarOpen"],
  components: {
    // SearchModal,
    // Notifications,
    // Help,
    UserMenu,
  },
  methods: {
    dropDown: () => {
      document.querySelector("body").classList.toggle("sidebar-expanded");
    },
    dropMenuWOrk: () => {
      document.querySelector("body").classList.remove("sidebar-expanded");
    },
  },
  setup() {
    const searchModalOpen = ref(false);
    return {
      searchModalOpen,
    };
  },
};
</script>