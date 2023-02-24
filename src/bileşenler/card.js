
import axios from "axios";
import { response } from "msw";

const Card = (makale) => {
  //!kapsayıcı ana divimiz olan card oluşturalım
  const card = document.createElement("div");
  card.classList.add("card");

  //! classı headline olan ana başlık divini oluşturalım, textcontentini makale nesnesinin anabaslik öğesinden alalım, card'a apppendleyelim
  const headLine= document.createElement("div");
  headLine.classList.add("headline");
  headLine.textContent = makale.anabaslik;
  card.appendChild(headLine);
  
  //! yazar bilgilerini içerecek olan author classlı bir div oluşturalım
  const author =document.createElement("div");
  author.classList.add("author");
  card.appendChild(author);

  //!yazara ait fotonun olacağı bir div tagi açalım
  const imgContainer = document.createElement("div");
  imgContainer.classList.add("img-container");
  author.appendChild(imgContainer);
  
  //! yazar fotosunun olacağı img etiketi oluşturalım ve imgcontainere ekleyelim
  const yazarFoto = document.createElement("img");
  yazarFoto.src=makale.yazarFoto;
  imgContainer.appendChild(yazarFoto);
  

  //! yazar adının olacağı bir span etiketi oluşturalım ve author divinin içine ekleyelim
  const yazarAdı = document.createElement("span");
  yazarAdı.textContent=makale.yazarAdi;
  author.appendChild(yazarAdı);
  


    //! event dinleyicisinin eklenmesi

    card.addEventListener("click", (event) =>{
      console.log(event.target.querySelector(".headline").textContent)
    })


    return card;

  // GÖREV 5
  // ---------------------
  // Aşağıda gördüğünüz işaretlemeyi döndürmesi gereken bu fonksiyonu uygulayın.
  // Tek argümanı olarak "anabaslik", "yazarFoto" ve "yazarAdı" özelliklerine sahip bir "makale" nesnesi alır.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  // Bir kullanıcı bir kartı tıkladığında makalenin başlığının konsola kaydedilmesi için click event dinleyicisi ekleyin.
  //
  // <div class="card">
  //   <div class="headline">{ anabaslik }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ yazarFoto }>
  //     </div>
  //     <span>{ yazarAdı } tarafından</span>
  //   </div>
  // </div>
  //
}

const cardEkleyici = (secici) => {
  const addSelector = document.querySelector(secici);

  axios
  .get("http://localhost:5001/api/makaleler")
  .then((response) =>{
    console.log(response.data)
    //!axiostan aldığım yanıtı işliyorum
    //!yanıttaki her makale nesnesini dönüp bir kart oluşturuyorum
    
    //!oluşturduğum kartları DOM'a ekliyorum
    for(let keyword in response.data.makaleler){

      for(let i = 0; i<response.data.makaleler[keyword].length; i++){
        addSelector.appendChild(Card(response.data.makaleler[keyword][i]));
      }
    }
  })
    
    

  // GÖREV 6
  // ---------------------
  // Tek bağımsız değişkeni olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Makaleleri bu uç noktadan almalıdır: `http://localhost:5001/api/makaleler` (console.log ile test edin!!).
  // Bununla birlikte, makaleler tek bir düzenli dizi halinde organize edilmemiştir. Yanıtı yakından inceleyin!
  // Card bileşenini kullanarak yanıttaki her makale nesnesinden bir kart oluşturun.
  // Her cardı, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
  
}

export { Card, cardEkleyici }
