<template>
    <div class="chat-msg">
        <p>{{ msg }}</p>
    </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { typeEffect } from '@/utils/utils';

const text = `再看看框架这边，htmx 在星趋势里，排行第二位，2023增长的星星数为 15.6K，与第一位的 React 颇为相近。而 htmx 也是今年讨论度最高的。在我经历过前后端不分离的阶段中，使用 jsp 生成前端页面，js 更多是页面炫技的工具。然后在 jQuery + Ajax 得到广泛应用之后，才真正有前后端分离的项目。
htmx 的出现，不了解的人，可能觉得是倒退到 Java + jQuery + Ajax 的前后端分离状态。但是，写过例子之后，我发现，它其实是倒退到了前后端不分离的阶段。
用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。用 java 也好，世界上最好的 php 也好，或者用现在的 nodejs 服务，都能接入 htmx。你只要在服务端返回 html 即可。
javascript 代码解读复制代码
作者：陈佬昔的编程人生
链接：https://juejin.cn/post/7340603873604599843
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。`;
const msg = ref<string>(text);
onMounted(() => {
    // typeEffect(0, text, msg);
});
</script>
<style lang="scss" scoped>
.chat-list {
    flex: 1;
    border: 1px solid red;
}
</style>
