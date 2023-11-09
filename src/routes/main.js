import express from 'express'
const router = express.Router()

// middleware that is specific to this router
router.use((req, res, next) => {
	console.log('Time: ', Date.now())
	next()
})
// define the home page route
router.get('/', (req, res) => {
	res.render('intro', { title: 'BrainZap!', message: 'Upbrain your day!' })
	// res.send('BrainZap! home page')
})
// define the about route
router.get('/about', (req, res) => {
	const message = `
	<p>BrainZap! is an open source food supplement designed to boost your productivity. BrainZap! is made from a fine-tuned selection of herbs, vitamins, and caffeine, and can be made easily at home from comercially available ingrediences and with 3d printed accessories.</p>

	<p>This website provides everything you need to make BrainZap!, from the recipe to 3D printed capsule fillers and pill boxes. It also includes pill box vignette with safety instructions, and resources for DIY food supplement creators.</p>

	<p>We encourage you to contribute to this project by sharing your own recipe variants, user feedback, 3D models, and visual material. We also want to help other DIY food supplement creators, so please don't hesitate to reach out if you have any questions or need assistance.</p>
`
	res.render('about', { title: 'BrainZap!', message: message})
	
})
// define the recipes route
router.get('/recipes', (req, res) => {
	res.render('recipes', { title: 'BrainZap!', message: 'BrainZap recipes.' })
})
// define the acessories route
router.get('/accessories', (req, res) => {
	res.render('accessories', { title: 'BrainZap!', message: 'BrainZap accessories!' })
})

export default router