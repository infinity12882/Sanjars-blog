export default `
<p>Xavfsizlik funksiya ishlagandan keyin qo'shiladigan alohida bosqich emas — bu funksiyani dastlab qanday yozish xususiyatidir. Mana har bir backend dasturchisi til yoki freymvorkdan qat'i nazar muhokama qilinmaydigan deb hisoblashi kerak bo'lgan asoslar.</p>

<h2>SQL-injection: hali ham eng keng tarqalgan, oldini olish mumkin bo'lgan xato</h2>
<p>Hech qachon foydalanuvchi kiritmasini to'g'ridan-to'g'ri satrga birlashtirib SQL so'rovlarini qurmang. Bu backend kodidagi eng keng tarqalgan, oldini olish mumkin bo'lgan zaiflikdir:</p>
<pre><code># Xavfli — hech qachon bunday qilmang
query = f"SELECT * FROM users WHERE email = '{user_input}'"

# Xavfsiz — parametrlashtirilgan so'rov
cursor.execute("SELECT * FROM users WHERE email = %s", (user_input,))</code></pre>
<p>Har bir zamonaviy ma'lumotlar bazasi drayveri parametrlashtirilgan so'rovlarni qo'llab-quvvatlaydi. Ularni o'tkazib yuborish uchun hech qanday qonuniy sabab yo'q.</p>

<h2>Cross-Site Scripting (XSS)</h2>
<p>Agar ilovangiz foydalanuvchi yuborgan kontentni sahifaga qaytarib chiqarsa, lekin uni "escape" qilmasa, hujumchi boshqa foydalanuvchining brauzerida ishlaydigan skript kiritishi mumkin — sessiya cookie'larini o'g'irlash, foydalanuvchilarni boshqa joyga yo'naltirish yoki ular ko'rayotgan narsani sezdirmasdan o'zgartirish. Chiqishni har doim avtomatik escape qiling va har qanday shablon dvigatelining "raw HTML" opsiyasini kamdan-kam va ataylab murojaat qilinadigan narsa deb hisoblang, hech qachon standart sifatida emas.</p>

<h2>Parollarni saqlash</h2>
<p>Hech qachon parollarni ochiq matn (plaintext) holatida saqlamang va parollarni saqlash uchun MD5 yoki SHA-256 kabi tez umumiy xeshlardan yolg'iz foydalanmang — ular tezlik uchun yaratilgan, bu esa aynan bu yerda noto'g'ri xususiyat. Sekin, maxsus maqsadli algoritmdan foydalaning:</p>
<pre><code>from werkzeug.security import generate_password_hash, check_password_hash

hashed = generate_password_hash("user_password")
is_valid = check_password_hash(hashed, "user_password")</code></pre>
<p>Bcrypt, Argon2 va scrypt maxsus hisoblash jihatidan qimmat bo'lishi uchun yaratilgan, bu esa sizib chiqgan ma'lumotlar bazasini bruteforce qilishni amaliy jihatdan imkonsiz qiladi.</p>

<h2>Maxfiy ma'lumotlarni boshqarish</h2>
<p>API kalitlari, ma'lumotlar bazasi hisob ma'lumotlari va tokenlar hech qachon manba kodida ko'rinmasligi va versiya nazoratiga yuborilmasligi kerak. Muhit o'zgaruvchilaridan foydalaning, ularni development bosqichida <code>python-dotenv</code> kabi kutubxona bilan yuklang va ishlab chiqarishda to'g'ri maxfiy ma'lumotlar menejeridan foydalaning. <code>.env</code> faylini har bir loyihaning birinchi kunida <code>.gitignore</code>ga qo'shing — birinchi sizib chiqishdan keyin emas.</p>

<h2>Chegarada kiritmani tekshirish</h2>
<p>Tizimingizdan tashqaridan keladigan hamma narsani — forma maydonlari, so'rov parametrlari, fayl yuklashlari, webhook payload'lari — biznes mantiqi ichida emas, balki u ilovangizga kirgan nuqtada tekshiring va tozalang. Pydantic kabi kutubxonalar bu ishni Python'da deyarli bepul qiladi:</p>
<pre><code>from pydantic import BaseModel, EmailStr

class UserInput(BaseModel):
    email: EmailStr
    age: int</code></pre>

<h2>Tezlikni cheklash va suiiste'molning oldini olish</h2>
<p>Har qanday ochiq endpoint — kirish formasi, aloqa formasi, API yo'li — tezlik cheklovi (rate limit) talab qiladi, aks holda u oxir-oqibat avtomatlashtirilgan suiiste'molga uchraydi: hisob ma'lumotlarini to'qish, spam yuborish yoki oddiy xizmatdan voz kechishga undash (DoS) urinishlari. Bu kichik shaxsiy loyihaning aloqa formasiga ham, korporativ infratuzilmaga ham bir xil darajada tegishli.</p>

<h2>Amaliy yondashuv</h2>
<p>Real dunyodagi buzilishlarning katta qismini tashkil etuvchi zaifliklarning oldini olish uchun xavfsizlik mutaxassisi bo'lish kerak emas. Parametrlashtirilgan so'rovlar, escape qilingan chiqish, to'g'ri xeshlangan parollar, manba kodidan tashqarida saqlangan maxfiy ma'lumotlar va chegarada tekshirilgan kiritma — faqat shu besh odat hujumchilar haqiqatda foydalanadigan narsalarning ko'pini yo'q qiladi.</p>
`;
