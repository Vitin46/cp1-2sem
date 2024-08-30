
export const movies = [
    {
        title: "Inception",
        description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        year: 2010,
        genre: "Ficção Científica",
        image: "inception.jpg"
    },
    {
        title: "The Godfather",
        description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        year: 1972,
        genre: "Drama",
        image: "godfather.jpg"
    },
    {
        title: "The Dark Knight",
        description: "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham.",
        year: 2008,
        genre: "Ação",
        image: "dark_knight.jpg"
    },
    {
        title: "Forrest Gump",
        description: "The presidencies of Kennedy and Johnson, the events of Vietnam, Watergate, and other history unfold through the perspective of an Alabama man with an IQ of 75.",
        year: 1994,
        genre: "Comédia",
        image: "forrest_gump.jpg"
    }
];

export type MovieGProps = {
    title: string;
    year: number;
    genre: string;
    image: string;
}


// title: "Inception",
//     description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
//     year: 2010,
//     genre: "Ficção Científica",
//     image: "inception.jpg"