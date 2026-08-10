export default function ClearStorage() {
    const handleClick = () => {
        localStorage.clear();
        window.location.reload();
    };

    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <button className="clear-storage" onClick={handleClick}> Clear Local Storage</button>
        </div>
    )
}