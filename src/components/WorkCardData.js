import pro1 from "../assets/Delish2.png"
import pro2 from "../assets/Hangman.png"
import pro3 from "../assets/SociallySocial.jpg"
import pro4 from "../assets/AuctionWelcomePage.png"

const ProjectCardData = [
    {
        imgsrc: pro1,
        title: "Delish",
        text: (
            <span>
                Delish is a homemade meal web app for home cooks to create meals and customers to search and order meals - collaborative project, a team of 5.
                <p></p><strong>Stack:</strong>
                <p>RubyonRails, ERB, Bootstrap, PostgreSQL</p>
            </span>),
        view: "https://www.youtube.com/watch?v=sMqee24ct54",
        source: "https://github.com/mehakbagga/HomeMade-Meal"
    },
    {
        imgsrc: pro2,
        title: "Hangman Game",
        text: (
            <span>
                A front-end only word guessing game in which you must guess as many secret words as you can. Players can play by clicking on the letters on the page or pressing the keyboard keys.
                <p></p>
                <strong>Stack:</strong>
                <p>jQuery, Bootstrap, HTML, CSS, Javascript</p>
            </span>
        ),
        view: "https://hangman-six-ecru.vercel.app/",
        source: "https://github.com/mehakbagga/Hangman"
    },
    {
        imgsrc: pro3,
        title: "Socially Social",
        text: (
            <span>
            SociallySocial is a web application inspired by Instagram for following the other users and sharing pictures. It was built using Ruby on Rails backend with PostgreSQL database and a React/Redux frontend.
                <p></p>
                <strong>Stack:</strong>
                <p>Ruby,  Rails,  React,  Redux,  PostgreSQL</p>
            </span>
        ),
        view: "https://youtu.be/3fDrIYh2hhc",
        source: "https://github.com/mehakbagga/Hangman"
    },
    {
        imgsrc: pro4,
        title: "Biddr",
        text: (
            <span>
            Biddr is an auction app that allows users to create auctions and place bids. Users can see the current highest price and if the reserve price is met.
                <p></p>
                <strong>Stack:</strong>
                <p>Ruby on Rails, React.js, Bootstrap, HTML, CSS, Javascript, PostgreSQL</p>
            </span>
        ),
        source: "https://github.com/mehakbagga/Biddr"
    }
]

export default ProjectCardData