import {
  createUserWithEmailAndPassword,
  updateProfile,
  signInWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
} from 'firebase/auth';
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from 'firebase/firestore';
import { auth, db } from './firebase-config.js';

export function cadastrarUsuario(email, senha) {
  return createUserWithEmailAndPassword(auth, email, senha);
}

export function atualizarNomeDoUsuario(nome) {
  return updateProfile(auth.currentUser, {
    displayName: nome,
  });
}

export function loginUsuario(email, senha) {
  return signInWithEmailAndPassword(auth, email, senha);
}

export function sairDaConta() {
  return signOut(auth);
}

export function redefinirSenha(email) {
  return sendPasswordResetEmail(auth, email);
}

export async function adicionarPost(username, conteudo, nivel, likes) {
  try {
    const docRef = await addDoc(collection(db, 'posts'), {
      username: auth.currentUser.displayName,
      uid: auth.currentUser.uid,
      conteudo,
      nivel,
      likes: 0,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
  return { username, conteudo, likes };
}

// export async function adicionarLike(postId) {
//   try {
//     const postRef = doc(db, 'posts', postId);
//     await updateDoc(postRef, { likes: increment(1), liked: true });
//   } catch (error) {
//     console.error('erro ao adicionar like', error);
//   }
// }

// export async function removerLike(postId) {
//   try {
//     const postRef = doc(db, 'posts', postId);
//     await updateDoc(postRef, { likes: increment(-1), liked: false });
//   } catch (error) {
//     console.error('erro ao remover like', error);
//   }
// }

export async function deletarPost(postId) {
  console.log(postId);
  await deleteDoc(doc(db, 'posts'));
}

export async function exibirPosts() {
  try {
    const querySnapshot = await getDocs(collection(db, 'posts'));
    const feedElement = document.querySelector('.post');
    feedElement.innerHTML = '';
    const array = [];
    querySnapshot.forEach((document) => {
      const post = document.data();
      array.push({
        ...post,
      });
      // console.log(`${doc.id} => ${doc.data()}`);
    });
    return array;
  } catch (error) {
    console.error('erro ao obter os posts', error);
  }
  
}
