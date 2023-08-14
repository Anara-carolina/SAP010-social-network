import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from 'firebase/auth';

import {
  addDoc,
  deleteDoc,
  getDocs,
  updateDoc,
  // collection,
} from 'firebase/firestore';

import {
  cadastrarUsuario,
  atualizarNomeDoUsuario,
  loginUsuario,
  sairDaConta,
  redefinirSenha,
  exibirPosts,
  adicionarPost,
  editarPost,
  deletarPost,
} from '../src/lib/firebase';

jest.mock('firebase/auth');

jest.mock('../src/lib/firebase-config', () => ({
  auth: { currentUser: 'amandasca' },
}));

jest.mock('firebase/firestore', () => {
  const originalModule = jest.requireActual('firebase/firestore');
  return {
    __esModule: true,
    ...originalModule,
    getDocs: jest.fn(() => ({ docs: [] })),
    addDoc: jest.fn(),
    deleteDoc: jest.fn(),
    updateDoc: jest.fn(),
    collection: jest.fn(),
    doc: jest.fn(),
  };
});

describe('testes da fução cadastrarUsuario', () => {
  it('deve ser uma função', () => {
    expect(typeof cadastrarUsuario).toBe('function');
  });

  it('deve cadastrar via firebase', () => {
    const email = 'emailexemplo@gmail.com';
    const senha = '123456';
    cadastrarUsuario(email, senha);
    expect(createUserWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe(atualizarNomeDoUsuario, () => {
  it('deve ser uma função', () => {
    expect(typeof atualizarNomeDoUsuario).toBe('function');
  });

  it('deve atualizar nome do usuario ao cadastrar', () => {
    const nome = 'amandasca';
    atualizarNomeDoUsuario(nome);
    expect(updateProfile).toHaveBeenCalledTimes(1);
  });
});

describe(loginUsuario, () => {
  it('deve ser uma função', () => {
    expect(typeof loginUsuario).toBe('function');
  });

  it('deve logar usuario via firebase', () => {
    const email = 'userexemplo@gmail.com';
    const senha = '1234567';
    loginUsuario(email, senha);
    expect(signInWithEmailAndPassword).toHaveBeenCalledTimes(1);
  });
});

describe(sairDaConta, () => {
  it('deve ser uma função', () => {
    expect(typeof sairDaConta).toBe('function');
  });

  it('deve deslogar o usuario', () => {
    sairDaConta();
    expect(signOut).toHaveBeenCalledTimes(1);
  });
});

describe(redefinirSenha, () => {
  it('deve ser uma função', () => {
    expect(typeof redefinirSenha).toBe('function');
  });

  it('deve redefinir a senha do usuario', () => {
    const email = 'redefinirsenha@gmail.com';
    redefinirSenha(email);
    expect(sendPasswordResetEmail).toHaveBeenCalledTimes(1);
  });
});

describe(adicionarPost, () => {
  it('deve ser uma função', () => {
    expect(typeof adicionarPost).toBe('function');
  });

  it('deve adicionar o post ao firebase', () => {
    const nome = 'anaramartins';
    const conteudo = 'ola, bom dia';
    const nivel = 'intermediario';
    adicionarPost(nome, conteudo, nivel);
    expect(addDoc).toHaveBeenCalledTimes(1);
  });
});

describe('testes da função exibirPosts', () => {
  it('deve ser uma função', () => {
    expect(typeof exibirPosts).toBe('function');
  });

  it('deve exibir os posts na tela', () => {
    exibirPosts();
    expect(getDocs).toHaveBeenCalledTimes(1);
  });

  it('deve testar apos if', async () => {
    const mockDocument1 = {
      id: 'doc1',
      data: jest.fn().mockReturnValue({ post: 'Post 1' }),
    };
    const mockDocument2 = {
      id: 'doc2',
      data: jest.fn().mockReturnValue({ post: 'Post 2' }),
    };
    const mockSnapshot = { docs: [mockDocument1, mockDocument2] };
    getDocs.mockResolvedValue(mockSnapshot);

    const result = await exibirPosts();

    expect(getDocs).toHaveBeenCalledTimes(2);
    expect(result).toEqual([
      { post: 'Post 1', id: 'doc1' },
      { post: 'Post 2', id: 'doc2' },
    ]);
  });
});

describe(editarPost, () => {
  it('deve ser uma função', () => {
    expect(typeof editarPost).toBe('function');
  });

  it('deve editar o post', () => {
    const postId = 'w6sasidbjs';
    const novoConteudo = 'ola, boa noite';
    editarPost(postId, novoConteudo);
    expect(updateDoc).toHaveBeenCalledTimes(1);
  });
});

describe(deletarPost, () => {
  it('deve ser uma função', () => {
    expect(typeof deletarPost).toBe('function');
  });

  it('deve deletar o post', () => {
    const id = 'wog5ybcj';
    deletarPost(id);
    expect(deleteDoc).toHaveBeenCalledTimes(1);
  });
});
