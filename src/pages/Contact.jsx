export const Contact = () => {

    const handleFormSubmit = (formData) => {
        console.log(Object.fromEntries(formData.entries()))
    }

    return <section className="section-contact">
        <h2 className="container-title">Contact Us</h2>
        <div className="contact-wrapper container">
            <form action={handleFormSubmit}>
                <input type="text" className="form-control" required autoComplete="off" placeholder="Enter your name"
                       name="username"/>
                <input type="email" className="form-control" required autoComplete="off" placeholder="Enter your email"
                       name="email"/>
                <textarea className="form-control" rows="10" required autoComplete="off"
                          placeholder="Enter your message"
                          name="message"/>
                <button type="submit" value="send">Send</button>
            </form>
        </div>
    </section>
}