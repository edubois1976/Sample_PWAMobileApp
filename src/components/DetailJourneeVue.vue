<template>
  <div>
    <p>Suivi d'exploitation NEON.</p>
    <date-picker v-model="time1" lang="fr" type="datetime" format="yyyy-MM-dd HH:mm:ss" confirm=true></date-picker>
    <ul class="neon-list-item mdl-list">
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
    <!-- Accent-colored raised button with ripple -->
        <button class="neon-ok-item mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="Cliquez pour le détail">
        Boulogne sur Mer
        </button>
    </span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
        <button class="neon-ok-item mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="Cliquez pour le détail">
        Nanteuil
        </button>
    </span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
        <button class="neon-ok-item mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="Cliquez pour le détail">
        Mulhouse
        </button>
    </span>
  </li>
  <li class="mdl-list__item">
    <span class="mdl-list__item-primary-content">
        <button class="neon-ok-item mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" title="Cliquez pour le détail">
        St Just
        </button>
    </span>
  </li>
</ul>
  </div> 
</template>

<script>
import DatePicker from 'vue2-datepicker'

export default {
  components: { DatePicker },
  data () {
    return {
      time1: new Date()
    }
  }
}
</script>

<style scoped>
  .list {
    width: 100%;
    padding: 0;
  }

.neon-list-item {
  width: 100%;
}

.neon-ok-item {
  width: 100%;
  background-color:#66c309;
}
.neon-warn-item {
  width: 100%;
  background-color: burlywood;
}
.neon-error-item {
  width: 100%;
  background-color: red;
}
</style>
