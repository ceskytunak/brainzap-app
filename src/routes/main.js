import express from 'express'
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
	console.log('Time: ', Date.now())
	next()
})
// define the home page route
router.get('/', (req, res) => {
	res.render('intro', { title: 'Hey', message: 'Hello there!' })
	// res.send('BrainZap! home page')
})
// define the about route
router.get('/about', (req, res) => {
	res.send('About crwalers')
})
// define the recipes route
router.get('/recipes', (req, res) => {
	res.send('Facebook Crawler')
})

export default router