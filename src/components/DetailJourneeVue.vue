<template>
  <div>
    <p>Suivi d'exploitation NEON.</p>
    <datetime format="DD-MM-YYYY h:i:s" width="300px" name='dob'></datetime>
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
import datetime from 'vuejs-datetimepicker'

export default {
  components: { datetime }
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
