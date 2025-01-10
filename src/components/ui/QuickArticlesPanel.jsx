function QuickArticlesPanel({ articles }) {



    return (
        <div className="rounded" style={{ width: "100%", backgroundColor: "rgba(0,0,0,0.7)", padding: "10px 10px 10px 10px" }}>
            <h2 style={{ color: "white", textAlign: "center" }}>Quick Articles</h2>
            <ul>
                {articles.map((a, i) => (
                    <li key={`Quick - ${a.title} - ${i}`} style={{ color: "white", marginBottom: "12px" }}><a style={{ color: "white", fontSize: "20px" }} href={a.link}>{a.title}</a></li>
                ))}
            </ul>
        </div >
    )
}

export default QuickArticlesPanel;