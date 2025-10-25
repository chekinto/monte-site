import salMonte from '../assets/sal-monte-profile.jpg'
import billyMehlhorn  from '../assets/bill-mehlhorn-profile.jpg'
import joeRoach  from '../assets/joe-roach-delancey-profile.jpg'
import { StaticImageData } from 'next/image';

export interface Teacher {
  heading: string;
  achievements: string[]
  imgSrc: StaticImageData
}

export const myTeachers: Teacher[] = [
  {
    heading: 'Sal Monte (1936 - 2017)', 
    imgSrc: salMonte,
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
    imgSrc: billyMehlhorn,
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
    imgSrc: joeRoach,
    achievements: [
      "Renowned money player",
      "Pioneer of African American Golf",
      "Caddie to many successful tour players",
      "Great teacher of recovery shot making around the greens",
      "National Champion of the African American Tour in the 1950's",
    ]
  },
]