const express = require("express");
const path = require("path");
const cors = require("cors"); // Importing cors

const app = express();
const port = 3000;

// Specify the origin
const corsOptions = {
  origin: "*", // replace with your frontend URL
};

// Use CORS middleware with the specified origin
app.use(cors(corsOptions));

// Songs
const songs = {
  "Songs You Might Like": [
    {
      title: "Akhiyaan Gulaab",
      artist: "Mitraz",
      url: "/songs/Akhiyaan%20Gulaab.mp3",
      image: "/images/Akhiyaan Gulaab.jpg",
    },
    {
      title: "Gulabi Sadi",
      artist: "Gulaab, Tanveer Anjum",
      url: "/songs/Gulabi%20Sadi.mp3",
      image: "/images/Gulabi Sadi.jpg",
    },
    {
      title: "Kesariya",
      artist: "Arijit Singh",
      url: "/songs/Kesariya.mp3",
      image: "/images/Kesariya.jpg",
    },
    {
      title: "Jawan Title Track",
      artist: "Raja Kumari, Anirudh Ravichander",
      url: "/songs/Jawan%20Title%20Track.mp3",
      image: "/images/Jawan Title Track.jpg",
    },
    {
      title: "Sajni",
      artist: "Arijit Singh",
      url: "/songs/Sajni.mp3",
      image: "/images/Sajni.jpg",
    },
    {
      title: "Hass Hass",
      artist: "Sia, Diljit Dosanjh, Greg Kurstin",
      url: "/songs/Hass%20Hass.mp3",
      image: "/images/Hass Hass.jpg",
    },
    {
      title: "Jaadugar",
      artist: "Paradox, Hustle 2.0",
      url: "/songs/Jaadugar.mp3",
      image: "/images/Jaadugar.jpg",
    },
  ],
  "Popular Albums": [
    {
      title: "Husn",
      artist: "Anuv Jain",
      url: "/songs/Husn.mp3",
      image: "/images/Husn.jpg",
    },
    {
      title: "Pehle Bhi Main",
      artist: "Vishal Mishra, Raj Shekhar",
      url: "/songs/Pehle%20Bhi%20Main.mp3",
      image: "/images/Pehle Bhi Main.jpg",
    },
    {
      title: "Afghan Jalebi",
      artist: "Asrar (Syed Asrar Shah), Pritam",
      url: "/songs/Afghan%20Jalebi.mp3",
      image: "/images/Afghan Jalebi.jpg",
    },
    {
        title: "Nadaaniyan",
        artist: "Akshath",
        url: "/songs/Nadaaniyan.mp3",
        image: "/images/Nadaaniyan.jpg",
      },
    {
      title: "Chaleya",
      artist: "Arijit Singh, Shilpa Rao",
      url: "/songs/Chaleya.mp3",
      image: "/images/Chaleya.jpg",
    },
    {
      title: "Deva Deva",
      artist:
        "Jonita Gandhi, Amitabh Bhattacharya, Arijit Singh, Pritam Chakraborty",
      url: "/songs/Deva%20Deva.mp3",
      image: "/images/Deva Deva.jpg",
    },
    {
      title: "Gandi Baat",
      artist: "Kalpana Patowary, Mika Singh",
      url: "/songs/Gandi%20Baat.mp3",
      image: "/images/Gandi Baat.jpg",
    },
    {
      title: "295",
      artist: "Sidhu Moose Wala",
      url: "/songs/295.mp3",
      image: "/images/295.jpg",
    },
  ],
  "India's Best": [
    {
      title: "Khalasi",
      artist: "Aditya Gadhvi, Achint",
      url: "/songs/Khalasi.mp3",
      image: "/images/Khalasi.jpg",
    },
    {
      title: "Saree Ke Fall Sa",
      artist: "Antara Mitra, Nakash Aziz",
      url: "/songs/Saree%20Ke%20Fall%20Sa.mp3",
      image: "/images/Saree Ke Fall Sa.jpg",
    },
    {
      title: "Ram Ram",
      artist: "MC Square, Hustle 2.0",
      url: "/songs/Ram%20Ram.mp3",
      image: "/images/Ram Ram.jpg",
    },
    {
      title: "Agar Tum Saath Ho",
      artist: "Arijit Singh, Alka Yagnik",
      url: "/songs/Agar%20Tum%20Saath%20Ho.mp3",
      image: "/images/Agar Tum Saath Ho.jpg",
    },

    {
      title: "Gallan Goodiyaan",
      artist:
        "MANISH KUMAR TIPU, Javed Akhtar, Yashita Yashpal Sharma, Sukhwinder Singh, Farhan Akhtar, Shankar Mahadevan",
      url: "/songs/Gallan%20Goodiyaan.mp3",
      image: "/images/Gallan Goodiyaan.jpg",
    },
  ],
  "Trending Now": [
    {
      title: "Aam Jahe Munde",
      artist: "Parmish Verma, Pardhaan",
      url: "/songs/Aam%20Jahe%20Munde.mp3",
      image: "/images/Aam Jahe Munde.jpg",
    },
    {
      title: "Shaitaan Theme",
      artist: "Siddharth Basrur, Kumaar, Amit Trivedi",
      url: "/songs/Shaitaan%20Theme.mp3",
      image: "/images/Shaitaan Theme.jpg",
    },
    {
      title: "Arjan Vailly",
      artist: "Bhupinder Babbal",
      url: "/songs/Arjan%20Vailly.mp3",
      image: "/images/Arjan Vailly.jpg",
    },
    {
        title: "Nadaaniyan",
        artist: "Akshath",
        url: "/songs/Nadaaniyan.mp3",
        image: "/images/Nadaaniyan.jpg",
      },
    {
      title: "Chaleya",
      artist: "Arijit Singh, Shilpa Rao",
      url: "/songs/Chaleya.mp3",
      image: "/images/Chaleya.jpg",
    },
    {
      title: "Fevicol Se",
      artist: "Mamta Sharma, Wajid Aliy",
      url: "/songs/Fevicol%20Se.mp3",
      image: "/images/Fevicol Se.jpg",
    },
  ],
  "Trending In India": [
    {
        title: "Sheila Ki Jawani",
        artist: "Sunidhi Chauhan, Vishal Dadlani, Shekhar Ravjiani",
        url: "/songs/Sheila%20Ki%20Jawani.mp3",
        image: "/images/Sheila Ki Jawani.jpg",
      },
    {
      title: "Badmos Chora",
      artist: "MC Square , Hustle 2.0",
      url: "/songs/Badmos%20Chora.mp3",
      image: "/images/Badmos Chora.jpg",
    },
    {
      title: "Gulabi Sadi",
      artist: "Gulaab, Tanveer Anjum",
      url: "/songs/Gulabi%20Sadi.mp3",
      image: "/images/Gulabi Sadi.jpg",
    },
    {
      title: "Chhore NCR Aale",
      artist: "MC Square , Hustle 2.0",
      url: "/songs/Chhore%20NCR%20Aale.mp3",
      image: "/images/Chhore NCR Aale.jpg",
    },
    {
        title: "Pehle Bhi Main",
        artist: "Vishal Mishra, Raj Shekhar",
        url: "/songs/Pehle%20Bhi%20Main.mp3",
        image: "/images/Pehle Bhi Main.jpg",
      },
    
    {
        title: "Agar Tum Saath Ho",
        artist: "Arijit Singh, Alka Yagnik",
        url: "/songs/Agar%20Tum%20Saath%20Ho.mp3",
        image: "/images/Agar Tum Saath Ho.jpg",
      },
  ],
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
