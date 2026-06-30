import estilos from "../Cards/Cards.module.css";
import Image from "next/image";

export default function Cards({ lista }) {
  return (
    <div className={estilos.container_cards}>
      {lista.map((produto) => (
        <div key={produto.id} className={estilos.card}>
          <Image
            src={produto.imagem}
            alt={produto.nome}
            className={estilos.imagem}
            width={250}
            height={180}
          />

          <div className={estilos.conteudo}>
            <h3>{produto.nome}</h3>

            <small>{produto.categoria}</small>

            <p>{produto.descricao}</p>

            <span>
              R$ {produto.preco.toFixed(2).replace(".", ",")}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}