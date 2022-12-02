const experss = require('express');
const router = experss.Router()
const learnController = require("../controllers/learnController");


router.get('/learnning/',learnController.learn_subjectsVideo_get);
router.get('/delete/lesson/:id',learnController.deleteLesson_subjectsVideo_get);

router.get('/addQuiz/',learnController.addQuiz_addQuiz_get);
router.post('/addQuiz/',learnController.addQuiz_addQuiz_post);


module.exports = router;