<!--Copyright 2021 (C) Daiyong Kim, All Rights Reserved-->
<template>

    <nav id="navigation-wrapper" class="grid-nav area vue-component">
        <div id="menu-container" class="menu flexbox">
            <div class="navbar flexitem">
                <ul id="ul-sidenav">
                    <li id="li-sidenav" v-for="(item, index) in navMenu" :key="index">
                        <router-link :to="{ name:item.section }">{{ item.section }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

</template>
<script>
    import Controller from '@/mixins/controller'

    class NavbarController extends Controller {

        constructor( name, subComponentList = []) {
            super( name, subComponentList )
            this.vm = {
                navMenu:[
                    { section: "Operation" },
                    { section: "Analysis"  },
                    { section: "Liveview" },
                    { section: "Overview" }
                ]
            };
        }
    }

    export default new NavbarController('pgNavbar');

</script>

<style>
</style>