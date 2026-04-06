//This file stores the movie data used in the CLI application
const movies=[
    {
        id:1,
        title:"Dhurandar2",
        showtimes:[
            {time: "10:00 AM",seatsAvailable: 100},
            {time: "01:00 PM",seatsAvailable: 70},
            {time: "06:00 PM",seatsAvailable: 300},

        ]
    },
    {
        id:2,
        title:"Love Mocktail3",
        showtimes:[
            {time: "10:00 AM",seatsAvailable: 100},
            {time: "01:00 PM",seatsAvailable: 70},
            {time: "06:00 PM",seatsAvailable: 300},
            
        ]
    },
    {
        id:3,
        title:"Hayagreeva",
        showtimes:[
            {time: "11:00 AM",seatsAvailable: 100},
            {time: "02:00 PM",seatsAvailable: 70},
            {time: "08:30 PM",seatsAvailable: 300},
            
        ]
    }

]
//exporting movie data so that other files can use it
module.exports=movies