<template>
    <div>
        <iframe :src="pdfUrl" width="100%" height="600px"></iframe>
    </div>
</template>

<script lang="ts" setup>
const pdfUrl =
    'https://mozilla.github.io/pdf.js/web/compressed.tracemonkey-pldi-09.pdf';
</script>

<style scoped>
iframe {
    border: none;
}
</style>
