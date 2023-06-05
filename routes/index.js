const { Router } = require("express"); //импорт метода роут из библиотеки экспрес 
const router = Router(); // присваиваем этот метод новой переменной 

// Загружаем промежуточный обработчик уровня маршрутизатора с помощью функций router.use()

router.use( require("./auth.route.js"));
// router.use("/news", require("./news.route"));
// router.use("/comments", require("./comments.route"));
// router.use("/users", require("./users.route"));

module.exports = router; // экспортируем маршруты 
