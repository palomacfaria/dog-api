import Dog from "../../assets/dog.png"

export const HomePage = () => {
  return (
    <section>
      <div>
        <h2>A felicidade está mais perto do que você pensa</h2>
        <button>Vamos lá!</button>
      </div>
      <div>
        <img src={Dog}/>
      </div>
    </section>
  );
};
