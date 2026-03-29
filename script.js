document.addEventListener('DOMContentLoaded', () => {
    // Tema Değiştirme Mantığı
    const themeBtn = document.getElementById('theme-toggle');
    const body = document.body;
    
    // LocalStorage'dan tema tercihini kontrol et
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        body.classList.add('dark');
        themeBtn.innerHTML = '☀️ Açık Tema';
    }

    themeBtn.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            localStorage.setItem('theme', 'dark');
            themeBtn.innerHTML = '☀️ Açık Tema';
        } else {
            localStorage.setItem('theme', 'light');
            themeBtn.innerHTML = '🌙 Koyu Tema';
        }
    });

    // Scroll Animasyonları (Intersection Observer)
    const fadeElements = document.querySelectorAll('.fade-in');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Sadece bir kere çalışsın
            }
        });
    }, observerOptions);

    fadeElements.forEach(element => {
        observer.observe(element);
    });
});
// --- 75 SORULUK DEV QUİZ VERİTABANI ---
const quizData = {
    csharp: [
        { q: "1. Metin kutusuna girilen veriyi Label'a aktaran kod hangisidir?", o: ["label1.Text = textBox1.Text;", "textBox1.Text = label1.Text;"], a: 0, f: "Doğru! Atamalar sağdan sola yapılır." },
        { q: "2. Metni 16 bitlik tam sayıya dönüştüren fonksiyon nedir?", o: ["Convert.ToInt32", "Convert.ToInt16"], a: 1, f: "Doğru! 16 bit için ToInt16 kullanılır." },
        { q: "3. Girilen sayının karesini alan işlem hangisidir?", o: ["sonuc = sayi * sayi;", "sonuc = sayi ^ 2;"], a: 0, f: "Doğru! C# form notlarında karesi sayi*sayi olarak alınmıştır." },
        { q: "4. Ekrana küçük bir uyarı penceresi çıkaran komut nedir?", o: ["Console.Write", "MessageBox.Show"], a: 1, f: "Doğru! Windows Forms'ta MessageBox.Show kullanılır." },
        { q: "5. Vize ve Final ortalamasını hesaplarken (not1+not2)/2 işlemi hangi veri tipinde saklanmalıdır?", o: ["int", "double"], a: 1, f: "Doğru! Bölme işlemi ondalıklı çıkabileceği için double kullanılır." },
        { q: "6. ListBox'a yeni bir eleman ekleme kodu hangisidir?", o: ["listBox1.Items.Add", "listBox1.Add"], a: 0, f: "Doğru! Items.Add() metodu kullanılır." },
        { q: "7. ComboBox'a 'Ankara' eklemek için hangi metod kullanılır?", o: ["comboBoxSehir.Insert", "comboBoxSehir.Items.Add"], a: 1, f: "Doğru! ListBox ile aynı şekilde Items.Add kullanılır." },
        { q: "8. Bilet 120TL, Mısır 40TL ise kasa tutarı hesaplaması nasıldır?", o: ["bilet*120 + misir*40", "bilet+120 * misir+40"], a: 0, f: "Doğru! Adet ile fiyat çarpılıp toplanır." },
        { q: "9. Vizenin %30'u ve Finalin %70'i nasıl hesaplanır?", o: ["vize*3/10 + final*7/10", "vize*0.3 + final*0.7"], a: 0, f: "Doğru! PDF'teki birebir formül vize*3/10 şeklindedir." },
        { q: "10. Geçme notunun 60 olduğu sistemde kontrol şartı nedir?", o: ["if(sonuc > 59)", "if(sonuc >= 59)"], a: 0, f: "Doğru! 59'dan büyükse (yani 60 ve üstüyse) geçer." },
        { q: "11. Hem 3'ten büyük eşit hem 20'den küçük eşit olma şartı (Ve operatörü) nasıl yazılır?", o: ["Adet >= 3 && Adet <= 20", "Adet >= 3 || Adet <= 20"], a: 0, f: "Doğru! '&&' Ve operatörüdür." },
        { q: "12. %20 indirim uygulayan matematiksel işlem formülü hangisidir?", o: ["Adet * fiyat * 0.2", "Adet * fiyat * 0.8"], a: 0, f: "Doğru! İndirim miktarını bulmak için 0.2 ile çarpılır." },
        { q: "13. Integer olarak tanımlanmış bir fiyat sabitine nasıl değer atanır?", o: ["int fiyat = 25;", "fiyat == 25;"], a: 0, f: "Doğru! Atama operatörü tek eşittir (=)." },
        { q: "14. Quiz uygulamasında soruyu bir artırmak için ne kullanılır?", o: ["soruNo++", "soruNo+1"], a: 0, f: "Doğru! Artırma operatörü ++'dır." },
        { q: "15. Doğru simgesini (pictureBoxTrue) ekrandan gizleyen kod hangisidir?", o: ["pictureBoxTrue.Visible = false;", "pictureBoxTrue.Hide = true;"], a: 0, f: "Doğru! Görünürlük Visible özelliği ile kontrol edilir." },
        { q: "16. Yanlış butonunu tıklanamaz (pasif) hale getiren kod hangisidir?", o: ["btnYanlis.Enabled = false;", "btnYanlis.Active = false;"], a: 0, f: "Doğru! Enabled = false butonu pasifleştirir." },
        { q: "17. Mod alma işleminde 'sayi'nin 'i'ye tam bölündüğünü kontrol eden şart nedir?", o: ["sayi / i == 0", "sayi % i == 0"], a: 1, f: "Doğru! Mod operatörü (%) kalanı verir, kalan 0 ise tam bölünür." },
        { q: "18. Bölenleri bulma işleminde kullanılan döngü hangisidir?", o: ["for", "while"], a: 0, f: "Doğru! PDF'te for(int i=1; i<=sayi; i++) kullanılmıştır." },
        { q: "19. Formun arka plan rengini Sarı yapan kod hangisidir?", o: ["this.BackColor = Color.Yellow;", "form1.Color = Yellow;"], a: 0, f: "Doğru! this.BackColor formun kendi rengini değiştirir." },
        { q: "20. Timer (Zamanlayıcı) nesnesinin çalışan metodunun adı nedir?", o: ["timer1_Start", "timer1_Tick"], a: 1, f: "Doğru! Timer her saniyede Tick olayını tetikler." },
        { q: "21. Dijital saat uygulamasında dakikayı artırmak için hangi kontrol yapılır?", o: ["if (saniye == 60)", "if (saniye > 59)"], a: 0, f: "Doğru! PDF'te if(saniye == 60) şartı kullanılmıştır." },
        { q: "22. Sayısal bir değişkeni Label'a yazdırırken metne çeviren metod nedir?", o: ["ToString()", "ToText()"], a: 0, f: "Doğru! ToString() metodu sayıları metne çevirir." },
        { q: "23. Form ilk açıldığında çalışan olay (event) hangisidir?", o: ["Form1_Load", "Form1_Start"], a: 0, f: "Doğru! Load olayı form yüklenirken çalışır." },
        { q: "24. C#'ta metin ve sayıları birleştirmek için hangi işaret kullanılır?", o: ["&", "+"], a: 1, f: "Doğru! + operatörü C#'ta birleştirme yapar." },
        { q: "25. Sayacı sıfırlamak için yazılması gereken kod hangisidir?", o: ["sayac = 0;", "sayac == 0;"], a: 0, f: "Doğru! Atama için = kullanılır." }
    ],
    php: [
        { q: "1. İnternet üzerinden erişilen sayfa ve uygulamaların genel adı nedir?", o: ["Web", "DNS"], a: 0, f: "Doğru! Web genel addır." },
        { q: "2. Kullanıcının gördüğü kısım olan HTML ve CSS hangi yüze aittir?", o: ["Backend", "Frontend"], a: 1, f: "Doğru! Ön yüz Frontend'dir." },
        { q: "3. Sunucuda çalışan ve iş mantığını yürüten kısım neresidir?", o: ["Backend", "Frontend"], a: 0, f: "Doğru! Arka yüz Backend'dir." },
        { q: "4. İçinde Apache, PHP ve MySQL barındıran yerel sunucu paketi nedir?", o: ["XAMPP", "DNS"], a: 0, f: "Doğru! XAMPP yerel sunucu paketidir." },
        { q: "5. PHP'nin çalışma mantığına göre kodlar nerede yorumlanır?", o: ["Tarayıcıda", "Sunucuda"], a: 1, f: "Doğru! PHP sunucu taraflı bir dildir." },
        { q: "6. PHP kodları hangi etiketler arasına yazılır?", o: ["<php ... />", "<?php ... ?>"], a: 1, f: "Doğru! Soru işareti ile açılıp kapatılır." },
        { q: "7. PHP'de ekrana yazdırmak için kullanılan, print'ten daha hızlı komut hangisidir?", o: ["echo", "display"], a: 0, f: "Doğru! Echo daha hızlıdır ve değer döndürmez." },
        { q: "8. Başarılıysa 1 değerini döndüren yazdırma komutu hangisidir?", o: ["print", "echo"], a: 0, f: "Doğru! Print başarılıysa 1 döndürür." },
        { q: "9. PHP'de tek satırlık yorumlar için hangi işaret kullanılır?", o: ["//", "/*"], a: 0, f: "Doğru! // tek satır içindir." },
        { q: "10. PHP'de değişkenler hangi işaret ile başlar?", o: ["#", "$"], a: 1, f: "Doğru! Her değişken $ ile başlamak zorundadır." },
        { q: "11. Aşağıdaki değişken tanımlamalarından hangisi YANLIŞTIR?", o: ["$1sayi", "$sayi1"], a: 0, f: "Doğru! Değişkenler rakamla başlayamaz." },
        { q: "12. Ondalıksız, düz tam sayı veri tipi hangisidir?", o: ["Integer", "Float"], a: 0, f: "Doğru! Integer tam sayıdır." },
        { q: "13. PHP'de ondalıklı sayılar (Float) yazılırken hangi noktalama işareti kullanılır?", o: ["Nokta (.)", "Virgül (,)"], a: 0, f: "Doğru! Virgül yerine nokta kullanılır." },
        { q: "14. Metinsel ifadelerin (String) yazıldığı işaret hangisidir?", o: ["Tırnak işareti (' ' veya \" \")", "Parantez ( )"], a: 0, f: "Doğru! Stringler tırnak içinde yazılır." },
        { q: "15. Birden fazla bilgiyi numaralarla (index) saklayan veri tipi nedir?", o: ["Sabit (Define)", "Dizi (Array)"], a: 1, f: "Doğru! Diziler apartman daireleri gibi index mantığıyla çalışır." },
        { q: "16. Program boyunca değişmeyen değerler olan Sabitler nasıl tanımlanır?", o: ["define()", "$sabit"], a: 0, f: "Doğru! Sabitler define() ile tanımlanır ve $ işareti almaz." },
        { q: "17. PHP'de iki metni birbirine yapıştırmak (birleştirmek) için hangi operatör kullanılır?", o: ["Artı (+)", "Nokta (.)"], a: 1, f: "Doğru! PHP'de birleştirme operatörü noktadır." },
        { q: "18. Bölme işleminden kalanı veren (mod) operatörü hangisidir?", o: ["%", "/"], a: 0, f: "Doğru! % işareti mod operatörüdür." },
        { q: "19. Eşit değil mi? sorgusu için != dışında kullanılan diğer sembol nedir?", o: ["<>", "=="], a: 0, f: "Doğru! != ve <> aynı anlama gelir." },
        { q: "20. İki şartın da doğru olmasını zorunlu kılan 'Ve' (And) operatörü hangisidir?", o: ["||", "&&"], a: 1, f: "Doğru! && operatörü kullanılır." },
        { q: "21. Doğruyu yanlış, yanlışı doğru yapan Değil operatörü nedir?", o: ["!", "?"], a: 0, f: "Doğru! Ünlem işareti tam zıttını kontrol eder." },
        { q: "22. '$a=8; echo $a++;' kodunun ekran çıktısı nedir?", o: ["9", "8"], a: 1, f: "Doğru! Sonra arttırma ($a++) önce mevcut değeri kullanır, ekrana 8 yazar." },
        { q: "23. '$a=8; echo ++$a;' kodunun ekran çıktısı nedir?", o: ["9", "8"], a: 0, f: "Doğru! Önce arttırma (++$a) sayıyı artırır ve ekrana 9 yazar." },
        { q: "24. Bir değişkenin tanımlı ve içinin dolu olduğunu kontrol eden fonksiyon nedir?", o: ["empty()", "isset()"], a: 1, f: "Doğru! Isset varlık kontrolü yapar." },
        { q: "25. 'koşul ? doğruysa : yanlışsa' şeklinde kullanılan yapı nedir?", o: ["If - Else", "Kısa Koşul Operatörü"], a: 1, f: "Doğru! Soru işareti ile kurulan yapı kısa koşul (ternary) operatörüdür." }
    ],
    hardware: [
        { q: "1. Bilgisayarın görevlerini yerine getirmesini sağlayan komut listelerinin genel adı nedir?", o: ["Donanım", "Yazılım"], a: 1, f: "Doğru! Tüm fiziksel olmayan programlara yazılım denir." },
        { q: "2. Bilgisayarın tüm fiziksel birimlerine ne ad verilir?", o: ["Donanım", "Sistem"], a: 0, f: "Doğru! Fiziksel parçaların tamamı donanımdır." },
        { q: "3. Aynı anda 100'den fazla kullanıcının iş yükünü kaldıran bilgisayar türü hangisidir?", o: ["Mikro bilgisayar", "Ana bilgisayar"], a: 1, f: "Doğru! Ana bilgisayarlar (Mainframe) çok kullanıcılıdır." },
        { q: "4. MÖ 500 civarında Çin'de kullanılan ilk mekanik hesaplama aracı nedir?", o: ["Abaküs", "Pascaline"], a: 0, f: "Doğru! Abaküs bilinen ilk mekanik araçtır." },
        { q: "5. 1642'de Blaise Pascal tarafından icat edilen mekanik hesap makinesi nedir?", o: ["Fark Motoru", "Pascaline"], a: 1, f: "Doğru! Aritmometre olarak da bilinen cihaz Pascaline'dir." },
        { q: "6. Dünyanın ilk genel amaçlı elektronik dijital bilgisayarı (1945) hangisidir?", o: ["ENIAC", "UNIVAC"], a: 0, f: "Doğru! ENIAC oda büyüklüğündeki ilk elektronik bilgisayardır." },
        { q: "7. İlk ticari olarak temin edilebilen (1951) elektronik bilgisayar hangisidir?", o: ["UNIVAC", "CSIRAC"], a: 0, f: "Doğru! UNIVAC ilk ticari bilgisayardır." },
        { q: "8. Bilgisayar donanım bileşenlerinin birbiriyle haberleşmesini sağlayan temel kart nedir?", o: ["İşlemci", "Anakart"], a: 1, f: "Doğru! Anakart merkezi iletişim yapısıdır." },
        { q: "9. Yüksek performans (Oyun/Madencilik) gerektiren sistemler için en uygun anakart boyutu hangisidir?", o: ["Mini-ITX", "E-ATX"], a: 1, f: "Doğru! E-ATX geniş donanım destekler." },
        { q: "10. İşlemci, RAM ve PCI-E gibi yüksek hızlı birimlerin iletişimini anakartta hangi yonga sağlar?", o: ["Güney Köprüsü", "Kuzey Köprüsü"], a: 1, f: "Doğru! Kuzey Köprüsü yüksek hızlı iletişimi yönetir." },
        { q: "11. Noktadan noktaya seri bağlantı mimarisini kullanan yüksek hızlı veri yolu hangisidir?", o: ["PCI Express (PCI-E)", "ISA"], a: 0, f: "Doğru! PCI-E güncel seri veri yoludur." },
        { q: "12. 1971'de Busicom hesap makinesinde kullanılan bilinen ilk mikroişlemci hangisidir?", o: ["UNIVAC 1103", "Intel 4004"], a: 1, f: "Doğru! İlk mikroişlemci Intel 4004'tür." },
        { q: "13. Toplama, çıkarma, ve, veya gibi işlemleri gerçekleştiren CPU bileşeni nedir?", o: ["Kontrol Birimi", "ALU (Aritmetik Mantık Birimi)"], a: 1, f: "Doğru! ALU matematiksel ve mantıksal işlemleri yapar." },
        { q: "14. Getirme (fetch), kod çözme (decode) ve yürütme (execute) işlemlerini hangi birim yapar?", o: ["Kontrol Birimi", "Kaydediciler"], a: 0, f: "Doğru! Kontrol birimi komutları yönetir." },
        { q: "15. CPU'ya en yakın ve en hızlı olan, CPU içindeki küçük bellekler nelerdir?", o: ["Kaydediciler (Registers)", "SRAM"], a: 0, f: "Doğru! Hiyerarşinin en tepesinde Kaydediciler bulunur." },
        { q: "16. Çalışma hızındaki uyumsuzluğu azaltmak için CPU ile ana bellek arasındaki bellek nedir?", o: ["Hard Disk", "Önbellek (Cache)"], a: 1, f: "Doğru! L1, L2, L3 olmak üzere önbellekler bu işi yapar." },
        { q: "17. Bilgisayar kapatıldığında içindeki verileri silinen (Geçici) bellek türü hangisidir?", o: ["ROM", "RAM"], a: 1, f: "Doğru! RAM (Random Access Memory) geçici bellektir." },
        { q: "18. Üretim aşamasında yazılan, sadece okunabilen kalıcı bellek türü nedir?", o: ["ROM", "DRAM"], a: 0, f: "Doğru! ROM (Read Only Memory) salt okunurdur." },
        { q: "19. Manyetik parçacıklar yerine elektronik bellek yongaları kullanan, HDD'den hızlı depolama aygıtı nedir?", o: ["SSD", "Optik Disk"], a: 0, f: "Doğru! Katı Hal Sürücüleri (SSD) çok daha hızlıdır." },
        { q: "20. Sadece 0 ve 1 değerini alabilen en küçük bellek birimi nedir?", o: ["Bit", "Byte"], a: 0, f: "Doğru! Bit en küçük birimdir." },
        { q: "21. 8 adet bitin bir araya gelmesiyle oluşan veri birimi nedir?", o: ["KiloByte", "Byte (Bayt)"], a: 1, f: "Doğru! 1 Byte = 8 Bit'tir." },
        { q: "22. 1024 Megabyte (MB) neye eşittir?", o: ["1 GigaByte (GB)", "1 TeraByte (TB)"], a: 0, f: "Doğru! Bilgisayarlar 1024'er kat artar, 1024MB = 1GB." },
        { q: "23. İkilik sayı sisteminde (Binary) 1 + 1 toplama işleminin sonucu kaçtır?", o: ["10 (Elde 1, Toplam 0)", "2"], a: 0, f: "Doğru! Binary sistemde 2 rakamı olmadığı için 1+1=10'dur." },
        { q: "24. İkili sistemde çıkarma işlemi yaparken bilgisayarların kullandığı 'Tersini alıp 1 ekleme' metodunun adı nedir?", o: ["Doğrudan çıkarma", "2'ye Tümleyen Metodu"], a: 1, f: "Doğru! Bilgisayarlar çıkarma için 2's Complement kullanır." },
        { q: "25. Onaltılık (Hexadecimal) sayı sisteminde 10 sayısı hangi harfle temsil edilir?", o: ["C", "A"], a: 1, f: "Doğru! 10=A, 11=B, 12=C şeklinde ilerler." }
    ]
};

// Quiz Render Fonksiyonu
document.addEventListener('DOMContentLoaded', () => {
    const quizContainers = document.querySelectorAll('.quiz-app-container');
    
    quizContainers.forEach(container => {
        const quizType = container.getAttribute('data-quiz');
        const contentDiv = container.querySelector('.quiz-dynamic-content');
        const questions = quizData[quizType];
        
        let htmlContent = '';
        
        questions.forEach((qObj, index) => {
            htmlContent += `
                <div class="quiz-question-block" id="q-${quizType}-${index}">
                    <div class="quiz-question-text">${qObj.q}</div>
                    <button class="quiz-btn" onclick="checkDinamikAnswer(this, 0, ${qObj.a}, '${qObj.f}')">A) ${qObj.o[0]}</button>
                    <button class="quiz-btn" onclick="checkDinamikAnswer(this, 1, ${qObj.a}, '${qObj.f}')">B) ${qObj.o[1]}</button>
                    <div class="quiz-feedback"></div>
                </div>
            `;
        });
        
        contentDiv.innerHTML = htmlContent;
    });
});

// Cevap Kontrol Fonksiyonu
function checkDinamikAnswer(btn, selectedIndex, correctIndex, feedbackText) {
    const parent = btn.parentElement;
    const buttons = parent.querySelectorAll('.quiz-btn');
    const feedbackBox = parent.querySelector('.quiz-feedback');
    
    // Tüm butonları pasifleştir
    buttons.forEach(b => {
        b.disabled = true;
        b.style.opacity = '0.6';
    });
    
    btn.style.opacity = '1';
    feedbackBox.style.display = 'block';
    
    if (selectedIndex === correctIndex) {
        btn.classList.add('correct-btn');
        feedbackBox.innerHTML = `✅ ${feedbackText}`;
        feedbackBox.style.color = "#2ecc71";
        feedbackBox.style.background = "rgba(46, 204, 113, 0.1)";
    } else {
        btn.classList.add('wrong-btn');
        feedbackBox.innerHTML = `❌ Yanlış! ${feedbackText}`;
        feedbackBox.style.color = "#e74c3c";
        feedbackBox.style.background = "rgba(231, 76, 60, 0.1)";
        
        // Doğru cevabı da yeşil yak
        buttons[correctIndex].classList.add('correct-btn');
        buttons[correctIndex].style.opacity = '1';
    }
}
// --- SUPABASE GLOBAL NOT SİSTEMİ ---

// DİKKAT: Kendi Supabase URL ve API Anahtarını buraya gir!
const SUPABASE_URL = 'https://jjcutldbufhdeyiagfsi.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_ocW12Oypd4FAJR9qzR9-Wg_bF1mo-eC';

const supabase = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 1. Sayfa yüklendiğinde tüm not bölümlerini bul ve verileri Supabase'den çek
document.addEventListener('DOMContentLoaded', () => {
    const noteSections = document.querySelectorAll('.notes-section');
    noteSections.forEach(section => {
        const lesson = section.getAttribute('data-lesson');
        getNotes(lesson);
    });
});

// 2. Yeni Not Ekleme Fonksiyonu
async function addNote(lesson, buttonElement) {
    const section = buttonElement.closest('.notes-section');
    const inputElement = section.querySelector('.note-input');
    const content = inputElement.value.trim();

    if (!content) {
        alert("Lütfen göndermeden önce bir not yazın.");
        return;
    }

    // Gönderim sırasında butonu pasifleştir (Çift tıklamayı önler)
    buttonElement.disabled = true;
    buttonElement.innerHTML = "Gönderiliyor... ⏳";

    // Supabase veritabanına ekleme işlemi
    const { data, error } = await supabase
        .from('notes')
        .insert([{ lesson: lesson, content: content }]);

    if (error) {
        console.error("Not eklenirken hata:", error);
        alert("Not eklenemedi! Lütfen veritabanı bağlantınızı kontrol edin.");
    } else {
        // Başarılı olursa input'u temizle ve o dersin notlarını yeniden yükle
        inputElement.value = "";
        getNotes(lesson);
    }
    
    // Butonu tekrar aktif et
    buttonElement.disabled = false;
    buttonElement.innerHTML = "Gönder";
}

// 3. Notları Çekme ve HTML'e Yazdırma Fonksiyonu
async function getNotes(lesson) {
    const listContainer = document.getElementById(`notes-list-${lesson}`);
    listContainer.innerHTML = "<p style='color: var(--secondary-color);'>Notlar yükleniyor... 🔄</p>";

    // Supabase'den ilgili derse (lesson) ait notları tarihe göre (en yeni en üstte) çek
    const { data, error } = await supabase
        .from('notes')
        .select('*')
        .eq('lesson', lesson)
        .order('created_at', { ascending: false });

    if (error) {
        console.error("Notlar çekilirken hata:", error);
        listContainer.innerHTML = "<p style='color: #e74c3c;'>Notlar yüklenirken bir sorun oluştu.</p>";
        return;
    }

    if (data.length === 0) {
        listContainer.innerHTML = "<p style='color: var(--secondary-color);'>Bu ders için henüz not eklenmemiş. İlk notu sen paylaş!</p>";
        return;
    }

    // Gelen verileri döngüye sokup HTML kartlarına dönüştür
    let htmlContent = "";
    data.forEach(note => {
        // Tarih formatını Türkiye saatine (TR) göre düzenle
        const dateString = new Date(note.created_at).toLocaleString('tr-TR', {
            year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute:'2-digit'
        });
        
        htmlContent += `
            <div class="note-card">
                <span class="note-date">🕒 ${dateString}</span>
                <div class="note-content">${note.content}</div>
            </div>
        `;
    });

    // Hazırlanan HTML'i ekrana bas
    listContainer.innerHTML = htmlContent;
}