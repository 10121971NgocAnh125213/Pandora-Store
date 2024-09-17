const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

const productRoutes = require('./routes/productRoute');
const categoryRoutes = require('./routes/categoryRoute');
const staffRoutes = require('./routes/staffRoute');
const customerRoutes = require('./routes/customerRoute');
const accountRoutes = require('./routes/accountRoute');
const salebillRoutes = require('./routes/salebillRoute');
const detailSBRoutes = require('./routes/detailSBRoute');
const inbillRoutes = require('./routes/inbillRoute');
const orderRoutes = require('./routes/orderRoute');

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));

//Use Route
app.use(productRoutes);
app.use(categoryRoutes);
app.use(staffRoutes);
app.use(customerRoutes);
app.use(accountRoutes);
app.use(salebillRoutes);
app.use(detailSBRoutes);
app.use(inbillRoutes);
app.use(orderRoutes);

//=============================//
app.listen(5000, () =>{
    console.log("server is running on port 5000");
})