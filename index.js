import express from "express";
import bodyParser from 'body-parser';
import path from 'path'

const port = 5000;
const app = express();

app.use(bodyParser.json());


app.get('/',(req, res) =>{
    res.sendFile(path.join(__dirname, '/index.html'));
})
app.get('/pitagora',(req, res) =>{
    res.sendFile(path.join(__dirname, '/static/pages/pitagora.html'));
})

app.listen(port,()=>{
    console.log(`L'app è stata avviata alla porta http://localhost:` + port);
})

//static files css
app.get('/icss',(req, res) =>{
    res.sendFile(path.join(__dirname, '/static/style/index.css'));
})
app.get('/navbar',(req, res) =>{
    res.sendFile(path.join(__dirname, '/static/component/nav.html'));
})

app.get('/navJS',(req, res) =>{
    res.sendFile(path.join(__dirname, '/static/script/includeHtml.js'));
})
