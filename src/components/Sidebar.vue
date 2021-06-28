<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->
<template>

    <aside id="sidebar-wrapper" class="grid-side area vue-component">
        <div id="sidebar-container" class="sidebar flexbox">
            <div class="side-item">
                <h2>{{ title }}</h2>
                <h4>{{ description }}</h4>
            </div>
            <pg-navbar></pg-navbar>
            <slot></slot>
        </div>
    </aside>
<!--Copyright 2021 (C) Daiyong Kim-->

</template>
<script>
    import Controller from '@/mixins/controller'

    import pgNavbar from '@/components/Navbar.vue'

    class SidebarController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList );
            this.vm = {
                title:       "My Sidebar",
                description: "Application Name"
            }
        }
    }

    export default new SidebarController('pgSidebar', { pgNavbar });

</script>
<style></style>