

1- We build the backend with Express and MongoDB
in the backend folder execute:
        npm init -y 
            in the package.json file, in scripts, add:
            "dev": "nodemon index.js"
            and under description add:
            "type": "module"
        npm i express nodemon cors body-parser

    create the index.js file
        import express, cors, bodyParser, mongoose

    -- This is the code to connect to MongoDB
    main().catch(err => console.log(err));
    async function main() {
        await mongoose.connect('mongodb://127.0.0.1:27017/bookstore')
            .then(console.log('Connection OPEN'))
            .then(app.listen(3000, () => {
                console.log(`Listening on PORT 3000`)
            })
            )
    }

-- Models (.js files) containing Schemas

-- All routes (app.post, app.get, app.put...) should be put in a file in a folder called routes
app. should be replaced with router. (router = express.Router())
The Entire file should be exported, then imported in the index.js (main file) and used
used with app.use('/books', booksRoute.js) for instance

-- We should also use the CORS (Cross Origin Resource Sharing) middleware
with app.use(cors())

-- Also don't forget the request body parsing middleware
with app.use(bodyParser.json())


2- Now we move to the frontend
-- In the terminal, we run npm create vite@latest (React + JavaScript)

-- Switch to the frontend folder in the CMD and run 'npm i'

-- Add tailwind CSS by running the commands on the website with Vite Framework

-- To make our webapp an SPA, we need to install 'npm i react-router-dom'

-- Then in the main.jsx file, we import {BrowserRouter} and we replace 
<React.StrictMode> with <BrowserRouter>

-- We also need to install axios, and react-icons with npm

in the app.jsx file, we wrap all the <Route /> elements in a <Routes /> element
the <Route /> should look like this:
        <Route path='/' element={<CreateBookPage />}/>
    The elements should be imported from the pages folder


3- Now we start our work in each page

;; /// For the get requests (to get info about a book for example)

            const [book, setBook] = useState({})
            const [loading, setLoading] = useState(false)
            const { id } = useParams()
            useEffect(() => {
                setLoading(true)
                axios
                    .get(`http://localhost:5555/books/${id}`)
                    .then((res) => {
                        setBook(res.data)
                        setLoading(false)
                    })
                    .catch((err) => {
                        console.log(err)
                        setLoading(false)
                    })
            }, [])