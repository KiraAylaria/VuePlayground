<template>
  <Layout name="Dashboard">
    <div class="content">
      <div class="container-fluid">
        <section class="content">
          <div class="container-fluid">
            <slot>
              <div class="row">
                <div class="col-sm-12 col-xl-6">
                  <div class="card card-primary">
                    <div class="card-header">
                      <h3 class="card-title">Export</h3>
                    </div>
                    <div class="card-body">
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
                      <button class="btn btn-primary mr-1" @click="saveText()">Speichern</button>
                      <button class="btn btn-warning" @click="loadFile()">Download</button>
                    </div>
                    <div class="card-footer">
                      <button class="btn btn-danger" @click="deleteText()">Löschen</button>
                    </div>
                  </div>
                </div>
                <div class="col-sm-12 col-xl-6">
                  <div class="card card-primary">
                    <div class="card-header">
                      <h3 class="card-title">Lorem Ispum</h3>
                    </div>
                    <div class="card-body">
                      <p>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   
                        Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet,
                      </p>
                    </div>
                    <!--<div class="card-footer">

                    </div>-->
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