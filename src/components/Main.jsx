/*
!JSX (Javascript XML):
react tarafından kullanılan söz dizimi
JSX javascript içerisinde Html benzeri yapıyla kullanıcı arayüzünü tanımlamaya yarar.

HTML | JSX FARKLARI :
JSX html deki bütün kodlara sahiptir.
1)  {}: doğrudan jsx içerisine js kodu yazabiliyoruz.
2) classname: sınıf tanımlarken class yerine kullanıyoruz.
3) inlineCss: {{}} çift parantez içerisine yazıyoruz.
4) bütün etiketler self closing olmadan tanımlanabilir.
5) bütün etiketlerin kapanışını söylememiz lazım.örneğin <br/> gibi... (br, hr, input, img)
6) olay izleme : izlemek istediğimiz olayı direkt etikette tanımlıyoruz.
7) <> </> : fragment : 

*/

const Main = () => {
 const text = "Etüt sınıfına hoşgeldiniz..";

 const formatPrice = (price)=> price * 33 + " tl"
    
  const url = 
    "https://avatars.mds.yandex.net/i?id=fcce23dd02c5674d6e6120ee86ef96314c5e67a7-12575309-images-thumbs&n=13";

 const handleChange = (e) => {
    console.log(e.target.value) ;
  };

  return (
    <main>
      <h1>{text} </h1>

      <h1>{formatPrice(50)} </h1>
      <h1>{formatPrice(30)} </h1>

       <img
        style= {{
          borderRadius: "40px",
          boxShadow: "0 0 20px white",
        }}
        src={url} 
       />
         <div>İÇERİK</div>

         <div 
         onClick={()=> alert("TIKLANDI..")}
            style={{
                width: "300px",
                height: "300px",
                background: "red",
            }} 
         /> 
            
         <input onChange={handleChange} />  

    </main>
  );
};

export default Main;
