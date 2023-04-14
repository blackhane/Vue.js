<template>
  <h4>Components</h4>
  <div>
    <h4>Icons</h4>
    <v-icon color="info" icon="mdi-wifi" size="small"></v-icon>
    <v-icon icon="mdi-login" size="large"></v-icon>
    <v-divider class="my-5"></v-divider>

    <h4>Images</h4>
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    ></v-img>
    <v-img
      :width="300"
      aspect-ratio="16/9"
      cover
      src="https://picsum.photos/seed/picsum/200/300"
    ></v-img>
    <v-divider></v-divider>

    <h4>Buttons</h4>
    <v-btn>button</v-btn>
    <v-btn color="primary">button</v-btn>
    <v-btn prepend-icon="mdi-vuetify">button</v-btn>
    <v-btn size="small">button</v-btn>
    <v-btn block>button</v-btn>
    <v-divider></v-divider>

    <h4>Cards</h4>
    <v-card text="내용1" variant="outlined"></v-card>

    <v-card
      class="my-2"
      title="제목"
      subtitle="부제목"
      text="내용"
      variant="outlined"
    >
      <v-card-actions>
        <v-btn>Click me</v-btn>
      </v-card-actions>
    </v-card>

    <v-card width="400">
      <v-img
        height="200"
        src="https://cdn.pixabay.com/photo/2020/07/12/07/47/bee-5396362_1280.jpg"
        cover
        class="text-white"
      >
        <v-card-item>
          <v-card-title>This is a title</v-card-title>

          <v-card-subtitle>This is a subtitle</v-card-subtitle>
        </v-card-item>
      </v-img>
      <v-card-text> This is content </v-card-text>
    </v-card>
    <v-divider></v-divider>
  </div>
</template>
<script setup></script>
<style scoped></style>
