import Image from "next/image";
import estilos from "./Categorias.module.css";

export default function Categorias({
  categoriaSelecionada,
  setCategoriaSelecionada,
}) {
  return (
    <div className={estilos.container}>
      <button
        className={categoriaSelecionada === "Todas" ? estilos.ativo : ""}
        onClick={() => setCategoriaSelecionada("Todas")}
      >
        Todas
      </button>

      <button
        className={categoriaSelecionada === "Massas" ? estilos.ativo : ""}
        onClick={() => setCategoriaSelecionada("Massas")}
      >
        <Image
          src="/icones/massa.png"
          alt="Massas"
          width={20}
          height={20}
        />
        Massas
      </button>

      <button
        className={categoriaSelecionada === "Carnes" ? estilos.ativo : ""}
        onClick={() => setCategoriaSelecionada("Carnes")}
      >
        <Image
          src="/icones/carne.png"
          alt="Carnes"
          width={20}
          height={20}
        />
        Carnes
      </button>

      <button
        className={categoriaSelecionada === "Bebidas" ? estilos.ativo : ""}
        onClick={() => setCategoriaSelecionada("Bebidas")}
      >
        <Image
          src="/icones/bebidas.png"
          alt="Bebidas"
          width={20}
          height={20}
        />
        Bebidas
      </button>

      <button
        className={categoriaSelecionada === "Sobremesas" ? estilos.ativo : ""}
        onClick={() => setCategoriaSelecionada("Sobremesas")}
      >
        <Image
          src="/icones/sobremesa.png"
          alt="Sobremesas"
          width={20}
          height={20}
        />
        Sobremesas
      </button>
    </div>
  );
}