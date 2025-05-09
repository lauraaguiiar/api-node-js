const express = require('express'); 
const router = express.Router(); 

const SensorController = require('../controllers/sensor'); 

router.get('/sensor', SensorController.listarSensor); 
router.post('/sensor', SensorController.cadastrarSensor); 
router.patch('/sensor', SensorController.editarSensor); 
router.delete('/sensor', SensorController.apagarSensor); 


module.exports = router;