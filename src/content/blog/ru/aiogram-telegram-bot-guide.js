export default `
<p>Telegram-боты управляют всем — от сценариев поддержки клиентов до полноценных платформ тестирования: я создал продакшен-бота для тестирования с собственным парсером ответов и генерацией сертификатов именно на стеке, описанном здесь. Aiogram 3.x — самый функциональный асинхронный фреймворк для создания ботов на Python.</p>

<h2>Почему Aiogram, а не чистый Bot API</h2>
<p>Можно обращаться напрямую к HTTP API Telegram, но Aiogram сразу даёт роутинг, middleware и управление состоянием — то, что иначе пришлось бы строить самостоятельно. Версия 3.x переписала фреймворк вокруг современного асинхронного Python и архитектуры на основе роутеров.</p>

<h2>Настройка проекта</h2>
<pre><code>mkdir telegram-bot && cd telegram-bot
python3 -m venv venv
source venv/bin/activate
pip install aiogram python-dotenv</code></pre>
<p>Храните токен бота в файле <code>.env</code> — никогда не прописывайте его в коде и не отправляйте в систему контроля версий.</p>

<h2>Минимальный рабочий бот</h2>
<pre><code>import asyncio
import os
from aiogram import Bot, Dispatcher, types
from aiogram.filters import CommandStart

bot = Bot(token=os.getenv("BOT_TOKEN"))
dp = Dispatcher()

@dp.message(CommandStart())
async def cmd_start(message: types.Message):
    await message.answer("Привет! Я работаю.")

async def main():
    await dp.start_polling(bot)

if __name__ == "__main__":
    asyncio.run(main())</code></pre>

<h2>Управление состоянием через FSM</h2>
<p>Большинству реальных ботов нужно помнить, на каком шаге многоэтапного сценария находится пользователь — сначала имя, потом email, потом подтверждение. Конечный автомат состояний (FSM) в Aiogram решает это аккуратно:</p>
<pre><code>from aiogram.fsm.state import State, StatesGroup
from aiogram.fsm.context import FSMContext

class Registration(StatesGroup):
    waiting_for_name = State()
    waiting_for_email = State()

@dp.message(Registration.waiting_for_name)
async def process_name(message: types.Message, state: FSMContext):
    await state.update_data(name=message.text)
    await state.set_state(Registration.waiting_for_email)
    await message.answer("Теперь отправьте ваш email:")</code></pre>

<h2>Роутеры для крупных ботов</h2>
<p>Когда бот вырастает за пределы нескольких обработчиков, один файл становится неуправляемым. Роутеры Aiogram 3.x позволяют разбить обработчики по функциям на отдельные модули и подключить их к главному диспетчеру:</p>
<pre><code>from aiogram import Router

quiz_router = Router()

@quiz_router.message(...)
async def handle_quiz_answer(message: types.Message):
    ...

dp.include_router(quiz_router)</code></pre>

<h2>Типичные ошибки в продакшене</h2>
<ul>
  <li><strong>Блокирующие вызовы внутри обработчиков</strong> — любая синхронная, медленная операция (тяжёлый файловый I/O, неоптимизированный запрос к БД) замораживает весь бот для всех пользователей.</li>
  <li><strong>Отсутствие обработки ошибок вокруг внешних вызовов</strong> — оборачивайте вызовы API и базы данных в try/except, иначе один плохой запрос остановит весь цикл polling.</li>
  <li><strong>Хранение состояния FSM только в памяти</strong> — используйте хранилище на Redis в продакшене, чтобы состояние сохранялось при перезапусках и масштабировалось между воркерами.</li>
</ul>

<h2>Развёртывание для реального использования</h2>
<p>Для всего, что выходит за рамки личного игрушечного бота: запускайте его в Docker, используйте режим webhook за reverse proxy вместо long polling, и обеспечьте хранение FSM через Redis. Это та же архитектурная схема, что используется в более крупных системах — например, в платформах тестирования с генерацией сертификатов или в продуктивности-ботах с трекингом задач и привычек — просто масштабированная с большим числом роутеров и полноценным слоем базы данных под капотом.</p>
`;
