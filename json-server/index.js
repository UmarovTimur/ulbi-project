import jsonServer from 'json-server';
import { readFileSync } from 'fs';
import { resolve } from 'path';
import { fileURLToPath } from 'url';

// В версии 0.17.4 импортируем всё из дефолтного экспорта
const { create, router: _router, defaults, bodyParser } = jsonServer;

const __dirname = resolve(fileURLToPath(import.meta.url), '..');
const dbPath = resolve(__dirname, 'db.json');

const server = create();
const router = _router(dbPath);

// 1. Стандартные настройки (логгер, статика)
server.use(defaults());

// 2. Обязательно для работы POST запросов и req.body
server.use(bodyParser);

// 3. Имитация задержки
server.use(async (req, res, next) => {
  // eslint-disable-next-line no-undef
  await new Promise((res) => setTimeout(res, 800));
  next();
});

// 4. Эндпоинт для логина (ДОЛЖЕН БЫТЬ ВЫШЕ ПРОВЕРКИ АВТОРИЗАЦИИ)
server.post('/login', (req, res) => {
  try {
    const { username, password } = req.body;

    // Читаем БД из файла
    const db = JSON.parse(readFileSync(dbPath, 'UTF-8'));
    const { users = [] } = db;

    const userFromBd = users.find(
      (user) => user.username === username && user.password === password,
    );

    if (userFromBd) {
      // Возвращаем пользователя (без пароля для безопасности)
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...userWithoutPassword } = userFromBd;
      return res.json(userWithoutPassword);
    }

    return res.status(403).json({ message: 'User not found' });
  } catch (e) {
    // eslint-disable-next-line no-undef
    console.error(e);
    return res.status(500).json({ message: e.message });
  }
});

// 5. Проверка авторизации (Middleware)
server.use((req, res, next) => {
  // Разрешаем логин без заголовка Authorization
  if (req.path === '/login') {
    return next();
  }

  // Для всех остальных запросов требуем токен
  if (!req.headers.authorization) {
    return res.status(403).json({ message: 'AUTH ERROR' });
  }

  next();
});

// 6. Основной роутер json-server (ДОЛЖЕН БЫТЬ ПОСЛЕДНИМ)
server.use(router);

// Запуск
const PORT = 8000;
server.listen(PORT, () => {
  // eslint-disable-next-line no-undef
  console.log(`JSON Server (v0.17.4) is running on port ${PORT}`);
});