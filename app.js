const express = require('express');
const morgan = require('morgan');
const app = express();
const port = process.env.port || 3001;
const path = require("path");

const events = [
    {
        id: 1,
        name: "[버거] 치즈버거처럼 생긴 게살사장 새우버거",
        meta:["치즈","버거","치즈버거","맛좋은","새우버거","게살사장","스폰지밥 처럼생긴 게살사장"],
        image:
            "https://images.unsplash.com/photo-1547584370-2cc98b8b8dc8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 2,
        name: "[샐러드]저당 맛있는 색깔의 콥셀러드",
        meta:["피자","스폰지밥","맛좋은","게살사장"],
        image:
            "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    },
    {
        id: 3,
        name: "[피자] 스폰지밥 같은 맛좋은 피자",
        meta:["피자","스폰지밥","맛좋은","게살사장"],
        image: "http://foo.bar/image.jpg"
    }
]


app.get("/api/getEvents", (req, res) => {
    res.json(events);
})


app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "../dist")));

app.get('/', (req, res, next) => {
    res.send('start server ')
});


app.listen(port, () => {
    console.log(`Server is running at ${port}`);
})