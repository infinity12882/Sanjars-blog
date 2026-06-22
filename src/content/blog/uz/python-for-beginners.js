export default `
<p>Python dasturlash tilini o'rganish uchun eng yaxshi til sifatida tanilgan — sababi oddiy: uning sintaksisi deyarli oddiy ingliz tiliga o'xshaydi, lekin shu bilan birga Google, Instagram va Spotify kabi kompaniyalarda ishlab chiqarish tizimlarini ishlatish uchun yetarlicha kuchli. Bu qo'llanma sizga birinchi haqiqiy skriptingizni yozish uchun kerak bo'lgan hamma narsani tushuntiradi.</p>

<h2>Nega aynan Python bilan boshlash kerak</h2>
<p>Kodga qo'l urishdan oldin, nega aynan Python ekanini bilish foydali. Boshlovchilar uchun uchta sabab ajralib turadi:</p>
<ul>
  <li><strong>O'qilishi oson sintaksis</strong> — nuqta-vergul yo'q, qavslar yo'q, struktura indentatsiya (chuqurlik) orqali aniqlanadi.</li>
  <li><strong>Bir til, ko'p sohalar</strong> — bir xil asoslar veb-backend, avtomatlashtirish, ma'lumotlar tahlili va sun'iy intellektga ham tegishli.</li>
  <li><strong>Katta ekotizim</strong> — duch keladigan deyarli har qanday muammoni hal qiluvchi kutubxona allaqachon mavjud.</li>
</ul>

<h2>Muhitni sozlash</h2>
<p>Rasmiy manbadan Python 3.11 yoki undan yangi versiyasini o'rnating, so'ngra terminal orqali tekshiring:</p>
<pre><code>python3 --version</code></pre>
<p>Tahrirlovchi sifatida VS Code + Python kengaytmasi eng ko'p tarqalgan boshlovchi sozlamasi — u sintaksis bo'yash, avtomatik to'ldirish va integratsiyalangan terminalni bir joyda beradi.</p>

<h2>O'zgaruvchilar va asosiy turlar</h2>
<p>Python turlarni avtomatik aniqlaydi, shuning uchun ularni oldindan e'lon qilish shart emas:</p>
<pre><code>name = "Sanjar"
age = 24
is_developer = True
skills = ["Python", "AI", "Telegram botlar"]</code></pre>
<p>Boshida deyarli hamma narsani qamrab oladigan to'rt tur: satrlar (string), butun/o'nlik sonlar, mantiqiy qiymatlar (boolean) va ro'yxatlar (list).</p>

<h2>Boshqaruv tuzilmalari: shartlar va sikllar</h2>
<pre><code>if age >= 18:
    print("Ovoz berish mumkin")
else:
    print("Hali yosh yetmaydi")

for skill in skills:
    print(f"O'rganilayotgan: {skill}")</code></pre>
<p>Ikki nuqta va indentatsiyaga e'tibor bering — bu indentatsiya stil tanlovi emas, aynan shu orqali Python qaysi kod blok ichida ekanini biladi.</p>

<h2>Funksiyalar: birinchi qayta foydalaniladigan qism</h2>
<pre><code>def greet(name):
    return f"Salom, {name}!"

print(greet("Sanjar"))</code></pre>
<p>Funksiya kiritma (input) qabul qiladi, u bilan biror narsa qiladi va (odatda) natija qaytaradi. Kichik funksiyalar yozishga o'rganganingizdan so'ng, siz allaqachon dasturchi kabi fikrlay boshlaysiz.</p>

<h2>Birinchi haqiqiy skript</h2>
<p>Mana asoslarni birlashtiradigan kichik dastur — son topish o'yini:</p>
<pre><code>import random

target = random.randint(1, 100)
attempts = 0

while True:
    guess = int(input("Sonni taxmin qiling (1-100): "))
    attempts += 1
    if guess == target:
        print(f"To'g'ri! Siz {attempts} marta urinib ko'rdingiz.")
        break
    elif guess < target:
        print("Kichikroq.")
    else:
        print("Kattaroq.")</code></pre>

<h2>Keyingi qadamlar</h2>
<p>Ushbu asoslar o'zlashtirilgandan so'ng, keyingi qadamlar: kichik buyruq qatori vositalarini yozish, xato xabarlarini (traceback) qo'rqmasdan o'qishni o'rganish va bitta yo'nalishni tanlash — FastAPI yoki Django bilan veb-dasturlash, avtomatlashtirish skriptlari yoki pandas bilan ma'lumotlar bilan ishlash. Bir yo'nalishda chuqurlik barchasida sayozlikdan ko'proq narsa o'rgatadi.</p>

<h2>Xulosa</h2>
<p>Ko'nikmadagi eng katta sakrash ko'proq o'qishdan kelmaydi — u ko'proq kod yozish, uni buzish va tuzatishdan keladi. Har bir misolni ko'chirib-qo'yish o'rniga o'zingiz qayta yozing va katta foydali narsa yaratishdan oldin kichik, foydasiz narsa yaratib ko'ring.</p>
`;
