import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

const theme={
    primary:"#4CAF50",
    secondary: "#9C27b0",
    accent:"#9C27b0",
    info:"#00CAE3",
}

export default new Vuetify({
    theme:{
        themes:{
            dark: theme,
            light:theme,
        },
    },
    breakporin:{
        thresholds: {
            xs:480,
            sm:1024,
            md:1280,
            lg:1919,
        },
    },
});
