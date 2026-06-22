export default `
<p>Telegram botlar mijozlarga xizmat ko'rsatish oqimlaridan to to'liq test platformalarigacha hamma narsani boshqaradi — men aynan shu maqolada yoritilgan stack yordamida maxsus javob parserlari va sertifikat generatsiyasiga ega ishlab chiqarish darajasidagi test botini yaratdim. Aiogram 3.x — Python'da bot yaratish uchun eng qobiliyatli async freymvork.</p>

<h2>Nega Bot API'dan to'g'ridan-to'g'ri foydalanish o'rniga Aiogram</h2>
<p>Telegram'ning HTTP API'siga to'g'ridan-to'g'ri murojaat qilish mumkin, lekin Aiogram routing, middleware va holat (state) boshqarishni tayyor holda beradi — aks holda buni o'zingiz qurishingiz kerak bo'lardi. 3.x versiyasi freymvorkni zamonaviy async Python va router-asosli arxitektura atrofida qayta yozdi.</p>

<h2>Loyihani sozlash</h2>
<pre><code>mkdir telegram-bot && cd telegram-bot
python3 -m venv venv
source venv/bin/activate
pip install aiogram python-dotenv</code></pre>
<p>Bot tokeningizni <code>.env</code> faylida saqlang — hech qachon uni kodga hardcode qilmang va versiya nazoratiga (git) yubormang.</p>

<h2>Minimal ishlaydigan bot</h2>
<pre><code>import asyncio
import os
from aiogram import Bot, Dispatcher, types
from aiogram.filters import CommandStart

bot = Bot(token=os.getenv("BOT_TOKEN"))
dp = Dispatcher()

@dp.message(CommandStart())
async def cmd_start(message: types.Message):
    await message.answer("Salom! Men ishlayapman.")

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())</code></pre>

<h2>FSM yordamida holatni boshqarish</h2>
<p>Ko'pchilik haqiqiy botlar foydalanuvchining ko'p bosqichli oqimda qaysi joyda turganini eslab qolishi kerak — ism, keyin email, keyin tasdiqlash. Aiogram'ning Finite State Machine (FSM) tizimi buni toza tarzda hal qiladi:</p>
<pre><code>from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext

class Registration(StatesGroup):
    waiting_for_name = State()
    waiting_for_email = State()

@dp.message(Registration.waiting_for_name)
async def process_name(message: types.Message, state: FSMContext):
    await state.update_data(name=message.text)
    await state.set_state(Registration.waiting_for_email)
    await message.answer("Endi email manzilingizni yuboring:")</code></pre>

<h2>Katta botlar uchun routerlar</h2>
<p>Bot bir nechta handler'dan o'sib chiqgach, bitta fayl boshqarib bo'lmaydigan holga keladi. Aiogram 3.x routerlari handler'larni xususiyat bo'yicha alohida modullarga bo'lish va ularni asosiy dispatcher'ga qo'shish imkonini beradi:</p>
<pre><code>from aiogram import Router

quiz_router = Router()

@quiz_router.message(...)
async def handle_quiz_answer(message: types.Message):
    ...

dp.include_router(quiz_router)</code></pre>

<h2>Ishlab chiqarishdagi keng tarqalgan xatolar</h2>
<ul>
  <li><strong>Handler ichida bloklanuvchi chaqiriqlar</strong> — har qanday sinxron, sekin operatsiya (og'ir fayl I/O, optimallashtirilmagan DB so'rovi) butun botni barcha foydalanuvchilar uchun muzlatib qo'yadi.</li>
  <li><strong>Tashqi chaqiriqlar atrofida xato boshqarish yo'q</strong> — API va ma'lumotlar bazasi chaqiriqlarini try/except bilan o'rang, aks holda bitta yomon so'rov butun polling sikilini to'xtatadi.</li>
  <li><strong>FSM holatini faqat xotirada saqlash</strong> — ishlab chiqarishda Redis-asosli saqlashdan foydalaning, shunda holat qayta ishga tushirishlarda saqlanib qoladi va workerlar bo'ylab kengayadi.</li>
</ul>

<h2>Haqiqiy foydalanish uchun joylashtirish</h2>
<p>Shaxsiy o'yinchoq bot bo'lmagan har qanday narsa uchun uni Docker ichida ishlatish, uzoq polling o'rniga reverse proxy ortida webhook rejimidan foydalanish va FSM saqlashni Redis bilan ta'minlash kerak. Bu xuddi kattaroq tizimlarda — sertifikat generatsiyasiga ega test platformalari yoki vazifa va odat kuzatuvchi mahsuldorlik botlari kabi — ishlatiladigan arxitektura namunasi, faqat ko'proq routerlar va ostida to'g'ri ma'lumotlar bazasi qatlami bilan kengaytirilgan.</p>
`;
