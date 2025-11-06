import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-app.js';
import { getDatabase, ref, set } from 'https://www.gstatic.com/firebasejs/10.6.0/firebase-database.js';
import { firebaseConfig } from './firebase-config.js';

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Teste simples
set(ref(db, 'test'), {
    message: "Conexão funcionando!",
    timestamp: new Date().toISOString()
}).then(() => {
    console.log('Teste realizado com sucesso!');
}).catch((error) => {
    console.error('Erro:', error);
});

// Regras do Firebase
// pet: {
//   ".read": true,
//   ".write": true
// }