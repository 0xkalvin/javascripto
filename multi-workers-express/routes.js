const router = require('express').Router();


router.get('/', (req, res, next) => {
    res.status(200).send({ message: `Up and kicking`});
})

module.exports = router;