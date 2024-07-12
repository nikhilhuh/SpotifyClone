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

// Get song by title
app.get("/api/songs/:title", (req, res) => {
    const song = songs.find(s => s.title === req.params.title);
    if (!song) {
        return res.status(404).send("Song Not Found");
    }
    res.json(song);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});
