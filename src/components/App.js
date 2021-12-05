import React from "react";
import Header from "./header/Header";
import Nav from "./Nav";
import Stories from "./Stories";

const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];
const nytapi = "1c0qzh3dUTYbz2QaaXk8r0GpFsMGKzw4";

function App() {
    const [stories, setStories] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [section, setSection] = React.useState("arts");

    React.useEffect(() => {
        const url = new URL(window.location.href);
        const hash = url.hash.slice(1);
        console.log("HASH [" + hash + "]");
        if (hash === "undefined" || hash === "") {
            setSection("arts");
        } else {
            console.log(" hash ", hash);
            setSection(hash);
        }
    }, []);

    React.useEffect(() => {
        setLoading(true);
        fetch(
            `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
        )
            .then((response) => {
                const j = response.json();
                console.log(j);
                return j;
            })
            .then((data) => setStories(data.results))
            .then(setLoading(false))
            .catch((error) => {
                console.log(error);
            });
    }, [section]);

    return (
        <>
            <Header siteTitle="All the news the Fits We Print" />

            <Nav
                navItems={navItems}
                setSection={setSection}
                section={section}
            />

            {loading || stories.length === 0 ? (
                <h2 class="loading">Loading...</h2>
            ) : (
                <Stories stories={stories} section={section} />
            )}
        </>
    );
}

export default App;
