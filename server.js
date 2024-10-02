const jsonServer = require("json-server");
const auth = require("json-server-auth");
const server = jsonServer.create();
const router = jsonServer.router("db.json"); // Указываем путь к файлу db.json
const middlewares = jsonServer.defaults();

// Настройка роутов для авторизации
const rules = auth.rewriter({
  users: 600, // Только авторизованные пользователи могут получить доступ к users
  cars: 660, // Только авторизованные пользователи могут читать и создавать посты
});

// Подключаем middleware и роуты
server.db = router.db
server.use(middlewares); // Стандартные middleware, такие как CORS и логирование
server.use(rules); // Применяем правила безопасности для маршрутов
server.use(auth); // Включаем авторизацию через json-server-auth
server.use(router); // Важно! Подключаем роутер, связанный с базой данных

// Запуск сервера
server.listen(5001, () => {
  console.log("JSON Server is running on port 5001");
});
