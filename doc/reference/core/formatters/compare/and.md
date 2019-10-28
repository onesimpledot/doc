This formatter corresponds to the `&&` operator: `a && b`.

<rv-example-tabs class="pt-3" handle="bs4-icon">
<template type="single-html-file">
<div rv-if="true | and true">Show me!</div>
<div rv-if="true | and false">Show me not!</div>
</template>
</rv-example-tabs>