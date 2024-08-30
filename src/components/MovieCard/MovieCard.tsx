import { MovieGProps } from "../MovieGallery/MovieGallery";

export default function MovieCard({ title, year, genre, image }: MovieGProps) {
    return (
        <div>
            <ul>
                <li>Título:{title}</li>
                <li>Ano:{year}</li>
                <li>Gênero:{genre}</li>
                <li>{image}</li>
            </ul>
        </div>
    );
}