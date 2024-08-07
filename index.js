const generateRandom = num => Math.floor(Math.random() * num)



const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one']
  }

  for (let wisdom in collectiveWisdom) {
    const index = generateRandom(collectiveWisdom[wisdom].length);

    switch (wisdom) {
        case 'signInfo':
            console.log(`Your sign is: ${collectiveWisdom[wisdom][index]}`);
            break;
        case 'fortuneOutput':
            console.log(`Your have: ${collectiveWisdom[wisdom][index]}`);
            break;
        case 'advice':
            console.log(`You should: ${collectiveWisdom[wisdom][index]}`);
            break;
    }
  }


