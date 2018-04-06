const taskSeed = 
//Array for Company info, Employee info and Jobs info objects
[
  //Company Info object
  
  {
    company: {
      name: "Katenna Hotel Miami",
      address: {
        street: "1410 Ocean Drive",
        city: "Miami Beach",
        state: "Florida",
        zip: 33137
      },
      phone: "305-555-5050",
      url: "http://www.katennahotelmiami.com",
      location: "in the heart of South Beach on Ocean Drive, between 12th and 13th streets",
      rooms: 140,
      built: 1916,
      architect: "James Scarlett",
      features: [
        'Guaranteed direct ocean views from all rooms and suites',
        'Large, spacious rooms averaging 550 sq ft or more in size',
        'Complimentary WiFi in all guest rooms and public spaces',
        'The Katenna Restaurant, featuring all day indoor/outdoor dining',
        'Outdoor heated pool exclusively for hotel guests',
        'Fitness Center (open 24 hours)'
      ],
      services: [
        'Complimentary beach set-up of two beach chairs, one umbrella and two towels',
        'Complimentary "Katenna Sunrise" welcome cocktail upon arrival',
        'Valet parking ($35 per night)',
        '24-hour concierge service',
        'Same day laundering and dry cleaning services',
        'Pressing and steaming services',
        'Shoe shine services',
        'Well-stocked lending library featuring award-winning DVDs',
      ],
      amenities: [
        'In-room dining serving breakfast, lunch and dinner',
        'Nespresso coffee & tea machines',
        'Fully stocked honor bar',
        'In-room safe',
        'Flat-screen televisions with DVD players',
        'iPod docking stations in all rooms and suites',
        'Large walk -in closets',
        'Iron and ironing board available upon request',
        'In - room spa treatments'
      ],
      dining: [
        {
          outlet: {
            name: 'Valhalla Restaurant Lounge and Terrace',
            cuisine: 'International Favorites',
            hours: {
              breakfast: {
                open: 7,
                close: 11
              },
              lunch: {
                open: 11,
                close: 16
              },
              dinner: {
                open: 16,
                close: 23
              }
            }
          }
        },
        {
          outlet: {
            name: 'Booleans Bar and Cafe',
            cuisine: 'Fine Wine and Spirits, with best coffee in Miami',
            hours: {
              breakfast: {
                open: 9,
                close: 11
              },
              lunch: {
                open: 11,
                close: 16
              },
              dinner: {
                open: 16,
                close: 23
              }
            }
          }
        }
      ]
    }
  },
  
  // Employee info object
  {
    employees: []
  },
  {
    departments: [
      {
        name: "Front Office",
        supervisor: "Mr. Officer",
        tasks: [
          {
            item: "Receive handover from previous shift",
            description: [
              "Ask previous shift team member regarding any pending items that need to be followed upon.",
              "Ask previous shift team member regarding any guest parking discrepancies. Call Key Parking manager at ext. 147 to discuss and resolve. Communicate the resolution to all team members.",
              "Ask previous shift team member regarding any arrival cancellations. In case of late cancellation, charge one night's room and tax amount using the method of payment on reservation.",
              "Ask previous shift team member regarding any early arrivals. If there is a guest waiting to check in, try to accomodate their early check-in. If a clean room is not available, communicate to manager on duty to handle."
            ]
          },
          {
            item: "Perform wake-up calls",
            description: [
              "Obtain wake-up call list from front desk pass-on folder.",
              "Dial 7 + guest room number at the exact time the wake-up call was requested.",
              "Greet the guest using their last name. Example: Good morning/afternoon Mr. 'Guest last name', this is your wake-up call.",
              "Ask the guest if they need another follow-up call or any other assistance",
            ]
          },
          {
            item: "Schedule wake-up calls",
            description: [
              "When guest calls to request a wake up call, reconfirm the time of call and guest room number.",
              "Note the wake-up call on the front office pass-on wake-up call sheet.",
              "Program the time of the wake-up call in the alarm clock located besides the front desk computer."
            ]
          },
          {
            item: "Log in to computer",
            description: [
              "Make sure that previous shift team member has logged out of the front desk computer workstation. If a user is logged in, click START and then LOGOUT",
              "Click on 'Login with a different user' on the main screen",
              "Enter your workstation Username and Password, then click LOGIN or simply press ENTER on the keyboard.",
              "After the shift, always ensure to log out of your workstation account by clicking on START and Logout"
            
            ]
          },
          {
            item: "Concierge service",
            description:[
              "On your workstation, open Chrome browswer.",
              "From the Favorites tab, select 'Go-Concierge'. If you don't see 'Go-Concierge' on the list, then in the address bar type 'http://www.goconcierge.net'",
              "When prompted, enter your username and password to login to your Go-Concierge account.",
              "Click on 'Pending Concierge Items' and print the list",
              "For Restaurant reservation requests, click on the Resaturant tab and follow instructions to make the reservation at requested restaurant. Ask front office manager for assistance if unable to confirm booking",
              "For Car service, click on the Tranportation tab and follow instructions to make the reservation with Coastal Limousine who are our preferred transportation provider. Ask front office manager for assistance if unable to confirm booking",
              "For Massage booking, click on the Massage tab and follow instructions to book requested service. Ask front office manager for assistance if unable to confirm booking.",
              "Any Concierge service requests can be processed from Go-Cocierge web portal. If unsure, ask front office manager for assistance."

            ]
          },
          {
            item: "Login to Property Management system Opera",
            description: [
              "Once logged into your workstation, look for OPERA icon on the desktop and double click to open.",
              "When prompted for Opera username and password, enter your Opera username and password and click on LOGIN",
              "During your shift, you must always have Opera Property Management system open and logged onto, on your workstation.",
              "After the shift, always ensure to log out of your Opera account by clicking on USER and LOGOUT"
            ]
          }
        ]

      },

      {
        name: "Housekeeping",
        supervisor: "Mr. Keeper",
      },

      {
        name: "Accounting",
        supervisor: "Mr. Countant",
      },

      {
        name: "Bellman",
        supervisor: "Mr. Bellringer",

      },
      {
        name: "Manager",
        supervisor: "God",

      }
    ]
  }
];