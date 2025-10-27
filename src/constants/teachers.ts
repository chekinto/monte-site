export interface Teacher {
  heading: string;
  achievements: string[]
  imgSrc: string
}

export const myTeachers: Teacher[] = [
  {
    heading: 'Sal Monte (1936 - 2017)', 
    imgSrc: "https://static.wixstatic.com/media/2e1ea9_e87469c13fb04f8d9d260a921d6bf18b~mv2.jpg/v1/crop/x_0,y_5,w_540,h_482/fill/w_312,h_276,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/12654701_10208716555333905_4915705662530.jpg",
    achievements: [
      "PGA life member",
      "Former tour player",
      "Coached many winners on tour",
      "Renowned money player of the infamous 1970's in South Florida",
      "Director of golf at the Fountainebleau cc 1971-1984"
    ]
  },
  {
    heading: '"Wild" Bill Mehlhorn (1898 - 1989)', 
    imgSrc: "https://static.wixstatic.com/media/2e1ea9_e87469c13fb04f8d9d260a921d6bf18b~mv2.jpg/v1/crop/x_0,y_5,w_540,h_482/fill/w_312,h_276,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/12654701_10208716555333905_4915705662530.jpg",
    achievements: [
      "Pioneer of the PGA of America",
      "Came up with numerical system for numbering golf clubs",
      "PGA life member",
      "PGA Hall of Famer",
      "Member of the 1st United States Ryder Cup Team",
      "Winner of over 21 PGA Tour events",
      "Ben Hogan called him 'The finest ball striker I've ever seen'",
      "Coached numerous winners on the tour for decades"
    ]
  },
  {
    heading: 'Joe "Roach" Delancey aka "Cowboy Joe" (1922 - 2002)', 
    imgSrc: "https://static.wixstatic.com/media/2e1ea9_e87469c13fb04f8d9d260a921d6bf18b~mv2.jpg/v1/crop/x_0,y_5,w_540,h_482/fill/w_312,h_276,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/12654701_10208716555333905_4915705662530.jpg",
    achievements: [
      "Renowned money player",
      "Pioneer of African American Golf",
      "Caddie to many successful tour players",
      "Great teacher of recovery shot making around the greens",
      "National Champion of the African American Tour in the 1950's",
    ]
  },
]