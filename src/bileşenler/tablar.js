
import axios from "axios";
import { response } from "msw";

const Tablar = (konu) => {

//! Ana div olacak olan topics'i oluştur

const anaDiv = document.createElement("div");
anaDiv.classList.add("topics")

//! konu dizisindeki her bir öğe için bir div öğesi oluştur ve ana div öğesine ekle 

    konu.forEach((konu)=>{
      const tab = document.createElement("div");
      tab.classList.add("tab");
      tab.textContent = konu;
      anaDiv.appendChild(tab);
    });

    return anaDiv;

  // GÖREV 3
  // ---------------------
  // Tek argümanı bir dizi ("konu") olan bu fonksiyonu uygulayın.
  // Örnek olarak, konu dizisi şu şekilde deklare edilmişse ['javascript', 'bootstrap', 'teknoloji']
  // fonksiyon aşağıdaki şekilde bir DOM öğesi döndürecek.
  // Kullanılan etiketler, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">teknoloji</div>
  // </div>
  //
}

const tabEkleyici = (secici) => {

  const addSelector = document.querySelector(secici);

  axios
  .get("http://localhost:5001/api/konular")
  .then((response) => addSelector.appendChild(Tablar(response.data.konular)))
  .catch((error) =>{
    console.log("HATA" + error)
  })

  // GÖREV 4
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu işlevi uygulayın.
  // Konuları bu uç noktadan almalıdır: `http://localhost:5001/api/konular` (console.log ile test edin!).
  // Yanıtın içindeki konu dizisini bulun ve Tablar bileşenini kullanarak tabları oluşturun.
  // Tabları, fonksiyona iletilen seçiciyle eşleşen DOM'daki öğeye ekleyin.
  //
}

export { Tablar, tabEkleyici }
