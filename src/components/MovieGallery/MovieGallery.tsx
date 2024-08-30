
type MovieGProps = {
    title: string;
    year: number;
    genre: string;
    image: string;
}

export default function MovieGallery({ title, year, genre, image }: MovieGProps) {
    return (
        <div>
            <ul>
                <li>Título:{title}</li>
                <li>Ano:{year}</li>
                <li>Gênero:{genre}</li>
                <li>Imagem:{image}</li>
            </ul>
        </div>
    );
}

// title: "Inception",
//     description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
//     year: 2010,
//     genre: "Ficção Científica",
//     image: "inception.jpg"