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
                message: 'Ehi è arrivata finalmente un offerta per il film di Secretariat, richiamami appena possibile!',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Princess Carolyn ciao, purtroppo mi sto riprendendo da una sbornia, appena possibile mi faccio vivo..',
                status: 'sent'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Certo Bojack....',
                status: 'received'
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
                message: 'Ciao Bojack, come va?',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Oddio Mr. PeanutButter, non scocciarmi!',
                status: 'sent'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Dai Bojack, volevo solo sapere come stessi!! Oggi ci sarà una festa, vieni??',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'No.',
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
                message: 'Diane ciao, per caso oggi dovevamo vederci?',
                status: 'sent'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Bojack, te l ho già detto ieri ma forse eri troppo ubriaco, comunque no, ci vediamo domani..',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Ah si, giusto ahah!',
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
                message: 'Todd, ma dove sei finto?? Sono due giorni che non ti vedo!',
                status: 'sent'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Bojack sto lavorando al mio nuovo progetto, Halloween a gennaio!!',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Oddio..',
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
                message: 'Pinky come siamo messi con le vendite del libro?',
                status: 'sent'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Stiamo andando alla grande Bojack, finalmente posso pagare l affitto!',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Ecco i dettagli: siamo alla terza ristampa, quasi non ci credo, abbiamo venduto più di centomila copie!!',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Wow, beh me l aspettavo, sono Bojack Horseman!',
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
                message: 'Ciao Bojack, oggi passi tu a prendermi all aeroporto?',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Oddio, scrivimi non vorrei rimanere a piedi..',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Bojack ci sei??',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Hollyhock, certo che ci sono, scusa ma ho dormito troppo, ci vediamo stasera, ricordami a che ora!',
                status: 'sent'
              },

              {
                date: '10/01/2020 15:30:55',
                message: '..arrivo alle 10.',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Ok a più tardi',
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
                message: 'Bojack, magari oggi dopo le riprese potrei rimanere da te..',
                status: 'received'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Gina, l avevo già dato per scontato eheh, prendo qualcosa da bere allora!',
                status: 'sent'
              },

              {
                date: '10/01/2020 15:30:55',
                message: 'Ok, ma ricorda che siamo solo amici!',
                status: 'received'
              },
            ],
          },
        ],

        // variabile che permette di selezione quale contatto deve essere attivo
        selected: 0,

        // variabile nuovo messaggio
        newText: '',

        // varibile per ricerca contatti
        search: '',

        // variabile per dropdown
        dropdownSelected: '',
      }
    },
    
    methods: {
      // funzione che mi permette di cambiare il contatto selezionato
      select(index) {
        // il valore della variabile selected cambia a seconda dell'index che clicchiamo in pagina
        this.selected = index;
      },

      // funzione per inviare un messaggio con risposta automatica dopo 1 secondo
      sendMessage() {
        // push del messaggio nell'array del contatto selezionato in pagina
        this.contacts[this.selected].messages.push({ date:'10/01/2020 15:30:55', message: this.newText, status: 'sent' });
        // svuoto input
        this.newText = '';
        // set timeout per pushare un messaggio ricevuto preimpostato 
        setTimeout(() => {
          this.contacts[this.selected].messages.push({ date:'10/01/2020 15:30:55', message: 'Ok', status: 'received' });
        }, "1000");
      },

      // funzione che permette di cercare una chat 
      searched() {
        // prendo il valore immesso dall'utente e lo rendo lowercase
        const searchText = this.search.toLowerCase(); 
        // creo ciclo for che passa in rassegna tutti i contatti
        for (let index = 0; index < this.contacts.length; index++) {
          // prendo il nome del contatto e lo rendo lowercase
          const nameToSearch = this.contacts[index].name.toLowerCase();
          // inizio check if else
          if (nameToSearch.includes(searchText)) {
            // se il nome del contatto è compreso nel search visible diventa o rimane true
            this.contacts[index].visible = true;
          } else {
            // se il nome del contatto non è compreso nel search, visible diventa o rimane false
            this.contacts[index].visible = false;
          }
        }
      },

      // funzione apri dropdown
      dropdown(index) {
        // assegno il valore dell'index del messaggio selezionato alla variabile dropdownSelected
        this.dropdownSelected = index;
        // mi assicuro che la variabile diventi un numero
        parseInt(this.dropdownSelected);
      },

      // funzione chiudi dropdown
      dropdownClose() {
        // svuoto il valore della variabile
        this.dropdownSelected = '';
      },

      // funzione per cancellare un messaggio
      deleteMessage(messageIndex){
        // variabile che mi torna array dei messaggi del contatto selezionato
        const messageList = this.contacts[this.selected].messages;
        // funzione splice con indice preso dal click in pagina per rimuovere il messaggio
        messageList.splice(messageIndex, 1);
      },

      // Funzione per ottenere l'ultimo messaggio, l'argomento è l'array messages
      lastMessage(messages) {
        // se l'array ha almeno un elemento, ritorno l'ultimo elemento e stampo in pagina il valore di message
        return messages.length > 0 ? messages[messages.length - 1].message : '';
      },

      // funzione per ottenere la data dell'ultimo messaggio
      lastDate(messages) {
        // se l'array ha almeno un elemento, ritorno l'ultimo elemento e stampo in pagina il valore di date
        return messages.length > 0 ? messages[messages.length - 1].date : '';
      }
    },
    mounted() {

    }
  }).mount('#app')