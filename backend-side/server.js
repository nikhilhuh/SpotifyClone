const express = require("express");
const path = require("path");
const cors = require("cors");  // Importing cors

const app = express();
const port = 3000;

// Specify the origin
const corsOptions = {
    origin: '*', // replace with your frontend URL
};

// Use CORS middleware with the specified origin
app.use(cors(corsOptions));

// Songs
const songs = {
    "Popular Albums": [{
        id: 1,
        title: "Afghan Jalebi",
        artist: "Asrar (Syed Asrar Shah), Pritam",
        url: "/songs/Afghan%20Jalebi.mp3",
        image: "/images/Afghan Jalebi.jpg"
    },
    {
        id: 2,
        title: "Agar Tum Saath Ho",
        artist: "Arijit Singh, Alka Yagnik",
        url: "/songs/Agar%20Tum%20Saath%20Ho.mp3",
        image: "/images/Agar Tum Saath Ho.jpg"
    },
    {
        id: 3,
        title: "Gulabi Sadi",
        artist: "Gulaab, Tanveer Anjum",
        url: "/songs/Gulabi%20Sadi.mp3",
        image: "/images/Gulabi Sadi.jpg"
    },
    {
        id: 4,
        title: "Badmos Chora",
        artist: "MC Square , Hustle 2.0",
        url: "/songs/Badmos%20Chora.mp3",
        image: "/images/Badmos Chora.jpg"
    },
    {
        id: 5,
        title: "Chhore NCR Aale",
        artist: "MC Square , Hustle 2.0",
        url: "/songs/Chhore%20NCR%20Aale.mp3",
        image: "/images/Chhore NCR Aale.jpg"
    },
],
"India's Best": [{
    id: 6,
    title: "Akhiyaan Gulaab",
    artist: "Mitraz",
    url: "/songs/Akhiyaan%20Gulaab.mp3",
    image: "/images/Akhiyaan Gulaab.jpg"
},
{
    id: 7,
    title: "Deva Deva",
    artist: "Jonita Gandhi, Amitabh Bhattacharya, Arijit Singh, Pritam Chakraborty",
    url: "/songs/Deva%20Deva.mp3",
    image: "/images/Deva Deva.jpg"
},
{
    id: 8,
    title: "Gandi Baat",
    artist: "Kalpana Patowary, Mika Singh",
    url: "/songs/Gandi%20Baat.mp3",
    image: "/images/Gandi Baat.jpg"
},
],
"Trending Now": [{
    id: 1,
    title: "Afghan Jalebi",
    artist: "Asrar (Syed Asrar Shah), Pritam",
    url: "/songs/Afghan%20Jalebi.mp3",
    image: "/images/Afghan Jalebi.jpg"
},
{
    id: 2,
    title: "Agar Tum Saath Ho",
    artist: "Arijit Singh, Alka Yagnik",
    url: "/songs/Agar%20Tum%20Saath%20Ho.mp3",
    image: "/images/Agar Tum Saath Ho.jpg"
},
{
    id: 3,
    title: "Gulabi Sadi",
    artist: "Gulaab, Tanveer Anjum",
    url: "/songs/Gulabi%20Sadi.mp3",
    image: "/images/Gulabi Sadi.jpg"
},
{
    id: 4,
    title: "Badmos Chora",
    artist: "MC Square , Hustle 2.0",
    url: "/songs/Badmos%20Chora.mp3",
    image: "/images/Badmos Chora.jpg"
},
{
    id: 5,
    title: "Chhore NCR Aale",
    artist: "MC Square , Hustle 2.0",
    url: "/songs/Chhore%20NCR%20Aale.mp3",
    image: "/images/Chhore NCR Aale.jpg"
},
],
"Trending in India": [{
    id: 1,
    title: "Afghan Jalebi",
    artist: "Asrar (Syed Asrar Shah), Pritam",
    url: "/songs/Afghan%20Jalebi.mp3",
    image: "/images/Afghan Jalebi.jpg"
},
{
    id: 2,
    title: "Agar Tum Saath Ho",
    artist: "Arijit Singh, Alka Yagnik",
    url: "/songs/Agar%20Tum%20Saath%20Ho.mp3",
    image: "/images/Agar Tum Saath Ho.jpg"
},
{
    id: 3,
    title: "Gulabi Sadi",
    artist: "Gulaab, Tanveer Anjum",
    url: "/songs/Gulabi%20Sadi.mp3",
    image: "/images/Gulabi Sadi.jpg"
},
{
    id: 4,
    title: "Badmos Chora",
    artist: "MC Square , Hustle 2.0",
    url: "/songs/Badmos%20Chora.mp3",
    image: "/images/Badmos Chora.jpg"
},
{
    id: 5,
    title: "Chhore NCR Aale",
    artist: "MC Square , Hustle 2.0",
    url: "/songs/Chhore%20NCR%20Aale.mp3",
    image: "/images/Chhore NCR Aale.jpg"
},
],
"Rap Songs": [{
    id: 1,
    title: "Afghan Jalebi",
    artist: "Asrar (Syed Asrar Shah), Pritam",
    url: "/songs/Afghan%20Jalebi.mp3",
    image: "/images/Afghan Jalebi.jpg"
},
{
    id: 2,
    title: "Agar Tum Saath Ho",
    artist: "Arijit Singh, Alka Yagnik",
    url: "/songs/Agar%20Tum%20Saath%20Ho.mp3",
    image: "/images/Agar Tum Saath Ho.jpg"
},
{
    id: 3,
    title: "Gulabi Sadi",
    artist: "Gulaab, Tanveer Anjum",
    url: "/songs/Gulabi%20Sadi.mp3",
    image: "/images/Gulabi Sadi.jpg"
},
{
    id: 4,
    title: "Badmos Chora",
    artist: "MC Square , Hustle 2.0",
    url: "/songs/Badmos%20Chora.mp3",
    image: "/images/Badmos Chora.jpg"
},
{
    id: 5,
    title: "Chhore NCR Aale",
    artist: "MC Square , Hustle 2.0",
    url: "/songs/Chhore%20NCR%20Aale.mp3",
    image: "/images/Chhore NCR Aale.jpg"
},
]
};

app.use("/songs", express.static(path.join(__dirname, "songs")));
app.use("/images", express.static(path.join(__dirname, "images")));

// Get list of songs
app.get("/api/songs", (req, res) => {
    res.json(songs);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
