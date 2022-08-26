import express from "express"

const app = express();
app.use(express.json());


const users = [];

/* = {
    username: 'bobesponja',
    avatar: "https://super.abril.com.br/wp-content/uploads/2020/09/04-09_gato_SITE.jpg?quality=70&strip=info"
} */

const tweets = [];

app.post("/sign-up", (req, res) => {
    users.push(req.body)
    res.send("Ok")
})

app.post("/tweets", (req, res) => {
    tweets.push(req.body)
    res.send("Ok")
})


app.listen(5000, () => console.log("Escutando na porta 5000"))