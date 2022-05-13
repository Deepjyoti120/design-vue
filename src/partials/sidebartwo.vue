<template>
  <div>
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
        lg:sidebar-expanded:!w-64
        2xl:!w-64
        shrink-0
        bg-gray-800
        transition-all
        duration-200
        ease-in-out
      "
      :class="sidebarOpen ? 'translate-x-0' : '-translate-x-64'"
    ></div>
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