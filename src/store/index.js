import { createPinia } from "pinia";
import { useSampleStore } from "./sample.store";

const pinia = createPinia();
pinia.use(useSampleStore);

export default pinia;