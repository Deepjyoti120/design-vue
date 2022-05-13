<template>
  <div>
    <!-- Sidebar backdrop  -->
    <div
      class="
        fixed
        inset-0
        bg-gray-900 bg-opacity-30
        z-40
        lg:hidden lg:z-auto
        transition-opacity
        duration-200
      "
      :class="sidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'"
      aria-hidden="true"
    ></div>

    <!-- Sidebar -->
    <div
      id="sidebar"
      ref="sidebar"
      class="
        flex flex-col
        absolute
        z-40
        left-0
        top-0
        lg:static lg:left-auto lg:top-auto lg:translate-x-0
        transform
        h-screen
        overflow-y-scroll
        lg:overflow-y-auto
        no-scrollbar
        sidebar-expanded:hidden
        w-56
        shrink-0
        bg-gray-800
        p-4
        transition-all
        duration-200
        ease-in-out
      "
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    >
      <!-- Sidebar header -->
      <div class="flex justify-between mb-10 pr-3 sm:px-2">
        <!-- Close button -->
        <button
          ref="trigger"
          class="lg:hidden text-gray-500 hover:text-gray-400"
          @click.stop="$emit('close-sidebar')"
          aria-controls="sidebar"
          :aria-expanded="sidebarOpen"
        >
          <span class="sr-only">Close sidebar</span>
          <svg
            class="w-6 h-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z"
            />
          </svg>
        </button>
        <!-- Logo -->
        <router-link class="block" to="/">
          <svg width="32" height="32" viewBox="0 0 32 32">
            <defs>
              <linearGradient
                x1="28.538%"
                y1="20.229%"
                x2="100%"
                y2="108.156%"
                id="logo-a"
              >
                <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                <stop stop-color="#A5B4FC" offset="100%" />
              </linearGradient>
              <linearGradient
                x1="88.638%"
                y1="29.267%"
                x2="22.42%"
                y2="100%"
                id="logo-b"
              >
                <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                <stop stop-color="#38BDF8" offset="100%" />
              </linearGradient>
            </defs>
            <rect fill="#6366F1" width="32" height="32" rx="16" />
            <path
              d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
              fill="#4F46E5"
            />
            <path
              d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
              fill="url(#logo-a)"
            />
            <path
              d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
              fill="url(#logo-b)"
            />
          </svg>
        </router-link>
      </div>

      <!-- Links -->
      <div class="space-y-8">
        <!-- Pages group -->
        <div>
          <h3 class="text-xs uppercase text-gray-500 font-semibold pl-3">
            <span class="block 2xl:block">Pages</span>
          </h3>
          <ul class="mt-3">
            <!-- Dashboard -->
            <router-link
              to="/"
              custom
              v-slot="{ href, navigate, isExactActive }"
            >
              <li
                class="px-3 py-2 rounded-sm mb-0.5 last:mb-0"
                :class="isExactActive && 'bg-gray-900'"
              >
                <a
                  class="
                    block
                    text-gray-200
                    hover:text-white
                    truncate
                    transition
                    duration-150
                  "
                  :class="isExactActive && 'hover:text-gray-200'"
                  :href="href"
                  @click="navigate"
                >
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        class="fill-current text-gray-400"
                        :class="isExactActive && '!text-indigo-500'"
                        d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
                      />
                      <path
                        class="fill-current text-gray-600"
                        :class="isExactActive && 'text-indigo-600'"
                        d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"
                      />
                      <path
                        class="fill-current text-gray-400"
                        :class="isExactActive && 'text-indigo-200'"
                        d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"
                      />
                    </svg>
                    <span
                      class="text-sm font-medium ml-3 opacity-100 duration-200"
                      >Dashboard</span
                    >
                  </div>
                </a>
              </li>
            </router-link>
            <!-- E-Commerce  -->
            <SidebarLinkGroup
              v-slot="parentLink"
              :activeCondition="currentRoute.fullPath.includes('ecommerce')"
            >
              <a
                class="
                  block
                  text-gray-200
                  hover:text-white
                  truncate
                  transition
                  duration-150
                "
                :class="
                  currentRoute.fullPath.includes('ecommerce') &&
                  'hover:text-gray-200'
                "
                href="#0"
                @click.prevent="
                  sidebarExpanded
                    ? parentLink.handleClick()
                    : (sidebarExpanded = true)
                "
              >
                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <svg class="shrink-0 h-6 w-6" viewBox="0 0 24 24">
                      <path
                        class="fill-current text-gray-400"
                        :class="
                          currentRoute.fullPath.includes('ecommerce') &&
                          'text-indigo-300'
                        "
                        d="M13 15l11-7L11.504.136a1 1 0 00-1.019.007L0 7l13 8z"
                      />
                      <path
                        class="fill-current text-gray-700"
                        :class="
                          currentRoute.fullPath.includes('ecommerce') &&
                          '!text-indigo-600'
                        "
                        d="M13 15L0 7v9c0 .355.189.685.496.864L13 24v-9z"
                      />
                      <path
                        class="fill-current text-gray-600"
                        :class="
                          currentRoute.fullPath.includes('ecommerce') &&
                          'text-indigo-500'
                        "
                        d="M13 15.047V24l10.573-7.181A.999.999 0 0024 16V8l-11 7.047z"
                      />
                    </svg>
                    <span
                      class="text-sm font-medium ml-3 opacity-100 duration-200"
                      >E-Commerce
                    </span>
                  </div>
                  <!-- Icon -->
                  <div class="flex shrink-0 ml-2">
                    <svg
                      class="w-3 h-3 shrink-0 ml-1 fill-current text-gray-400"
                      :class="parentLink.expanded && 'transform rotate-180'"
                      viewBox="0 0 12 12"
                    >
                      <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                    </svg>
                  </div>
                </div>
              </a>
              <div class="block 2xl:block">
                <ul class="pl-9 mt-1" :class="!parentLink.expanded && 'hidden'">
                  <router-link to="/" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a
                        class="
                          block
                          text-gray-400
                          hover:text-gray-200
                          transition
                          duration-150
                          truncate
                        "
                        :href="href"
                        @click="navigate"
                      >
                        <span
                          class="text-sm font-medium opacity-100 duration-200"
                          >Customers</span
                        >
                      </a>
                    </li>
                  </router-link>
                  <router-link to="/" custom v-slot="{ href, navigate }">
                    <li class="mb-1 last:mb-0">
                      <a
                        class="
                          block
                          text-gray-400
                          hover:text-gray-200
                          transition
                          duration-150
                          truncate
                        "
                        :href="href"
                        @click="navigate"
                      >
                        <span
                          class="text-sm font-medium opacity-100 duration-200"
                          >Orders</span
                        >
                      </a>
                    </li>
                  </router-link>
                </ul>
              </div>
            </SidebarLinkGroup>
          </ul>
        </div>
      </div> 
    </div>
  </div>
</template>

<script>
import { ref, onMounted, onUnmounted, watch } from "vue";
import { useRouter } from "vue-router";

import SidebarLinkGroup from "./SidebarLinkGroup.vue";

export default {
  name: "Sidebar",
  props: ["sidebarOpen"],
  components: {
    SidebarLinkGroup,
  },
  setup(props, { emit }) {
    const trigger = ref(null);
    const sidebar = ref(null);

    const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
    const sidebarExpanded = ref(
      storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
    );

    const currentRoute = useRouter().currentRoute.value;

    // close on click outside
    const clickHandler = ({ target }) => {
      if (!sidebar.value || !trigger.value) return;
      if (
        !props.sidebarOpen ||
        sidebar.value.contains(target) ||
        trigger.value.contains(target)
      )
        return;
      emit("close-sidebar");
    };

    // close if the esc key is pressed
    const keyHandler = ({ keyCode }) => {
      if (!props.sidebarOpen || keyCode !== 27) return;
      emit("close-sidebar");
    };

    onMounted(() => {
      document.addEventListener("click", clickHandler);
      document.addEventListener("keydown", keyHandler);
    });

    onUnmounted(() => {
      document.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    });

    watch(sidebarExpanded, () => {
      localStorage.setItem("sidebar-expanded", sidebarExpanded.value);
      if (sidebarExpanded.value) {
        document.querySelector("body").classList.add("sidebar-expanded");
      } else {
        document.querySelector("body").classList.remove("sidebar-expanded");
      }
    });

    return {
      trigger,
      sidebar,
      sidebarExpanded,
      currentRoute,
    };
  },
};
</script>