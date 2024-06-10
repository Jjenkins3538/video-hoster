<script setup lang="ts">
import { ref } from 'vue';
import ApplicationLogo from '@/Components/ApplicationLogo.vue';
import Dropdown from '@/Components/Dropdown.vue';
import DropdownLink from '@/Components/DropdownLink.vue';
import NavLink from '@/Components/NavLink.vue';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
import { Link, router } from '@inertiajs/vue3';

const showingNavigationDropdown = ref(false);

const adminMenuItems = ref([
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
        active: route().current('users.index'),
        command: () => {
            router.get(route('users.index'));
        },
    }
    // {
    //     label: 'Admin',
    //     icon: 'fas fa-users',
    //     items: [
    //         {
    //             label: 'All Users',
    //             route: route('users.index'),
    //         }
    //     ],
    // }
    // {
    //     label: 'Roles',
    //     icon: 'fas fa-user-tag',
    //     items: [
    //         {
    //             label: 'All Roles',
    //             route: 'roles.index',
    //         },
    //         {
    //             label: 'Create Role',
    //             route: 'roles.create',
    //         },
    //     ],
    // },
    // {
    //     label: 'Permissions',
    //     icon: 'fas fa-key',
    //     items: [
    //         {
    //             label: 'All Permissions',
    //             route: 'permissions.index',
    //         },
    //         {
    //             label: 'Create Permission',
    //             route: 'permissions.create',
    //         },
    //     ],
    // },
]);

const admin_menu = ref();

const toggle = (event) => {
    admin_menu.value.toggle(event);
}

const navHome = () => {
    router.get(route('dashboard'));
}
</script>

<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('dashboard')">
                                    <!-- <ApplicationLogo
                                        class="block h-9 w-auto fill-current text-gray-800"
                                    /> -->
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="flex items-end space-x-3">
                                <Button @click="navHome" icon="pi pi-home" iconPos="right" type="button" text severity="secondary" label="Home" class="mr-2 hover:bg-gray-100 text-black" size="small"/>
                                <Button @click="toggle" icon="pi pi-angle-down" iconPos="right" type="button" text severity="secondary" label="Administration" class="mr-2 hover:bg-gray-100 text-black" size="small"/>
                                <Menu ref="admin_menu" id="admin_menu" :model="adminMenuItems" :popup="true" />
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-end sm:ms-6">
                            <!-- Settings Dropdown -->
                            <div class="ms-3 relative">
                                <Dropdown align="right" width="48">
                                    <template #trigger>
                                        <span class="inline-flex rounded-md">
                                            <button
                                                type="button"
                                                class="inline-flex items-end px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {{ $page.props.auth.user.name }}

                                                <svg
                                                    class="ms-2 -me-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fill-rule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clip-rule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </template>

                                    <template #content>
                                        <DropdownLink :href="route('profile.edit')"> Profile </DropdownLink>
                                        <DropdownLink :href="route('logout')" method="post" as="button">
                                            Log Out
                                        </DropdownLink>
                                    </template>
                                </Dropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-me-2 flex items-center sm:hidden">
                            <button
                                @click="showingNavigationDropdown = !showingNavigationDropdown"
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                            >
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                    <path
                                        :class="{
                                            hidden: showingNavigationDropdown,
                                            'inline-flex': !showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{
                                            hidden: !showingNavigationDropdown,
                                            'inline-flex': showingNavigationDropdown,
                                        }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
</template>
