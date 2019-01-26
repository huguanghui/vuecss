<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="data"></use>
  </svg>
</template>

<script>
export default {
  props: {
    data: String
  }
}
</script>
