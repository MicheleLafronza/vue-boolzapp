// inizializzo app Vue 3
const { createApp } = Vue

  createApp({
    data() {
      return {
        contacts: [
          {
            name: 'Princess Carolyn',
            avatar: './img/Princess-Carolyn.Bojack-Horseman.webp',
            visible: true,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
            ],
          },

          {
            name: 'Mr. Peanutbutter',
            avatar: './img/Mr-peanut.jpg',
            visible: true,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
            ],
          },

          {
            name: 'Diane Nguyen',
            avatar: './img/Diane.jpg',
            visible: true,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
            ],
          },

          {
            name: 'Todd Chavez',
            avatar: './img/Todd.webp',
            visible: true,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
            ],
          },

          {
            name: 'Pinky Penguin',
            avatar: './img/penguin.jpg',
            visible: true,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
            ],
          },

          {
            name: 'Hollyhock',
            avatar: './img/hollyhock.webp',
            visible: true,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
            ],
          },

          {
            name: 'Gina Cazador',
            avatar: './img/gina.jpg',
            visible: true,
            messages: [
              {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent'
              },
            ],
          },
        ]
      }
    },
    methods: {

    },
    mounted() {
        
    }
  }).mount('#app')