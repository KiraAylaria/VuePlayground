<script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import router from '@/router';
  
  let search = ref(null);
  let route = useRoute();

  function onInput(e) {
    search.value = e.target.value;
    router.push({ name: "UserAccounts", query: {suche: search.value} })
  }

  onMounted(() => {
    if (route.query.suche !== undefined) {
      search.value = route.query.suche
    }
  })
</script>

<template>
  <Layout name="Benutzerkonten">
    <div class="row">
      <div class="col-md-6">
        <div class="form-group">
          <label>Suche</label>
          <input type="text" class="form-control" placeholder="Suche..." :value="search" @input="onInput">
        </div>
      </div>
    </div>
  </Layout>
</template>
