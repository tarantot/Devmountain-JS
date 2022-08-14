let ideasDatabase = []

module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = [
            'A feather in the hand is better than a bird in the air.',
            'Allow compassion to guide your decisions.',
            'From listening comes wisdom and from speaking repentance.',
            'If you think you can do a thing or think you can’t do a thing, you’re right.',
            'New ideas could be profitable.',
            'Observe all men, but most of all yourself.',
            'The saints are the sinners who keep on trying.',
            'To know oneself, one should assert oneself.',
        ];
    
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    
    addIdea: (req, res) => {
        let idea = req.params.idea
      
        ideasDatabase.push(idea)
        //console.log(ideasDatabase);
        res.status(200).send(ideasDatabase)
    },

    updateIdea: (req, res) => {
      const idea = req.params.idea;
      console.log(idea);
      var ratio = 0;
      var index;

      function compare(idea, addedIdea) {
        for(var result = 0, i = idea.length; i--;){
            if(typeof addedIdea[i] == 'undefined' || idea[i] == addedIdea[i]);
            else if(idea[i].toLowerCase() == addedIdea[i].toLowerCase())
                result++;
            else
                result += 4;
        }
        return 1 - (result + 4*Math.abs(idea.length - addedIdea.length)) / (2*(idea.length+addedIdea.length));
      }

      for (let i = 0; i < ideasDatabase.length; i++) {
        if (ratio < compare(idea, ideasDatabase[i])) {
          ratio = compare(idea, ideasDatabase[i]);
          index = i;
        }};
      
      if (ratio === 0) {
        return res.status(400).send('Nothing to update!');
      };

      ideasDatabase[index] = idea;

      res.status(200).send(ideasDatabase);
    },

    deleteIdea: (req, res) => {
      const index = req.params.index;
      ideasDatabase.splice(index, 1);

      res.status(200).send(ideasDatabase);
    },

}