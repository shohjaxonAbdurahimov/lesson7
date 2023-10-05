
function form() {
    return (
        <>
            <h1>send Ass qustion</h1>
            <hr />
            <div className="form-container">
                <form>
                    <label className="form-control">
                        <span>your amail:</span>
                        <input type="text" />
                    </label>
                    <label className="form-control">
                        <span>your amail:</span>
                        <textarea></textarea>
                    </label>
                    <button className="button">Send</button>
                </form>
            </div>
        </>
    )
}

export default form