import './bootstrap';
import '../css/app.css';
import "primeicons/primeicons.css"; //icons
import "primevue/resources/primevue.min.css"; //core CSS
import "primevue/resources/themes/saga-blue/theme.css"; //theme

import { createApp, h, DefineComponent, onMounted } from 'vue';
import { createInertiaApp, Head, Link } from '@inertiajs/vue3';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { ZiggyVue } from '../../vendor/tightenco/ziggy';
import PrimeVue from 'primevue/config';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Checkbox from 'primevue/checkbox';
import Menu from 'primevue/menu';
import Card from 'primevue/card';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import Row from 'primevue/row';
import MultiSelect from 'primevue/multiselect';
import Menubar from 'primevue/menubar';

const appName = import.meta.env.VITE_APP_NAME || 'Video Hoster';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob<DefineComponent>('./Pages/**/*.vue')),
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(ZiggyVue)
            .use(PrimeVue)
            .component('InputText', InputText)
            .component('Button', Button)
            .component('Checkbox', Checkbox)
            .component('Menu', Menu)
            .component('Head', Head)
            .component('Link', Link)
            .component('Card', Card)
            .component('DataTable', DataTable)
            .component('Column', Column)
            .component('ColumnGroup', ColumnGroup)
            .component('Row', Row)
            .component('MultiSelect', MultiSelect)
            .component('Menubar', Menubar)
            .mount(el);
    },
    progress: {
        color: '#4B5563',
    },
});
