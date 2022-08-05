<script setup>
  import Navigation from '@/components/Layout/Navigation.vue'
  import PageFooter from '@/components/Layout/PageFooter.vue'
  import Controls from '@/components/Layout/Controls.vue'
  import TopBar from '@/components/Layout/TopBar.vue'

  defineProps({
    name: {
        type: String,
        required: true
    }
  })

</script>

<template>

  <main>
    
      <div class="wrapper">

        <TopBar />
        <Navigation />

        <!-- Content Wrapper. Contains page content -->
        <div class="content-wrapper">

          <!-- Content Header (Page header) -->
          <section class="content-header">
            <div class="container-fluid">
              <div class="row mb-2">
                <div class="col-sm-6">
                  <h1 class="m-0">{{ name }}</h1>
                </div>
                <div class="col-sm-6">
                  <ol class="breadcrumb float-sm-right">
                    <li class="breadcrumb-item"><RouterLink to="/">Home</RouterLink></li>
                    <li class="breadcrumb-item active">{{ name }}</li>
                  </ol>
                </div>
              </div>
            </div>
          </section>

          <section class="content">
            <div class="container-fluid">
              <slot>

              </slot>
            </div>
          </section>

        </div>
        <!-- /.content-wrapper -->

        <!-- Control sidebar -->
        <Controls />

        <!-- Footer -->
        <PageFooter />

      </div>
      <!-- ./wrapper -->

  </main>

</template>