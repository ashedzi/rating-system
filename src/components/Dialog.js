function Dialog(props) {
    return (
        <div className={`dialog flex flex-column gap-16 ${props.visibilityClass}`}>
            <h3>Customer survey</h3>
            <p>
                We truly value your feedback. Our customers are our top priority, and we’re committed to 
                improving your experience. If you mentioned any concerns or issues, please rest assured that 
                we’re reviewing them carefully and will take the necessary steps to address them.
            </p>
            <p>
                Thank you for being a part of our journey!
            </p>
            <button onClick={props.modalVisibility}>Close dialog</button>
        </div>
    )
}

export default Dialog;

