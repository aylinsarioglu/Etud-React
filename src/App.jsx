import Header from "./components/Header";
import Card from "./components/card";
import { data } from "./constant";
import Alert from "./components/Alert";

function App() {
  // bir bileşeni nasıl kullanırız?

  // çoklu eleman renderlama ? --data dizisindeki her bir nesne için ekrana bir kart bas.

  const  title = " "; // apiden gelen veri olduğunu düşünelim.


  return (
   <div>
      < Header /> 
      <Alert theme ="uyarı" icon={true} />
      <Alert theme ="hata"/>
      <Alert theme ="bilgi"icon={true} />
      <Alert theme =""/> 

      {/* 
      1.yöntem > terneray
      title varsa ekrana title bas yoksa null döndür */}
      {title ? <h1>{title}</h1> : <h1>başlık verisi alınamadı.</h1>}
      
      {/* 2.yöntem > and 
      title varsa ekrana title bas */}

      {title && <h1> {title} </h1>}
      
      <div className="wrapper">

        { data.map ( ( item ) => (
          < Card item = { item } />
        ) ) }
      </div>
    </div>
  );
}

export default App ;
