function processInput(arr) {
    //COMPLETE THIS FUNCTION
    // console.log(arr);
    let x;
    arr.forEach(element => {
        x =element.split('.')[0] ;
    //    console.log(x.match('/\d+min/'));

       console.log(x);
    console.log(x.match(/(\d+min)+/));

    });
    
}

processInput(
    [
        'Selma  8 Ava DuVernay 128min 116min Historical Drama', 
'Sunrise 7 Richard Linklater 101min 23min Romance',
'A Star Is Born 8 Bradley Cooper 136min 120min Music',
'Middle of Nowhere  6 Ava DuVernay 100min 82min Drama'
    ]
)