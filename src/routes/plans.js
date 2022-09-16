const { Router } = require('express');
const { getPlansForUser, addNewPlan } = require('../controllers/plans');
const router = Router()

router.get('/plans', getPlans);
router.get('/plans/:userId', getPlansForUser);
router.put('/plans/:userId', addNewPlan);

module.exports = router;