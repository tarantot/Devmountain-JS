getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    }

getFortune: (req, res) => {
        const fortunes = [
            'A feather in the hand is better than a bird in the air.',
            'Allow compassion to guide your decisions.',
            'From listening comes wisdom and from speaking repentance.',
            'If you think you can do a thing or think you can’t do a thing, you’re right.',
            'New ideas could be profitable.',
        ];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    }