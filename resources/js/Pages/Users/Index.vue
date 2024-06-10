<script setup lang="ts">
    import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
    import { ref } from 'vue';

    // get users from inertia response
    const props = defineProps({ users: Object });
    const users = ref(props.users);
    console.log(users.value);

    const columns = [
        {
            field: 'name',
            header: 'Name',
        },
        {
            field: 'email',
            header: 'Email',
        },
        {
            field: 'created_at',
            header: 'Created At',
        },
    ];
</script>

<template>
    <Head title="Users" />

    <AuthenticatedLayout>
        <template #header>
            <h2 class="font-semibold text-xl text-gray-800 leading-tight">Users</h2>
        </template>

        <div class="py-12">
            <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                    <DataTable :value="users">
                        <Column v-for="column in columns" :key="column.field" :field="column.field" :header="column.header" />
                    </DataTable>
                </div>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
