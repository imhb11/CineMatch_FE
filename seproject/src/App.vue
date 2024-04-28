<template>

  <v-app class="overflow-hidden">
    <v-app-bar
      absolute
      color="white"
      elevate-on-scroll
      scroll-target="#scrolling-techniques-7"
    >

      <router-link to="/" class="menu" style="color: black">HOME</router-link>
      <router-link to="/about" class="menu" style="color: black;">RECOMMEND</router-link>

      <v-spacer></v-spacer>


      <!--검색-->
      <v-responsive
      class="mx-auto"
      max-width="344"
      >
        <v-text-field
        hide-details="auto"
        label="serch"
        ></v-text-field>
      </v-responsive>
      <v-btn icon style="">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </v-app-bar>
    
    <br>
    <br>

    <div>
      <!--장르 선택-->
      <v-select
      label="genres"
      :items="genres"
      variant="solo-inverted" class="genres"
      @change="filterCards"
      ></v-select>
      <!--장르 card 슬라이드-->
      <v-sheet
      class="mx-auto"
      elevation="8"
      max-width= 100%
      height="400"
      >
        <v-carousel hide-delimiters
        v-model="model"
        class="pa-4"
        selected-class="bg-success"
        show-arrows
        >
        <template v-for="(group, index) in Math.ceil(filteredCards.length / 5)">
          <v-carousel-item :key="index">
            <div style="display: flex; justify-content: center;">
              <template v-for="card in filteredCards.slice(index * 5, (index + 1) * 5)">
                <v-card class="card" @click="toggle(card)" :key="card.id">
                  <v-card-title>{{ card.title }}</v-card-title>
                </v-card>
              </template>
            </div>
          </v-carousel-item>
        </template>
      </v-carousel>
    </v-sheet>
  </div>

    <!--추천슬라이드-->
    <div>
      <v-subheader>추천 영화</v-subheader>
      <v-sheet
      class="mx-auto"
      elevation="8"
      max-width= 100%
      >
      <v-carousel hide-delimiters
        v-model="model"
        class="pa-4"
        selected-class="bg-success"
        show-arrows
        >
        <v-carousel-item :key="index"></v-carousel-item>
            
      </v-carousel>
    </v-sheet>
    </div>
  
  </v-app>
</template>

<script>


export default {
  name:"App",
  data(){
    return{
      drawer:null,
        //장르선택
        genres:[
        'Adventure',
        'Animation',
        'Children',
        'Comedy',
        'Fantasy',
        'Romance',
        'Drama',
        'Crime',
        'Thriller'
        ],
        model: 1,
        cards: [
        { id: 1, title: 'Toy Story (1995)', genre: ['Adventure','Animation','Children','Comedy','Fantasy']},
        { id: 2, title: 'Jumanji (1995)', genre: ['Adventure','Children','Fantasy'] },
        { id: 3, title: 'Grumpier Old Men (1995)', genre: ['Comedy','Romance']},
        { id: 4, title: 'Waiting to Exhale (1995)', genre: ['Comedy','Drama','Romance'] },
        { id: 5, title: 'Father of the Bride Part II (1995)', genre: ['Comedy']},
        { id: 6, title: 'Heat (1995)', genre: ['Action','Crime','Thriller'] },
        { id: 7, title: 'Sabrina (1995)', genre: ['Comedy','Romance'] },
        { id: 8, title: 'Sabrina (1995)', genre: ['Comedy','Romance'] },
        { id: 9, title: 'Sabrina (1995)', genre: ['Action'] },
        { id: 10, title: 'Sabrina (1995)', genre: ['Comedy','Romance'] },
        { id: 11, title: 'Sabrina (1995)', genre: ['Comedy','Romance'] },
      ],
      filteredCards: [] 
    }
  },
  created() {
    // 초기에 모든 카드를 보여주기 위해 filteredCards에 cards를 복사합니다.
    this.filteredCards = [...this.cards];
  },
  methods:{
    toggle(card){
    

      this.$router.push({ name: 'DetailPage', params: { id: card.id } });
    },
    filterCards(genre) {
      this.filteredCards = this.cards.filter(card => card.genre.includes(genre));
    }
   
  }
}
</script>

<style>
.menu{
  text-decoration: none;
  color: black;
  margin: 20px;
}
.card{
  width: 200px;
  height: 300px;
  margin: 30px;
  color: white;
}
.title{
  display: inline-block;
  padding: 10px;
}
.genres{
  margin: 10px;
  width: 130px;
}
/*슬라이드 버튼 */
.v-window__next,
  .v-window__prev {
    display: none;
}

.v-window__container:hover .v-window__prev,
.v-window__container:hover .v-window__next {
    display: block;
}

</style>