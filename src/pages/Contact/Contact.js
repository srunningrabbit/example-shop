import './Contact.css';

export default function Contact() {
    const handleSubmit = () => {
        alert("Your message has been submitted.");
    }

    return (
        <div className="contact-container">
            <h2>Contact</h2>
            <p>For any pressing questions or concerns, our primary point of contact is <a href="mailto:exampleemail@exampleshop.com">exampleemail@exampleshop.com</a>. <br></br><br></br>If you have any question or comments that aren't as urgent, you can fill out the form below, and we'll get to you as soon as we can.</p>
            <form className="contact-form" onSubmit={handleSubmit}>
                <input placeholder="Name" required />
                <input placeholder="Email" required />
                <textarea className="contact-message" placeholder="Message" required />
                <button>Send Message</button>
            </form>
        </div>
    )
}