const Header = (baslik, tarih, yazi) => {
  // ! header div elementini oluştur
const header = document.createElement("div");
header.classList.add("header");

//! date span elementini oluştur ve tarih değerini yazdır ve headere ekle

const date = document.createElement("span");
date.classList.add("date")
date.textContent = tarih;
header.appendChild(date)
//! h1 elementini oluştur ve değerini yaz ve headere ekle

const baslikH1 = document.createElement("h1");
baslikH1.textContent = baslik;
header.appendChild(baslikH1);

// !temp span elementini oluştur ve değerini yaz headere ekle
const temp = document.createElement("span");
temp.classList.add("temp");
temp.textContent = yazi;
header.appendChild(temp);
return header;
  // GÖREV 1
  // ---------------------
  // Bu fonksiyon argüman olarak `baslik`, `tarih` ve `temp` alarak aşağıdaki yapıyı döndürecek.
  // Kullanılan html etiketleri, öğelerin hiyerarşisi ve öznitelikleri sağlanan işaretlemeyle tam olarak eşleşmelidir!
  // Öğelerin içindeki metin, "textContent" özelliği kullanılarak ayarlanacaktır ("innerText" DEĞİL).
  
  //  <div class="header">
  //    <span class="date">{ tarih }</span>
  //    <h1>{ baslik }</h1>
  //    <span class="temp">{ yazi }</span>
  //  </div>
  
}





const headerEkleyici = (secici) => {
  const baslik = "Developer Diaries";
  const tarih = "24 Şubat 2023";
  const yazi = "Bugün çok güzel bir gün";
  
  document.querySelector(secici).appendChild(Header(baslik,tarih,yazi));
  // GÖREV 2
  // ---------------------
  // Tek argümanı olarak bir css seçici alan bu fonksiyonu uygulayın.
  // Görev 1'de tanımladığınız Header bileşenini kullanarak bir header oluşturun (baslik,tarih,yazi parametrelerini kendi isteğinize göre belirleyin)
  // Oluşturulan header'i, verilen seçiciyle eşleşen DOM'daki öğeye eklemelidir.
  //

  // İPUCU: querySelector bir string alabilir (bknz: querySelector("#wrapper")) 
  // fakat aynı zamanda bir değişken de alabilir (bknz: querySelector(secici))
  
}




export { Header, headerEkleyici }
