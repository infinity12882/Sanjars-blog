export default `
<p>MySQL dunyodagi ishlab chiqarish ilovalarining katta qismini boshqaradi va odamlar "ma'lumotlar bazasi"ni ayblaydigan ko'pchilik unumdorlik muammolari aslida oldini olish mumkin bo'lgan bir nechta xatolarga bog'liq. Loyiha o'yinchoq sxemadan o'tgandan keyin nima muhim bo'lishini ko'rib chiqamiz.</p>

<h2>Indekslash: eng yuqori samarali o'zgarish</h2>
<p>Indekssiz MySQL so'rovni qondirish uchun jadvaldagi har bir qatorni skanerlaydi. Tez-tez filtrlash yoki birlashtirish (join) uchun ishlatiladigan har qanday ustunga indeks qo'shing:</p>
<pre><code>CREATE INDEX idx_users_email ON users(email);</code></pre>
<p>Shu bilan birga, indekslar bepul emas — ular o'qishni tezlashtiradi, lekin yozishni sekinlashtiradi va disk maydonini egallaydi. So'rovlaringiz haqiqatda bog'liq bo'lgan ustunlarni indekslang, kelajakda qidirishingiz mumkin bo'lgan har bir ustunni emas.</p>

<h2>Normalizatsiya va uni qachon buzish kerak</h2>
<p>Normalizatsiyalangan sxemalar ma'lumotlarning takrorlanishidan saqlanadi va ma'lumotlaringizni izchil saqlaydi — foydalanuvchining email manzili faqat bitta joyda yashaydi. Lekin qattiq normalizatsiya o'qish og'irlikdagi yo'llarda qimmat join'larni anglatishi mumkin. Yuqori trafikli hisobot so'rovlari uchun nazorat qilingan denormalizatsiya — masalan, har safar join'dan qayta hisoblash o'rniga oldindan hisoblangan summani saqlash — xato emas, balki qonuniy kelishuvdir.</p>

<h2>EXPLAIN natijasini o'qish</h2>
<p>Har qanday sekin so'rovni optimallashtirishdan oldin, MySQL'dan uni qanday ishga tushirishni rejalashtirayotganini so'rang:</p>
<pre><code>EXPLAIN SELECT * FROM orders WHERE customer_id = 42;</code></pre>
<p>Ayniqsa <code>type</code> ustuniga e'tibor bering — <code>ALL</code> to'liq jadval skanerlashini anglatadi, bu sizga kerakli joyda indeks yo'qligining belgisi.</p>

<h2>Ulanishlar puli (connection pooling)</h2>
<p>Har bir so'rov uchun yangi ma'lumotlar bazasi ulanishini ochish qimmat va kichik miqdordagi bir vaqtda ishlovchi foydalanuvchilardan o'tib ketganda kengaymaydi. Ulanishlar pulidan foydalaning — ko'pchilik freymvork va ORM'lar (SQLAlchemy, Django ORM) buni tabiiy qo'llab-quvvatlaydi — shunda ulanishlar doimo qaytadan yaratilmasdan, qayta ishlatiladi.</p>

<h2>Zaxira nusxalar ixtiyoriy emas</h2>
<p>Avtomatlashtirilgan zaxira nusxalarsiz ishlab chiqarish ma'lumotlar bazasi — bu ma'lumot yo'qotish savol emas, balki vaqt masalasi: yomon migratsiya, xato yoki uskuna nosozligi tufayli. Eng kamida: ma'lumotlar bazasi serverining o'zidan alohida joyda saqlanadigan avtomatlashtirilgan kunlik zaxira nusxalar, va tiklash jarayoni haqiqatan kerak bo'lishidan oldin kamida bir marta sinab ko'rilgan bo'lishi kerak.</p>

<h2>N+1 so'rov muammosidan saqlanish</h2>
<p>Bu eng keng tarqalgan, sezilmaydigan unumdorlikni o'ldiruvchi muammolardan biri: yozuvlar ro'yxatini olish, keyin ular bo'ylab aylanib, har bir element uchun bog'liq ma'lumotni olish uchun alohida so'rov ishga tushirish. 100 ta buyurtma ro'yxati har bir mijozni olish uchun 100 ta qo'shimcha so'rovni ishga tushirmasligi kerak — bog'liq ma'lumotni bitta join yoki bitta to'plamlashtirilgan so'rov orqali oling.</p>

<h2>Amaliy tekshirish ro'yxati</h2>
<p>Har qanday ishlab chiqarish MySQL sozlamasi uchun: tashqi kalitlar va tez-tez filtrlanadigan ustunlarni indekslang, ko'r-ko'rona optimallashtirishdan oldin EXPLAIN'ni o'qing, ulanishlar pulidan foydalaning, zaxira nusxalarni avtomatlashtiring va haqiqatan sinab ko'ring, ilovangizning so'rov soni o'sib borishi bilan N+1 namunalarini kuzatib boring. Bu odatlar har qanday bitta murakkab optimallashtirish texnikasidan ko'ra muhimroq.</p>
`;
