<template>
  <Layout name="Dashboard">
    <div class="content">
      <div class="container-fluid">
        <section class="content">
          <div class="container-fluid">
            <slot>
              <div class="row">
                <div class="col-sm-12 col-xl-6">
                  <div class="form-group">
                    <label>Typ wählen</label>
                    <div class="form-group">
                      <div class="form-check">
                        <input class="form-check-input" id="csvRadio" type="radio" name="radio1" value="csv" v-model="radioVal" checked>
                        <label class="form-check-label" for="csvRadio">CSV</label>
                      </div>
                      <div class="form-check">
                        <input class="form-check-input" id="textRadio" type="radio" name="radio1" value="text" v-model="radioVal">
                        <label class="form-check-label" for="textRadio">Text</label>
                      </div>
                    </div>
                    <label>Text file export</label>
                    <textarea class="form-control" rows="3" v-model="text" placeholder="Text eingeben"></textarea>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <button class="btn btn-primary" @click="saveText()">Speichern</button>
                      <button class="btn btn-warning ml-2" @click="loadFile()">Download</button>
                      <button class="btn btn-danger float-right" @click="deleteText()">Löschen</button>
                    </div>
                  </div>
                </div>
              </div>
            </slot>
          </div>
        </section>
      </div>
    </div>
  </Layout>
</template>

<script>

export default {
  data() {
    return {
      text: '',
      radioVal: 'csv'
    }
  },
  methods: {
    saveText() {
      window.localStorage.setItem('downloadText', this.text)
      alert('Text gespeichert')
    },
    loadFile() {
      if (window.localStorage.getItem('downloadText') !== null) {
        let contentType = 'data:text/csv'
        let fileType = '.csv'
        if (this.radioVal == 'text') {
          contentType = 'data:text/plain'
          fileType = '.txt'
        }
        let fileText = window.localStorage.getItem('downloadText')
        let hyperlink = document.createElement('a')
        hyperlink.download = 'export' + fileType
        hyperlink.href = contentType + ',' + fileText
        let mouseEvent = new MouseEvent('click', {
          bubbles: true,
          cancelable: true,
          view: window
        })
        hyperlink.dispatchEvent(mouseEvent)
      } else {
        alert('Bitte geben Sie einen Text ein und speichern diesen!')
      }
    },
    deleteText() {
      window.localStorage.removeItem('downloadText')
      alert('Text gelöscht!')
      this.text = null
    }
  },
  mounted() {
    this.text = window.localStorage.getItem('downloadText')
  }
}

</script>