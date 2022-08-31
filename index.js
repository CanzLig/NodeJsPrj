const express = require("express");
const cors = require('cors');
const app = express();
const db = require('./models');
const errorHandler = require('./middleware/errorHandler');
const apiRoutes = require('./routes/index-routes');

const PORT = process.env.PORT || 3000;

var corOptions = {
    origin: 'https://localhost:8081'
}

db.sequelize.authenticate()
.then(() => {
    app.listen(PORT, () => {
        console.log(`listening at: http://localhost:${PORT}`);
    })
}).catch(err => {
    console.error('ERROR - Unable to connect to the database:', err);
});

app.use(cors(corOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", apiRoutes);
app.use(errorHandler);





