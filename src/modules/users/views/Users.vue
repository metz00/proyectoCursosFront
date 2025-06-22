<script setup>
import { ref, watch } from "vue";

import UsersTable from '../components/UsersTable.vue';
import FormUsers from '../components/FormUsers.vue';
import FormEditUsers from '../components/FormEditUsers.vue';
import Loading from '@/shared/components/Loading.vue';

import useUsers from '../composables/useGetUsers';
import useCreateUsers from '../composables/useCreateUsers';
import useUpdateUsers from '../composables/useUpdateUsers';
import useDeleteUsers from '../composables/useDeleteUsers';

const openAddModal = ref();
const openEditModal = ref();
const user = ref();

const {users, getIsLoading, refetch} = useUsers();

const handleOpenAddModal = () => {
    openAddModal.value = !openAddModal.value
}

const {createUser} = useCreateUsers();
const onSaveUser = (payload) => {
    createUser(payload);
}

const handleOpenEditModal = () => {
    openEditModal.value = !openEditModal.value
}

const { updateUsers} = useUpdateUsers();
const setUser = (value) =>{
    user.value = {...value};
    handleOpenEditModal();
}
const updatedUser = (payload) => {
    updateUsers(payload);
}

const {deleteUsers} = useDeleteUsers();
const onDelete = (id) => {
    deleteUsers(id);
}
</script>


<template>
 <v-container>
       <Loading v-if="getIsLoading"/>
    <v-row>
        <v-col class="d-flex justify-space-between align-center mb-4">
            <h2 class="text-h5 font-weight-bold text-indigo-darken-3">Usuarios</h2>
            <v-btn @click="handleOpenAddModal" rounded="xl" prepend-icon="mdi-plus" color="primary"> Agregar</v-btn>
        </v-col>
    </v-row>
    <div class="user-container">
        <UsersTable 
        :items="users"
        @edit="setUser"
        @delete="onDelete"
        />
    </div>

    <FormUsers
    :open="openAddModal"
    @saved="onSaveUser"
    @close="handleOpenAddModal"
    />
    <FormEditUsers
    :open="openEditModal"
    :user="user"
    @updated="updatedUser"
    @close="handleOpenEditModal"
    />
 </v-container>

</template>

<style scoped>
.user-container {
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-wrap: wrap;
  margin-top: 15px;
}
</style>
