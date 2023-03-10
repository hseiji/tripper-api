const { Router } = require('express');
const { getPlansForUser, addNewPlan, deletePlan } = require('../controllers/plans');
const { authToken } = require('../controllers/users');

const router = Router()

// router.get('/plans', getPlans);

router.get('/plans', authToken, getPlansForUser);

router.put('/plans/:userId', authToken, addNewPlan);

router.delete('/plans/:planId', authToken, deletePlan);

module.exports = router;