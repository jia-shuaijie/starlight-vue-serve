/// <reference types="vite/client" />

declare module "*.vue" {
    import {DefineComponent} from "vue";
    const component: DefineComponent<{}, {}, any>;
    export default component;
}

interface ImportMetaEnv {
    VITE_API_URL: string;
    VITE_APP_TITLE: string;
    VITE_PLUGIN_VERSION: string; // 添加插件特有的环境变量
}


interface ImportMeta {
    readonly env: ImportMetaEnv
}
