const express = require('express');
const router = express.Router();
const recipeController = require('../controllers/recipeController');

/**
 * App Router
 */
router.get('/',recipeController.homepage);
router.get('/recipie/:id',recipeController.exploreRecipie);
router.get('/recipie/:id',recipeController.exploreRecipieWithMorePerson);
router.get('/categories',recipeController.exploreCategories);
router.get('/categories/:id', recipeController.exploreCategoriesById);
router.post('/search',recipeController.searchRecipie);
router.get('/explore-latest', recipeController.exploreLatest);
router.get('/random-recipie', recipeController.exploreRandom);
router.get('/submit-recipie', recipeController.SubmitRecipie);
router.post('/submit-recipie', recipeController.SubmitRecipieOnPost);
router.get('/about',recipeController.aboutAuthor);
router.get('/Contact',recipeController.Contactus);
router.get('/Quantity', recipeController.exploreQunatity);

module.exports = router;