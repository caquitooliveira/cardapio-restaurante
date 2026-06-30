"use client";

import { produtos } from "../app/../app/componentes/data/data_produtos.js";
import Cards from "./componentes/Cards";
import Image from "next/image";
import Categorias from "./componentes/Categorias/index.jsx";

import { useState } from "react";

export default function Home() {
    const [categoriaSelecionada, setCategoriaSelecionada] = useState("Todas")
    const [textoBusca, setTextoBusca] = useState("");

    const produtosFiltrados = produtos.filter((produto) => {
        const correspondeCategoria = categoriaSelecionada === "Todas" || produto.categoria === categoriaSelecionada;

        const correspondeBusca = 
        produto.nome.toLowerCase().includes(textoBusca.toLowerCase()) ||
        produto.descricao.toLowerCase().includes(textoBusca.toLowerCase());

        return correspondeCategoria && correspondeBusca;
    });


return (
  <main>

    <section className="banner">
        <div className="banner_conteudo">
            <h1>Restaurante</h1>
            <p>De pratos clássicos a criações surpreendentes, nosso caradápio é um verdadeiro requinte de sabores</p>
        </div>
    </section>

    <div className="container">
      <h2 className="titulo">Cardápio Restaurante</h2>

      <div className="campo_pesquisa">
        <Image 
        src="/lupa.png"
        alt="Lupa de pesquisa"
        width={20}
        height={20}
        />

        
        <input type="text" 
        placeholder="Pesquisar um dos pratos do nosso cardápio"
        value={textoBusca}
        onChange={(e) => setTextoBusca(e.target.value)}
        />
        </div>
        
<Categorias 
        categoriaSelecionada={categoriaSelecionada}
        setCategoriaSelecionada={setCategoriaSelecionada}

/>
     {produtosFiltrados.length > 0 ? (
        <Cards lista={produtosFiltrados} />
     ) : (
        <div className="sem_resultado">
            <h3>Nenhum prato encontrado.</h3>
            <p>Tente pesquisar outro prato...</p>
        </div>
          )}
    </div>
  </main>
);
}