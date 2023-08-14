import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "./views/HomeView.vue";
import PlayerView from "./views/PlayerView.vue"

const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "home",
        component: HomeView,
    },
    {
        path: "/players",
        name: "players",
        component: PlayerView
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
