const fs = require('fs')
const jsonServer = require('json-server')
const path = require('path')

const server = jsonServer.create()
const router = jsonServer.router(path.resolve(__dirname, 'db.json'))

// Middleware для обработки JSON тела запросов
server.use(jsonServer.bodyParser)

// Добавляем заголовки CORS
server.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*')
	res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization')
	if (req.method === 'OPTIONS') {
		return res.status(204).end()
	}
	next()
})

// Искусственная задержка для эмуляции реального API
server.use(async (req, res, next) => {
	await new Promise((res) => {
		setTimeout(res, 800)
	})
	next()
})

// Проверка авторизации (исключая /login)
server.use((req, res, next) => {
	if (req.path === '/login') {
		return next()
	}

	if (!req.headers.authorization) {
		return res.status(403).json({ message: 'AUTH ERROR' })
	}

	next()
})

// Логика авторизации
server.post('/login', (req, res) => {
	// Логируем тело запроса
	console.log('Request body:', req.body)

	const { username, password } = req.body

	// Проверяем, есть ли пользователь в базе данных
	const db = JSON.parse(
		fs.readFileSync(path.resolve(__dirname, 'db.json'), 'utf-8')
	)
	const { users } = db
	const userFromBD = users.find(
		(user) => user.username === username && user.password === password
	)

	if (userFromBD) {
		return res.json(userFromBD)
	}

	return res.status(403).json({ message: 'AUTH ERROR' })
})

// Подключаем стандартные middleware json-server
server.use(jsonServer.defaults())
server.use(router)

// Запуск сервера
server.listen(8000, () => {
	console.log('Server is running on 8000 port')
})
