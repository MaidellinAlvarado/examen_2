
    while (true) {
        let highest = 0;
        let mountainFire = 0;

        
        for (let i = 0; i < 8; i++) {
            const mountainH = parseInt(readline()); 

            if (mountainH > highest) {
                highest = mountainH;
                mountainFire = i;
            }
        }

        console.log(mountainFire);

    
    }