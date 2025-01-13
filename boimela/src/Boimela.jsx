import BookList from "./BookList";
import Header from "./Header";
import Search from "./Search";

export default function Boimela() {
    return (
        <div className="container mx-auto p-4">
            <Header />
            <Search />
            <BookList />
        </div>
    );
}